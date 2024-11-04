import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const Dashboard = () => {
    const { user } = useAuth0();
    const [youtubeMessage, setYoutubeMessage] = useState('');
    const [videoList, setVideoList] = useState([]);
    const [isYouTubeConnected, setIsYouTubeConnected] = useState(false);
    const [accessToken, setAccessToken] = useState('');

    const GOOGLEAUTH_CLIENT_ID = '1025794377406-lida7mfm7ar8am5tarlntv53chs16409.apps.googleusercontent.com';
    const REDIRECT_URI = 'http://localhost:3000/dashboard' // Ensure this is set in your environment
    const SCOPE = 'https://www.googleapis.com/auth/youtube.readonly';

    // Function to create OAuth URL
    const getOAuthURL = () => (
        `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLEAUTH_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token`
    );

    // Handle YouTube connection
    const handleYouTubeConnect = () => {
        window.location.href = getOAuthURL();
    };

    // Effect to handle access token after redirect
    useEffect(() => {
        const hash = window.location.hash;
        const params = new URLSearchParams(hash.replace('#', '?'));
        const token = params.get('access_token');

        if (token) {
            setAccessToken(token); // Store token in state
            fetchYouTubeData(token);
            setIsYouTubeConnected(true);
        }
    }, []);

    // Fetch YouTube channel data
    const fetchYouTubeData = async (token) => {
        try {
            const { data } = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
                headers: { Authorization: `Bearer ${token}` },
                params: { part: 'snippet,contentDetails', mine: true },
            });

            if (data.items && data.items.length > 0) {
                const uploadsPlaylistId = data.items[0].contentDetails.relatedPlaylists.uploads;
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

    // Fetch videos from the specified playlist
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

    // Fetch details for the specified video IDs
    const fetchVideoDetails = async (token, videoIds) => {
        try {
            const videoChunks = Array.from({ length: Math.ceil(videoIds.length / 50) }, (_, i) => videoIds.slice(i * 50, i * 50 + 50));
            const allVideoDetails = [];

            for (const chunk of videoChunks) {
                const { data } = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
                    headers: { Authorization: `Bearer ${token}` },
                    params: { part: 'snippet,statistics', id: chunk.join(',') },
                });
                allVideoDetails.push(...data.items);
            }

            setVideoList(allVideoDetails);
            setYoutubeMessage('All video data retrieved successfully.');
        } catch (error) {
            console.error('Error fetching video details:', error);
            setYoutubeMessage('An error occurred while fetching video details.');
        }
    };

    // Placeholder for future AI suggestion functionality
    const handleAISuggestions = async (video) => {
        try {
            alert('Upcoming feature | We are working on this.');
        } catch (error) {
            console.error('Error handling AI suggestions:', error);
        }
    };

    return (
        <div className="bg-gray-100 p-5">
            <h1 className="text-center text-3xl mt-5 capitalize">Welcome { user.name }</h1>
            <button
                className={ `${isYouTubeConnected ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'} text-white font-semibold py-2 px-6 rounded-lg shadow-lg mt-5 mx-auto block` }
                onClick={ handleYouTubeConnect }
                disabled={ isYouTubeConnected }
            >
                { isYouTubeConnected ? 'Connected to YouTube' : 'Connect YouTube' }
            </button>

            { youtubeMessage && <p className="text-center mt-3 text-lg text-gray-700">{ youtubeMessage }</p> }

            { videoList.length > 0 && (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    { videoList.map((video) => (
                        <div key={ video.id } className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg">
                            <img className="rounded-md mb-3 w-full" src={ video.snippet.thumbnails.medium.url } alt={ video.snippet.title } />
                            <h3 className="text-lg font-semibold">{ video.snippet.title }</h3>
                            <p className="text-gray-500 mt-2">Views: { video.statistics.viewCount }</p>
                            <p className="text-gray-500">Likes: { video.statistics.likeCount }</p>
                            <div className="mt-4 flex space-x-4">
                                <button
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
                                    onClick={ () => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank') }
                                >
                                    View Video
                                </button>
                                <button
                                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
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
