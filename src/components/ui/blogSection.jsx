import React from "react";
import { CommentOutlined, CalendarOutlined } from '@ant-design/icons';
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Space } from 'antd';

import maxresdefault from '../../assite/maxresdefault.jpg';
import maxresdefault1 from '../../assite/maxresdefault (1).jpg';
import logonewchares from '../../assite/logonewchares.jpg';


const blogPosts = [
  {
    id: 1,
    title: "Unlock Your YouTube Potential with AI Suggestions",
    excerpt:
      "Learn how AI-driven suggestions can help you optimize your YouTube content for better engagement and reach...",
    date: "November 8, 2024",
    image: maxresdefault,
  },
  {
    id: 2,
    title: "Maximize Earnings from YouTube with Data Insights",
    excerpt:
      "Discover how data analytics can boost your YouTube earnings by improving content strategy and audience targeting...",
    date: "October 25, 2024",
    image: maxresdefault1,
  },
  {
    id: 3,
    title: "AI-Driven Thumbnails: The Secret to More Clicks",
    excerpt:
      "Find out how AI-generated thumbnails can significantly increase your click-through rates and video views...",
    date: "September 18, 2024",
    image: logonewchares,
  },
];


const BlogSection = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 ">
      <p className="text-center text-[#00FCDB] uppercase tracking-wide font-medium">
        Latest Posts
      </p>
      <p className="text-center mt-2 font-extrabold text-4xl text-white">
        News & Articles
      </p>
      <div className="flex flex-wrap justify-center mt-10 gap-8">
        {blogPosts.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105"
            style={{ minWidth: "320px", maxWidth: "360px", height: "500px" }}
          >
            <img
              src={item.image}
              alt={`Blog ${index + 1}`}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-5">
              <h3 className="text-white text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {item.excerpt}
              </p>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <Avatar icon={<UserOutlined />} className="mr-2" />
                <span>Caroline Forsey</span>
              </div>
              <Space className="text-gray-400 text-xs">
                <span className="flex items-center">
                  <CalendarOutlined className="mr-1" />
                  {item.date}
                </span>
                <span className="flex items-center ml-4">
                  <CommentOutlined className="mr-1" />0 Comments
                </span>
              </Space>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
