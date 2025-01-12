import React, { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import { createPost } from "../redux/Slices/postSlice";

const AddPost = () => {


    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const userToken = user?.access;

    const [previewImage, setPreviewImage] = useState(null);

    const formik = useFormik({
        initialValues: {
            title: "",
            content: "",
            image: null,
            category: "",
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required("Title is required")
                .min(4, "Title must be at least 4 characters"),
            content: Yup.string()
                .required("Content is required")
                .min(10, "Content must be at least 10 characters"),
            image: Yup.mixed()
                .required("Image is required"),
            category: Yup.string()
                .required("Category is required"),
        }),
        onSubmit: async (values, { resetForm }) => {
            const formData = new FormData();
            formData.append('title', values.title);
            formData.append('content', values.content);
            formData.append('image', values.image);
            formData.append('category', values.category);




            try {
                await dispatch(createPost({ formData, token: userToken })).unwrap();
                toast.success(`New post added successfully`);
                resetForm();
                setPreviewImage(null); // Reset the image inspection when success
            } catch (error) {
                toast.error(`Failed to add post: ${error.message}`);
            }
        },
    });

    const handleImageChange = (event) => {
        const file = event.currentTarget.files[0];
        if (file) {
            setPreviewImage(URL.createObjectURL(file)); // Resim Ön izlemesini Hazırlama
            formik.setFieldValue("image", file);
        }
    };

    return (
        <div className="container mx-auto flex justify-center mt-10">
            <div className="form-box w-[90%] md:w-1/2 bg-gray-700 rounded py-5">
                <h2 className="text-center pb-5 capitalize text-2xl">Add a New Post</h2>
                <form onSubmit={formik.handleSubmit}>
                    {/* Title Input */}
                    <div className="mb-5">
                        <input
                            type="text"
                            placeholder='Enter title'
                            className={`block w-[90%] mx-auto bg-transparent border rounded py-2 px-5 outline-none ${formik.touched.title && formik.errors.title
                                ? "border-red-500"
                                : "border-gray-300"
                                }`}
                            {...formik.getFieldProps("title")}
                            autoComplete="title"
                        />
                        {formik.touched.title && formik.errors.title ? (
                            <p className="text-red-300 text-sm mt-1  px-6">{formik.errors.title}</p>
                        ) : null}
                    </div>
                    {/* Content Input */}
                    <div className="mb-5">
                        <input
                            type="text"
                            placeholder='Enter content'
                            className={`block w-[90%] mx-auto bg-transparent border rounded py-2 px-5 outline-none ${formik.touched.content && formik.errors.content
                                ? "border-red-500"
                                : "border-gray-300"
                                }`}
                            {...formik.getFieldProps("content")}
                            autoComplete="content"
                        />
                        {formik.touched.content && formik.errors.content ? (
                            <p className="text-red-300 text-sm mt-1  px-6">{formik.errors.content}</p>
                        ) : null}
                    </div>
                    {/* Image Input */}
                    <div className="mb-5">
                        <input
                            type="file"
                            onChange={handleImageChange} // Replacing the logic of changing the image
                            className={`block w-[90%] mx-auto bg-transparent border rounded py-2 px-5 outline-none ${formik.touched.image && formik.errors.image
                                ? "border-red-500"
                                : "border-gray-300"
                                }`}
                        />
                        {formik.touched.image && formik.errors.image ? (
                            <p className="text-red-300 text-sm mt-1  px-6">{formik.errors.image}</p>
                        ) : null}
                    </div>
                    {/* Image Preview */}
                    {previewImage && (
                        <div className="mb-5 flex justify-center">
                            <img src={previewImage} alt="Preview" className="w-32 h-32 object-cover rounded" />
                        </div>
                    )}
                    {/* Select Category */}
                    <div className="mb-5">
                        <select
                            className={`block w-[90%] mx-auto bg-gray-700 border rounded py-2 px-5 outline-none ${formik.touched.category && formik.errors.category
                                ? "border-red-500"
                                : "border-gray-300"
                                }`}
                            {...formik.getFieldProps("category")}
                        >
                            <option value="">Select a category</option>
                            <option value="1">css</option>
                            <option value="2">html</option>
                            <option value="3">javascript</option>
                            <option value="4">python</option>
                        </select>
                        {formik.touched.category && formik.errors.category ? (
                            <p className="text-red-300 text-sm mt-1  px-6">{formik.errors.category}</p>
                        ) : null}
                    </div>
                    {/* Buttons */}
                    <div className="flex justify-center space-x-4">
                        <button
                            type="submit"
                            className="w-[40%] bg-blue-500 hover:bg-blue-700 rounded py-2">
                            Add Post
                        </button>
                        <button
                            type="button"
                            onClick={() => formik.resetForm()} // Add the field reset button
                            className="w-[40%] bg-gray-500 hover:bg-gray-700 rounded py-2">
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPost;
