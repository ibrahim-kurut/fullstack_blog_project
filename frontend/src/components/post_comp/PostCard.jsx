import React from 'react';

const PostCard = ({ post }) => {
    // Date format
    const formattedDate = new Date(post?.created_at).toLocaleDateString();

    // Extract the first 10 words from content
    const get_a_short_comment = (content) => {
        if (!content) return '';
        const words = content.split(' ');
        return words.length > 10 ? words.slice(0, 10).join(' ') + ' ...' : content;
    };
    return (
        <div key={post?.id} className="flex flex-col items-center border border-gray-600 rounded-lg p-4 shadow-sm mb-5 w-full max-w-xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center sm:space-x-4 mb-2 w-full">
                <p className="bg-blue-500 py-1 px-4 rounded mb-2 sm:mb-0">author: {post?.username}</p>
                <p className="bg-blue-500 py-1 px-4 rounded">{post?.category_name}</p>
            </div>

            {/* Responsive image */}
            <div className="img rounded w-full h-full flex justify-center mb-4">
                <img
                    src={post?.image}
                    alt={post?.title}
                    className="w-full h-auto rounded-lg object-fill"
                />
            </div>

            <div className="text-start w-full">
                <div className="flex justify-between mb-2 w-full">
                    <h2 className="text-xl font-bold mb-2 flex-1">{post?.title}</h2>
                    <p className="text-gray-500">{formattedDate}</p>
                </div>
                <h2 className="mb-2">{get_a_short_comment(post?.content)}</h2>
            </div>
        </div>
    );
}

export default PostCard;
