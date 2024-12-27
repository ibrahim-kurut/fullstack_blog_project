import React from 'react'
import posts from '../data';
import UserInfo from '../components/user_profile/UserInfo';
import PostCard from '../components/post_comp/PostCard';
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";



const Profile = () => {
    return (
        <div className="px-4 md:px-0">
            {/* user info */}
            <UserInfo />

            {/* posts */}
            <div className="container mx-auto px-4 md:w-1/2">
                {
                    posts?.map((post) => {
                        return (
                            <div className="relative">
                                <PostCard post={post} key={post.id} />
                                <div className="absolute bottom-0 right-10 mb-2 flex gap-3">
                                    <FaEdit size={20} className="text-green-500 cursor-pointer" />
                                    <FaRegTrashAlt size={20} className="text-red-500 cursor-pointer" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Profile