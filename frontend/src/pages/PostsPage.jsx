import React, { useState } from 'react';
import PostCard from '../components/post_comp/PostCard';
import posts from '../data'
import FilterPost from '../components/post_comp/FilterPost';
const PostPage = () => {

    const [searchQuery, setSearchQuery] = useState('');


    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto p-4">
            {/* filter Section */}
            <FilterPost searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            {/* Posts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map(post => (
                        <PostCard post={post} key={post.id} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">No posts found.</p>
                )}
            </div>
        </div>
    );
};

export default PostPage;