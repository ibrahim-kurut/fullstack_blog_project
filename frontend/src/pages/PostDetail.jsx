import React from 'react'
import { Link, useParams } from 'react-router-dom'
import posts from '../data'

import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { PiArrowBendDoubleUpLeftBold } from "react-icons/pi";
import CommentList from '../components/post_comp/CommentList';
import PostDetailCard from '../components/post_comp/PostDetailCard';

const PostDetail = () => {
    const { id } = useParams()
    const post = posts.find(post => post.id === parseInt(id))


    return (
        <div className="container mx-auto">
            {/* post detail card */}
            <PostDetailCard post={post} />

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
                <Link to="/posts" className="flex items-center gap-3 bg-blue-500 px-2 py-1 rounded">
                    <span>go posts</span>
                    <PiArrowBendDoubleUpLeftBold size={20} />
                </Link>
            </div>
            {/* conmment list */}
            <div className="px-4">
                <CommentList post={post} />
            </div>

        </div>
    )
}

export default PostDetail;
