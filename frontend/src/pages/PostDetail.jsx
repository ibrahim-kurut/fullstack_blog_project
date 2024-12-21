import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import posts from '../data'

import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { PiArrowBendDoubleUpLeftBold } from "react-icons/pi";
import CommentList from '../components/post_comp/CommentList';
import PostDetailCard from '../components/post_comp/PostDetailCard';
import { toast } from 'react-toastify';

const PostDetail = () => {
    const { id } = useParams()
    const post = posts.find(post => post.id === parseInt(id))

    const [commentModel, setCommentModel] = useState(false)
    const [textComment, setTextComment] = useState('')
    const [comments, setComments] = useState(post?.comments || []);
    const [likes, setLikes] = useState(post?.likes_count || 0);

    if (!post) {
        return <div className="text-center mt-5">Post not found</div>;
    }


    // handel comment
    const handleComment = (e) => {
        e.preventDefault();
        if (textComment.trim() !== '') {
            const newComment = {
                id: Date.now(),
                username: post.username,
                content: textComment,
                userId: 1,
                postId: post.id,
            };
            setComments((prevComments) => [...prevComments, newComment]);
            setCommentModel(false);
            setTextComment('');
            toast.success("The post was commented on.")
            // send to server
            console.log(newComment);

        }
    };

    // handel like
    const handleLike = () => {
        setLikes((prevLikes) => prevLikes + 1);
        toast.success("The post was liked.");
    }

    return (
        <div className="container mx-auto">
            {/* post detail card */}
            <PostDetailCard post={post} />

            {/* like and comment */}
            <div className="container mx-auto px-4 md:px-0 flex justify-between md:w-1/2">
                <div className="flex justify-start gap-5">
                    <button
                        onClick={handleLike}
                        className="flex gap-1">
                        <BiLike size={22} />
                        <span>{likes}</span>
                    </button>
                    <button
                        onClick={() => setCommentModel(true)}
                        className="flex gap-2">
                        <FaRegComment size={20} />
                        <span>{post?.comments?.length}</span>
                    </button>
                </div>
                <Link to="/posts" className="flex items-center gap-3 bg-blue-500 px-2 py-1 rounded">
                    <span>go posts</span>
                    <PiArrowBendDoubleUpLeftBold size={20} />
                </Link>
            </div>
            {/* comment form */}
            {
                commentModel && (
                    <form
                        onSubmit={handleComment}
                        className="container mx-auto border mt-3 border-gray-600 rounded-lg p-4 shadow-sm w-full max-w-2xl">
                        <textarea
                            className="w-full h-20 p-2 bg-transparent border outline-none border-gray-600 rounded-lg"
                            placeholder="write a comment"
                            value={textComment}
                            onChange={(e) => setTextComment(e.target.value)}
                        />
                        <button className="bg-blue-500 px-2 py-1 rounded">comment</button>
                        <button
                            onClick={() => setCommentModel(false)}
                            className="bg-red-500 ml-3 px-2 py-1 rounded">close</button>
                    </form>
                )
            }
            {/* conmment list */}
            <div className="px-4">
                <CommentList comments={comments} />
            </div>

        </div>
    )
}

export default PostDetail;
