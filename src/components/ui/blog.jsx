import { Space } from 'antd';
import { CommentOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar } from "antd";
import { format } from 'date-fns';
import maxresdefault from '../../assite/maxresdefault.jpg';
import maxresdefault1 from '../../assite/maxresdefault (1).jpg';
import logonewchares from '../../assite/logonewchares.jpg';
import Header from './header';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Unlock Your YouTube Potential with AI Suggestions',
            excerpt: 'Learn how AI-driven suggestions can help you optimize your YouTube content for better engagement and reach...',
            date: 'November 8, 2024',
            image: maxresdefault,
        },
        {
            id: 2,
            title: 'Maximize Earnings from YouTube with Data Insights',
            excerpt: 'Discover how data analytics can boost your YouTube earnings by improving content strategy and audience targeting...',
            date: 'October 25, 2024',
            image: maxresdefault1,
        },
        {
            id: 3,
            title: 'AI-Driven Thumbnails: The Secret to More Clicks',
            excerpt: 'Find out how AI-generated thumbnails can significantly increase your click-through rates and video views...',
            date: 'September 18, 2024',
            image: logonewchares,
        },
    ];
    const latestPosts = blogPosts
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

    return (
        <>
            <Header />
            <div className=' bg-[#1a1a1a] py-2 p-2 text-center '>
                <h1 className=" text-2xl font-bold text-white mt-5">Latest Updates</h1>
                <div className="flex bg-[#1a1a1a] py-[70px] flex-wrap justify-center gap-8">
                    { latestPosts.map((post) => (
                        <div
                            key={ post.id }
                            className="bg-black rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105"
                            style={ { minWidth: "320px", maxWidth: "360px", height: "500px" } }
                        >
                            <img
                                src={ post.image }
                                alt={ post.title }
                                className="w-full h-[220px] object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-white text-xl font-semibold mb-2">
                                    { post.title }
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                    { post.excerpt }
                                </p>
                                <div className="flex items-center text-gray-400 text-sm mb-4">
                                    <Avatar icon={ <UserOutlined /> } className="mr-2" />
                                    <span>Caroline Forsey</span>
                                </div>
                                <Space className="text-gray-400 text-xs">
                                    <span className="flex items-center">
                                        <CalendarOutlined className="mr-1" />
                                        { format(new Date(post.date), 'MMMM dd, yyyy') }
                                    </span>
                                    <span className="flex items-center ml-4">
                                        <CommentOutlined className="mr-1" />
                                        { Math.floor(Math.random() * 10) } Comments
                                    </span>
                                </Space>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </>
    );
};

export default Blog;
