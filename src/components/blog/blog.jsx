// components/Blog.jsx (or pages/Blog.jsx depending on your project structure)
"use client";
import React, { useMemo, useState } from 'react';

import Pagination from './Pagination'; // Adjust path as needed
import PopularPosts from './PopularPosts'; // Adjust path as needed
import SearchBar from './SearchBar'; // Adjust path as needed

import { blogPosts } from '@/data/blogPosts';
import BlogPostCard from './BlogPostCard';
import Categories from './Categories';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6); // You can adjust how many posts per page
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Get unique categories for the filter
  const categories = useMemo(() => {
    const allCategories = blogPosts.map(post => post.category);
    return [...new Set(allCategories)].sort();
  }, []);

  // Filter and search logic
  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    if (selectedCategory) {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    if (searchTerm) {
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return posts;
  }, [searchTerm, selectedCategory]);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > Math.ceil(filteredPosts.length / postsPerPage)) {
      return; // Prevent invalid page numbers
    }
    setCurrentPage(pageNumber);
  };

  // Reset page to 1 when search term or category changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <section className="relative lg:py-24 md:py-16 py-12 section-blog bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8">
            {/* Main Blog Content */}
            <div className="lg:col-span-8 col-span-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
                {currentPosts.length > 0 ? (
                  currentPosts.map(post => (
                    <BlogPostCard key={post.id} post={post} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-10 text-gray-600">
                    No blog posts found matching your criteria.
                  </div>
                )}
              </div>
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={filteredPosts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 col-span-12 lg:pl-8">
              <SearchBar onSearch={setSearchTerm} />
              <Categories categories={categories} onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
              {/* <PopularPosts posts={blogPosts} />  */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;