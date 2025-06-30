// components/PopularPosts.jsx
import React from 'react';

const PopularPosts = ({ posts }) => {
  const sortedPosts = [...posts].sort((a, b) => b.views - a.views).slice(0, 5); // Get top 5 by views

  return (
    <div className="mb-8">
      <h4 className="text-xl font-bold text-secondary mb-4">Popular Posts</h4>
      <ul className="space-y-4">
        {sortedPosts.map(post => (
          <li key={post.id} className="flex items-center gap-x-4">
            <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded-md" />
            <div>
              <h5 className="text-lg font-bold text-secondary hover:text-primary duration-300">
                <a href={`/blog/${post.id}`}>{post.title}</a>
              </h5>
              <p className="text-sm text-gray-600">{post.date} &bull; {post.views} views</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPosts;