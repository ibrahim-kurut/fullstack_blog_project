import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const UpdatePostModel = ({ setOpenUpdateModel, selectedPost, updatePostFunc }) => {

    const [title, setTitle] = useState(selectedPost.title);
    const [content, setContent] = useState(selectedPost.content);
    const [category, setCategory] = useState(selectedPost.category);
    const [img, setImg] = useState(selectedPost.image);

    const categories = ['Technology', 'Health', 'Lifestyle', 'Education'];

    const handleUpdate = () => {
        const updatedPost = {
            ...selectedPost,
            title,
            content,
            img,
            category,
        };
        updatePostFunc(updatedPost); // استدعاء دالة التحديث
    };



    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black">
            <div className="w-[90%] md:w-1/2 h-fit bg-gray-300 rounded relative p-4">
                {/* close icon */}
                <div className="flex justify-end m-2 text-red-500 cursor-pointer">
                    <IoMdCloseCircle size={25} onClick={() => setOpenUpdateModel(false)} />
                </div>
                {/* update form*/}
                <div className="flex flex-col gap-4">
                    <form>
                        {/* title */}
                        <label className="text-lg">Title</label>
                        <input type="text"
                            className="w-full p-2 rounded"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        {/* content */}
                        <label className="text-lg">Content</label>
                        <textarea
                            className="w-full p-2 rounded"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        {/* Category */}
                        <label className="block mb-1">Category:</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-2 rounded"
                        >
                            {categories.map((cat, index) => (
                                <option key={index} value={cat}>{cat}</option>
                            ))}
                        </select>
                        {/* image */}
                        <label className="text-lg">Image</label>
                        <input type="file"
                            className="w-full p-2 rounded"
                            onChange={(e) => setImg(e.target.files[0])}
                        />




                        <button
                            onClick={handleUpdate}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-
                        1 px-4 rounded">Update Post</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default UpdatePostModel;