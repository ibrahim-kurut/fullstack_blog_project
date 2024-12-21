import React from 'react'
import { useParams } from 'react-router-dom'
import posts from '../data'

import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";

const PostDetail = () => {
    const { id } = useParams()
    const post = posts.find(post => post.id === parseInt(id))

    // Date format
    const formattedDate = new Date(post?.created_at).toLocaleDateString();

    return (
        <div className="container mx-auto">
            <div className="flex justify-center mt-5 p-4">
                <div key={post?.id} className="flex flex-col items-center border border-gray-600 rounded-lg p-4 shadow-sm w-full max-w-2xl">
                    <div className="flex sm:flex-row justify-between items-start sm:items-center sm:space-x-4 mb-2 w-full">
                        <p className="bg-blue-500 py-1 px-4 rounded mb-2 sm:mb-0">author: {post?.username}</p>
                        <p className="bg-blue-500 py-1 px-4 rounded">{post?.category_name}</p>
                    </div>

                    {/* Responsive image with flexible height */}
                    <div className="img rounded w-full mb-4">
                        <img
                            src={post?.image}
                            alt={post?.title}
                            className="w-full h-auto rounded-lg object-contain" // use 'object-contain' for better scaling
                        />
                    </div>

                    <div className="text-start w-full">
                        <div className="flex justify-between mb-2 w-full">
                            <h2 className="text-xl font-bold mb-2 flex-1">{post?.title}</h2>
                            <p className="text-gray-500">{formattedDate}</p>
                        </div>
                        <h2 className="mb-2">{post?.content}</h2>
                    </div>
                </div>
            </div>
            {/* like and comment */}
            <div className="container mx-auto px-4 md:px-0 flex justify-between md:w-1/2">
                <div className="flex justify-start gap-5">
                    <button className="flex gap-1">
                        <BiLike size={22} />
                        <span>{post?.likes_count}</span>
                    </button>
                    <button className="flex gap-2">
                        <FaRegComment size={20} />
                        <span>{post?.comments?.length}</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default PostDetail;
