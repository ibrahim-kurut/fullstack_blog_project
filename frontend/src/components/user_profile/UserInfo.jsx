import React, { useState } from 'react'
import { FaCamera } from "react-icons/fa";
import { toast } from 'react-toastify';
import { FaEdit } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const UserInfo = () => {
    const [userName, setUserName] = useState("user name");
    const [bio, setBio] = useState("Lorem ipsum dolor sit amet consectetur");
    const [openUpdateModel, setOpenUpdateModel] = useState(false);



    const [file, setFile] = useState(null)

    // formSubmitHandle
    const formSubmitHandle = (e) => {
        e.preventDefault();
        if (!file) return toast.warning(("Please select a photo"))
        console.log("Form submitted");
    }

    // update user info
    const updateUserInfo = (e) => {
        e.preventDefault();
        // validation
        if (!userName) return toast.warning(("Please enter your name"))
        if (userName.trim().length < 3) return toast.warning(("The user name must not be less than 3 letters."))
        if (!bio) return toast.warning(("Please enter your bio"))

        setOpenUpdateModel(false)
        toast.success("user info updated successfully")

    }



    return (
        <div className="container mx-auto border rounded m-5 px-4 md:w-1/2">
            <div className="flex flex-col gap-3 py-8 capitalize justify-between items-center">
                <div className="user_img w-40 h-40 rounded-full overflow-hidden ">
                    <img src={file ? URL.createObjectURL(file) : "../../assets/img/user_img.jpg"} alt="user_img" />
                </div>

                <form
                    onSubmit={formSubmitHandle}
                    className="flex flex-row-reverse gap-3 w-[30%]"
                >
                    <abbr title="Choose profile photo">
                        <label
                            htmlFor="file"
                            className="cursor-pointer flex items-center"
                            title='change profile photo'
                        >
                            <FaCamera size={24} />
                        </label>
                    </abbr>

                    <input
                        className="hidden"
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />

                    <button
                        type="submit"
                        className="upload-profile-photo-btn"
                    >
                        Upload
                    </button>
                </form>
                <div className="flex justify-end items-center w-full">
                    <Link
                        to="/add-post"
                        className="text-blue-500"
                        data-tooltip-id="add-post-tooltip"
                        data-tooltip-content="Add a new post"
                    >
                        <IoMdAddCircleOutline
                            className="hover:animate-spin"
                            size={30} />
                    </Link>
                    <Tooltip
                        id="add-post-tooltip"
                        place="top"
                        style={{ backgroundColor: "rgb(50, 130, 246)", color: "#fff" }}
                    />
                </div>

                {
                    openUpdateModel ?
                        (

                            <form onSubmit={updateUserInfo}>
                                <div className="flex flex-col capitalize justify-between w-96">
                                    <label className="capitalize" htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="bg-transparent border border-gray-600 rounded p-1"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                    <label className="capitalize" htmlFor="bio">Bio:</label>
                                    <textarea
                                        id="bio"
                                        name="bio"
                                        className="bg-transparent border border-gray-600 rounded p-1"
                                        value={bio}
                                        onChange={(e) => setBio(e.target.value)}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className='bg-blue-500 hover:bg-blue-600 px-2 py-1 mt-1 rounded'
                                >
                                    save
                                </button>
                                <button
                                    type="submit"
                                    className='bg-red-500 hover:bg-red-600 px-2 py-1 mt-1 rounded ml-3'
                                    onClick={() => setOpenUpdateModel(false)}
                                >
                                    close
                                </button>

                            </form>
                        )
                        :
                        (
                            <>
                                <h1 className={`text-2xl`}>
                                    {userName}
                                </h1>
                                <h3 className={`text-center`}>
                                    {bio}
                                </h3>
                            </>
                        )
                }







            </div>
            <div className="flex justify-end mb-3 cursor-pointer text-green-500">
                <FaEdit onClick={() => setOpenUpdateModel(true)} size={25} />
            </div>
        </div>
    )
}

export default UserInfo