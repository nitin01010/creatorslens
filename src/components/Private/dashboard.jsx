import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { CircleUser, Eye, MailCheck, ThumbsUpIcon, UserCheck, Users } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Progress } from 'antd';


const Dashboard = () => {
    const { user } = useAuth0();
    const { logout } = useAuth0();
    const [youtubeMessage, setYoutubeMessage] = useState('');
    const [videoList, setVideoList] = useState([]);
    const [isYouTubeConnected, setIsYouTubeConnected] = useState(false);
    const [accessToken, setAccessToken] = useState('');
    const [totalViews, setTotalViews] = useState(0);
    const [totalLikes, setTotalLikes] = useState(0);
    const [subscriberCount, setSubscriberCount] = useState(0);
    const [videoCount, SetvideoCount] = useState(0);
    const [aiSuggestionData, setAiSuggestionData] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCard, setSelectedCard] = useState(null);
    const navigate = useNavigate();

    const GOOGLEAUTH_CLIENT_ID = '1025794377406-lida7mfm7ar8am5tarlntv53chs16409.apps.googleusercontent.com';

    const REDIRECT_URI ='https://www.creatorslens.in/dashboard';
    //'http://localhost:3000'
    const SCOPE = 'https://www.googleapis.com/auth/youtube.readonly';

    const getOAuthURL = () => (
        `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLEAUTH_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token`
    );


    const handleYouTubeConnect = () => {
        window.location.href = getOAuthURL();
    };

    useEffect(() => {
        const hash = window.location.hash;
        const params = new URLSearchParams(hash.replace('#', '?'));
        const token = params.get('access_token');

        if (token) {
            setAccessToken(token);
            fetchYouTubeData(token);
            setIsYouTubeConnected(true);
        }
    }, []);

    const fetchYouTubeData = async (token) => {
        try {
            const { data } = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
                headers: { Authorization: `Bearer ${token}` },
                params: { part: 'snippet,contentDetails,statistics', mine: true },
            });
            SetvideoCount(data?.items[0]?.statistics?.videoCount)
            if (data.items && data.items.length > 0) {
                const channel = data.items[0];
                const uploadsPlaylistId = channel.contentDetails.relatedPlaylists.uploads;
                setSubscriberCount(channel.statistics.subscriberCount);
                setYoutubeMessage('YouTube channel data retrieved successfully.');
                fetchVideosFromPlaylist(token, uploadsPlaylistId);
            } else {
                setYoutubeMessage('No YouTube channel found for this account.');
            }
        } catch (error) {
            setYoutubeMessage('An error occurred while fetching YouTube data.');
            console.error('Error fetching YouTube data:', error);
        }
    };

    const fetchVideosFromPlaylist = async (token, playlistId) => {
        try {
            const videoIds = [];
            let nextPageToken = '';

            while (nextPageToken !== null) {
                const { data } = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
                    headers: { Authorization: `Bearer ${token}` },
                    params: {
                        part: 'snippet',
                        playlistId,
                        maxResults: 50,
                        pageToken: nextPageToken,
                    },
                });

                videoIds.push(...data.items.map(item => item.snippet.resourceId.videoId));
                nextPageToken = data.nextPageToken || null;
            }

            fetchVideoDetails(token, videoIds);
        } catch (error) {
            console.error('Error fetching playlist videos:', error);
            setYoutubeMessage('An error occurred while fetching playlist videos.');
        }
    };

    const fetchVideoDetails = async (token, videoIds) => {
        try {
            const videoChunks = Array.from({ length: Math.ceil(videoIds.length / 50) }, (_, i) => videoIds.slice(i * 50, i * 50 + 50));
            const allVideoDetails = [];
            let totalViewsTemp = 0;
            let totalLikesTemp = 0;

            for (const chunk of videoChunks) {
                const { data } = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
                    headers: { Authorization: `Bearer ${token}` },
                    params: { part: 'snippet,statistics', id: chunk.join(',') },
                });
                allVideoDetails.push(...data.items);

                data.items.forEach(video => {
                    totalViewsTemp += parseInt(video.statistics.viewCount);
                    totalLikesTemp += parseInt(video.statistics.likeCount);
                });
            }

            setTotalViews(totalViewsTemp);
            setTotalLikes(totalLikesTemp);
            setVideoList(allVideoDetails);
            setYoutubeMessage('All video data retrieved successfully.');
            setLoading(false);
        } catch (error) {
            console.error('Error fetching video details:', error);
            setYoutubeMessage('An error occurred while fetching video details.');
            setLoading(false);
        }
    };

    const handleAISuggestions = async (video, idx) => {
        try {
            let { localized } = video.snippet;
            let { title, description } = localized;
            let tags = video.snippet?.tags;

            const response = await axios.post('https://creatorslensbackend-production.up.railway.app/api/v1/ai/suggestion', {
                title,
                description,
                tags,
            });
            const { generated_text } = response?.data?.result;
            toast.success('AI search completed successfully!');
            setSelectedCard(idx)
            setAiSuggestionData(generated_text)
        } catch (error) {
            toast.error('Failed to complete AI search.');
            setAiSuggestionData(prevData => ({ ...prevData, [video.id]: null }));
        }
    };


    const filteredVideos = videoList.filter((video) =>
        video.snippet.localized.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className=' bg-[#181818]'>
            <div className=' border border-[#2c2b2b] rounded-t-lg'>
                <div className='flex  border-b-2 border-[#2c2b2b] rounded-t-lg justify-between items-center px-2 md:px-10 py-4 text-white '>
                    <div className=' flex gap-16'>
                        <b>
                            <h1 className=' text-xl font-bold' onClick={ () => navigate('/dashboard') }> CreatorsLens.com</h1>
                        </b>
                        <ul className=' font-semibold text-lg hidden lg:flex gap-6'>
                            <li className=' hover:text-white ' onClick={ () => navigate('/dashboard') }>Dashborad</li>
                            <Dialog>
                                <DialogTrigger asChild className=' -mt-1'>
                                    <Button >Profile</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px] p-5 bg-black text-white">
                                    <DialogHeader>
                                        <DialogTitle className=" text-xl">Profile</DialogTitle>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <img src={ `${user?.picture}` } className=' w-[80px]  rounded-3xl m-auto -mt-10  h-[80px]  ' />
                                        <p className=' flex gap-3'><CircleUser />{ user?.name }</p>
                                        <p className=' flex gap-3'><MailCheck />{ user?.email }</p>
                                        <Button className=" mt-5"><p onClick={ () => logout({ logoutParams: { returnTo: window.location.origin } }) }>Log out</p></Button>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </ul>
                    </div>
                    <div className=' flex gap-5'>
                        <Input
                            className=" bg-[#181818] hidden md:block shadow-lg border border-gray-500 mb-6 text-white w-[100%] lg:w-[350px] xl:w-[300px]"
                            placeholder="Search videos by title..."
                            value={ searchQuery }
                            onChange={ (e) => setSearchQuery(e.target.value) }
                        />


                        <Dialog>
                            <DialogTrigger asChild>
                                <Avatar>
                                    <AvatarImage src={ `${user?.picture}` } className=" shadow-2xl" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] border-gray-400 rounded-md p-5 bg-black text-white">
                                <DialogHeader>
                                    <DialogTitle className=" text-xl text-start">Profile</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <img src={ `${user?.picture}` } className=' shadow-2xl w-[80px]  rounded-3xl m-auto -mt-10  h-[80px]  ' />
                                    <p className=' flex gap-3'><CircleUser />{ user?.name }</p>
                                    <p className=' flex gap-3'><MailCheck />{ user?.email }</p>
                                    <Button className=" mt-5"><p onClick={ () => logout({ logoutParams: { returnTo: window.location.origin } }) }>Log out</p></Button>
                                </div>
                            </DialogContent>
                        </Dialog>

                    </div>
                </div>

                <div className='flex items-center justify-between p-2'>
                    <p className=' py-6 px-5 md:px-10 text-3xl md:text-4xl font-bold text-white'>Dashboard</p>
                    <Button className=' py-2 bg-black mr-7 font-semibold hover:bg-black  shadow-xl  transition-all ease-linear  text-center rounded-3xl  md:text-lg text-white' ><p onClick={ () => handleYouTubeConnect() }>{ isYouTubeConnected ? 'Connected' : 'Connect Youtube' }</p></Button>
                </div>

                <div className='Hidden px-8 py-2 flex  justify-between overflow-x-scroll gap-10'>
                    <div className=' shadow-2xl w-[300px] min-w-[300px] h-[120px] rounded-[16px] border  border-[#2c2b2b]  flex flex-col gap-2 p-6 '>
                        <p className=' text-white text-xl font-bold flex items-center justify-between'>Total Subscribe   <UserCheck /></p>
                        <b><p className=' text-white text-2xl font-bold'>{ subscriberCount }</p></b>
                    </div>
                    <div className=' shadow-2xl w-[300px] min-w-[300px] h-[120px] rounded-[16px] border  border-[#2c2b2b]  flex flex-col gap-2 p-6 '>
                        <p className=' text-white text-xl font-bold flex items-center justify-between'>Total View   <Eye /></p>
                        <b><p className=' text-white text-2xl font-bold'>{ totalViews }</p></b>
                    </div>
                    <div className=' shadow-2xl w-[300px] min-w-[300px] h-[120px] rounded-[16px] border  border-[#2c2b2b]  flex flex-col gap-2 p-6 '>
                        <p className=' text-white text-xl font-bold flex items-center justify-between'>Total Likes   <ThumbsUpIcon /></p>
                        <b><p className=' text-white text-2xl font-bold'>{ totalLikes }</p></b>
                    </div>
                    <div className=' shadow-2xl w-[300px] min-w-[300px] h-[120px] rounded-[16px] border  border-[#2c2b2b]  flex flex-col gap-2 p-6 '>
                        <p className=' text-white text-xl font-bold flex items-center justify-between'>Total Video <Users /></p>
                        <b><p className=' text-white text-2xl font-bold'>{ videoCount } </p></b>
                    </div>
                </div>

                <div className=' m-1  mt-14 md:m-8  md:mt-16  border rounded-t-lg border-[#2c2b2b]  flex flex-col justify-between '>
                    <div className=' flex justify-end p-2 py-4 px-4'>
                        <Input
                            className=" bg-[#181818] shadow-lg border border-gray-500 mb-6 text-white w-[100%] lg:w-[350px] xl:w-[300px]"
                            placeholder="Search videos by title..."
                            value={ searchQuery }
                            onChange={ (e) => setSearchQuery(e.target.value) }
                        />
                    </div>

                    <div className='  text-white p-1  grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-3  gap-5 m-auto  rounded'>
                        { filteredVideos.length === 0 ? <p className=' text-gray-500'>No Videos</p> : null }
                        {
                            filteredVideos?.map((item, idx) => {
                                const { title, description } = item?.snippet?.localized;
                                return (
                                    <div key={ idx } className=' w-full sm:w-[347px] md:w-[400px] rounded-[8px] shadow-2xl  bg-black  p-2 md:p-4 max-w-[400px]'>
                                        <img class="object-cover h-48 w-96 rounded-md " src={ item?.snippet?.thumbnails?.high?.url } />
                                        <div className='  flex gap-4   py-2 mt-2'>
                                            <div className=' flex gap-2 items-center'>
                                                <Eye size={ 20 } />
                                                <p>{ item?.statistics?.viewCount }</p>
                                            </div>
                                            <div className=' flex gap-2 items-center'>
                                                <ThumbsUpIcon size={ 20 } />
                                                <p>{ item?.statistics?.likeCount }</p>
                                            </div>
                                        </div>
                                        <p className=' text-xl font-bold py-2 mb-2 mt-2'>{ title }</p>
                                        <div className='mt-3 flex flex-wrap gap-2 '>
                                            <Button className="hover:bg-white hover:text-black transition-all ease-linear capitalize" onClick={ () => handleAISuggestions(item, idx) }>AI Search</Button>
                                            <Button onClick={ () => toast.dark('We are Making...') } className="hover:bg-white hover:text-black transition-all ease-linear capitalize">AI generate thumbnail</Button>
                                            <Button onClick={ () => toast.dark('We are Working...') } className="hover:bg-white hover:text-black transition-all ease-linear capitalize">AI video ideas</Button>
                                        </div>
                                        <div>
                                            { selectedCard === idx && <p className=' mt-5 text-gray-400'>{ aiSuggestionData }</p> }
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;
