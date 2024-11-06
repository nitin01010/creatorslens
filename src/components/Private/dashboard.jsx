import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Skeleton } from 'antd';

const Dashboard = () => {
    const { user } = useAuth0();
    const [youtubeMessage, setYoutubeMessage] = useState('');
    const [videoList, setVideoList] = useState([]);
    const [isYouTubeConnected, setIsYouTubeConnected] = useState(false);
    const [accessToken, setAccessToken] = useState('');
    const [totalViews, setTotalViews] = useState(0);
    const [totalLikes, setTotalLikes] = useState(0);
    const [subscriberCount, setSubscriberCount] = useState(0);

    const [loading, setLoading] = useState(true); // To control loading state for videos and stats

    const GOOGLEAUTH_CLIENT_ID = '1025794377406-lida7mfm7ar8am5tarlntv53chs16409.apps.googleusercontent.com';
    const REDIRECT_URI = 'http://localhost:3000/dashboard';
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
            setLoading(false); // Stop loading once data is fetched
        } catch (error) {
            console.error('Error fetching video details:', error);
            setYoutubeMessage('An error occurred while fetching video details.');
            setLoading(false); // Stop loading on error
        }
    };

    const handleAISuggestions = async (video) => {
        try {
            alert('Upcoming feature | We are working on this.');
        } catch (error) {
            console.error('Error handling AI suggestions:', error);
        }
    };

    return (
        <div className="bg-[#0D0D0D] text-white p-6 min-h-screen flex flex-col items-center">
            <div className="bg-gradient-to-r bg-black text-white w-[100%]  md:w-[60%] rounded-lg p-6 mb-8 shadow-lg">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold mb-4">Welcome, { user.name }</h1>
                    <div className="flex justify-center space-x-8 text-lg">
                        <div className="text-center">
                            <Skeleton active loading={ loading } paragraph={ { rows: 1 } } title={ false }>
                                <div className="font-bold text-xl">{ totalViews }</div>
                            </Skeleton>
                            <div className="text-sm text-gray-400">Total Views</div>
                        </div>
                        <div className="text-center">
                            <Skeleton active loading={ loading } paragraph={ { rows: 1 } } title={ false }>
                                <div className="font-bold text-xl">{ totalLikes }</div>
                            </Skeleton>
                            <div className="text-sm text-gray-400">Total Likes</div>
                        </div>
                        <div className="text-center">
                            <Skeleton active loading={ loading } paragraph={ { rows: 1 } } title={ false }>
                                <div className="font-bold text-xl">{ subscriberCount }</div>
                            </Skeleton>
                            <div className="text-sm text-gray-400">Subscribers</div>
                        </div>
                    </div>
                </div>
            </div>

            <button
                className={ `${isYouTubeConnected ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white font-semibold py-3 px-6 rounded-xl shadow-xl transition-all transform hover:scale-105 mt-4` }
                onClick={ handleYouTubeConnect }
                disabled={ isYouTubeConnected }
            >
                { isYouTubeConnected ? 'Connected to YouTube' : 'Connect YouTube' }
            </button>

            { youtubeMessage && (
                <p className="text-center mt-6 text-lg text-gray-200">{ youtubeMessage }</p>
            ) }

            { loading ? (
                <Skeleton active paragraph={ { rows: 4 } } />
            ) : (
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    { videoList.map((video) => (
                        <div key={ video.id } className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                            <img className="rounded-lg mb-4 w-full" src={ video.snippet.thumbnails.medium.url } alt={ video.snippet.title } />
                            <h3 className="text-xl font-semibold text-gray-900">{ video.snippet.title }</h3>
                            <p className="text-gray-600 mt-2">Views: { video.statistics.viewCount }</p>
                            <p className="text-gray-600">Likes: { video.statistics.likeCount }</p>
                            <div className="mt-4 flex space-x-4">
                                <button
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                                    onClick={ () => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank') }
                                >
                                    View Video
                                </button>
                                <button
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                                    onClick={ () => handleAISuggestions(video) }
                                >
                                    AI Suggestions
                                </button>
                            </div>
                        </div>
                    )) }
                </div>
            ) }
        </div>
    );
};

export default Dashboard;
