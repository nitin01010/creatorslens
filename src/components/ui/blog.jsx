import { Space } from 'antd';
import { CommentOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar } from "antd";
import { format } from 'date-fns';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Boost Your Social Media Growth with Data Analytics',
            excerpt: 'Discover how leveraging data analytics can enhance your social media strategy and drive engagement...',
            date: 'November 1, 2024',
        },
        {
            id: 2,
            title: 'AI-Powered Video Suggestions: A Game Changer for Creators',
            excerpt: 'Explore the benefits of AI-driven video suggestions and how they can help you create more engaging content...',
            date: 'October 15, 2024',
        },
        {
            id: 3,
            title: 'Timing Your Posts for Maximum Engagement',
            excerpt: 'Learn the best times to post on various social media platforms to reach your audience effectively...',
            date: 'September 30, 2024',
        },
        {
            id: 4,
            title: 'Monetizing Your Content: Strategies for Success',
            excerpt: 'Uncover effective strategies to earn money from your social media content and maximize your revenue...',
            date: 'August 10, 2024',
        },
        {
            id: 5,
            title: 'The Importance of Consistency in Content Creation',
            excerpt: 'Understand why consistency is key in social media and how it affects your audience engagement...',
            date: 'July 20, 2024',
        },
        {
            id: 6,
            title: 'Using Trends to Drive Your Content Strategy',
            excerpt: 'Find out how to identify and leverage trending topics to boost your visibility and attract new followers...',
            date: 'June 15, 2024',
        },
    ];

    // Sort blog posts by date (newest first) and get the latest three
    const latestPosts = blogPosts
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

    return (
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
                            src="https://images.unsplash.com/photo-1491472253230-a044054ca35f?q=80&w=1768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                                    0 Comments
                                </span>
                            </Space>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    );
};

export default Blog;
