import React, { useState } from 'react';
import { MdEditSquare, MdDelete } from "react-icons/md";

const CommentList = ({ comments, onUpdateComment }) => {
    const [selectedComment, setSelectedComment] = useState(null);
    const [updatedContent, setUpdatedContent] = useState('');

    const handleUpdateComment = (comment) => {
        setSelectedComment(comment.id);
        setUpdatedContent(comment.content);
    };

    const handleSaveComment = () => {
        onUpdateComment(selectedComment, updatedContent); // Use the update function coming from the parent
        setSelectedComment(null);
        setUpdatedContent('');
    };

    return (
        <div className="container mx-auto border mt-3 border-gray-600 rounded-lg p-4 shadow-sm w-full max-w-2xl">
            {comments.map((comment) => (
                <div key={comment.id} className="border-b border-gray-600 py-2">
                    <div>
                        <div className="flex gap-2 items-center h-8 py-6">
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <img src="../../../assets/img/user_img.jpg" alt="user name" />
                            </div>
                            <p className="text-sm">{comment.username}</p>
                        </div>

                        {/* Edit comment section */}
                        {selectedComment === comment.id ? (
                            <div className="flex flex-col gap-2 items-start my-2">
                                <textarea
                                    className="w-full p-2 border border-gray-600 rounded-lg bg-transparent"
                                    value={updatedContent}
                                    onChange={(e) => setUpdatedContent(e.target.value)}
                                />
                                <div className="flex gap-2">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={handleSaveComment}
                                    >
                                        update
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => setSelectedComment(null)}
                                    >
                                        cancel
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <p className="pl-2">{comment.content}</p>
                        )}

                        <div className="flex justify-end gap-3 pl-2 pt-2 text-xl">
                            <p
                                onClick={() => handleUpdateComment(comment)}
                                className="text-green-700 cursor-pointer"
                            >
                                <MdEditSquare />
                            </p>
                            <p className="text-red-700 cursor-pointer">
                                <MdDelete />
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default CommentList;
