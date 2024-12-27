import React, { useState } from 'react';
import posts from '../data';
import UserInfo from '../components/user_profile/UserInfo';
import PostCard from '../components/post_comp/PostCard';
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import UpdatePostModel from '../components/post_comp/UpdatePostModel';

const Profile = () => {

    const [openUpdateModel, setOpenUpdateModel] = useState(false);
    const [updatePost, setUpdatePost] = useState([]);


    // handle update post
    const handleUpdatePost = (post) => {
        setOpenUpdateModel(true);
        setUpdatePost(post);
    };
    return (
        <div className="px-4 md:px-0 pb-10">
            {/* user info */}
            <UserInfo />

            {/* posts */}
            <div className="container mx-auto px-4 md:w-1/2">
                {posts.map((post) => (
                    <div className="relative" key={post.id}>
                        <PostCard post={post} />
                        <div className="absolute bottom-0 right-10 mb-2 flex gap-3">
                            <FaEdit
                                onClick={() => handleUpdatePost(post)}
                                size={20}
                                className="text-green-500 cursor-pointer"
                            />
                            <FaRegTrashAlt size={20} className="text-red-500 cursor-pointer" />
                        </div>
                    </div>
                ))}
            </div>
            {openUpdateModel && (
                <UpdatePostModel
                    setOpenUpdateModel={setOpenUpdateModel}
                    updatePost={updatePost}
                />
            )}
        </div>
    );
};

export default Profile;