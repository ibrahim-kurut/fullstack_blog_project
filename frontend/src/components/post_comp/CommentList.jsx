import React from 'react'
import { MdEditSquare, MdDelete } from "react-icons/md";

const CommentList = ({ comments }) => {

    return (
        <div className="container mx-auto border mt-3 border-gray-600 rounded-lg p-4 shadow-sm w-full max-w-2xl">
            {
                comments && comments.map((comment, i) => {
                    return (
                        <div
                            key={i}
                            className="border-b border-gray-600 py-2"
                        >
                            <div>
                                <div className="flex gap-2 items-center h-8 py-6">
                                    <div className="w-8 h-8 rounded-full overflow-hidden">
                                        <img src="../../../assets/img/user_img.jpg" alt="user name" />
                                    </div>
                                    <p className="text-sm">{comment.username}</p>
                                </div>
                                <p className="pl-2">{comment.content}</p>
                                <div className="flex justify-end gap-3 pl-2 pt-2 text-xl">
                                    <p className="text-green-700 cursor-pointer">
                                        <MdEditSquare />
                                    </p>
                                    <p className="text-red-700 cursor-pointer">
                                        <MdDelete />
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>


    )
}

export default CommentList