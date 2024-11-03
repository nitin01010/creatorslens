
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

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                { blogPosts.map((post) => (
                    <div key={ post.id } className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2">{ post.title }</h2>
                            <p className="text-gray-600 mb-4">{ post.excerpt }</p>
                            <p className="text-gray-500 text-sm">{ post.date }</p>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    );
};

export default Blog;
