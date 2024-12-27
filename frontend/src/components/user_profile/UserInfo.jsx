import React, { useState } from 'react'
import { FaCamera } from "react-icons/fa";
import { toast } from 'react-toastify';
const UserInfo = () => {


    const [file, setFile] = useState(null)

    // formSubmitHandle
    const formSubmitHandle = (e) => {
        e.preventDefault();
        if (!file) return toast.warning(("Please select a photo"))
        console.log("Form submitted");
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


                <h1 className={`text-2xl`}>user name</h1>
                <h3 className={`text-center`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quidem labore odit, iste quod error.iste quod error
                </h3>
            </div>
        </div>
    )
}

export default UserInfo