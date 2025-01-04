import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';

const AddPost = () => {

    const formik = useFormik({
        initialValues: {
            title: "",
            content: "",
            image: null,
            category: "",
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required("title is required")
                .min(4, "title must be at least 4 characters"),
            content: Yup.string()
                .required("content is required")
                .min(10, "content must be at least 10 characters"),
            image: Yup.mixed()
                .required("image is required"),
            category: Yup.string()
                .required("category is required"),
        }),
        onSubmit: (values, { resetForm }) => {
            // Handle form submission logic
            toast.success(`New post added successfully`);
            console.log("values ", values);
            // Reset the form fields
            resetForm();

        },
    });

    return (
        <div className="container mx-auto flex justify-center mt-10">
            <div className="form-box w-[90%] md:w-1/2 bg-gray-700 rounded py-5">
                <h2 className="text-center pb-5 capitalize text-2xl">add a new post</h2>
                <form onSubmit={formik.handleSubmit}>
                    {/* title input */}
                    <div className="mb-5">
                        <input
                            type="text"
                            placeholder='enter title'
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
                    {/* content input*/}
                    <div className="mb-5">
                        <input
                            type="text"
                            placeholder='enter content'
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
                    {/* image input */}
                    <div className="mb-5">
                        <input
                            type="file"
                            onChange={(event) => {
                                formik.setFieldValue("image", event.currentTarget.files[0]);
                            }}
                            className={`block w-[90%] mx-auto bg-transparent border rounded py-2 px-5 outline-none ${formik.touched.image && formik.errors.image
                                ? "border-red-500"
                                : "border-gray-300"
                                }`}
                        />
                        {formik.touched.image && formik.errors.image ? (
                            <p className="text-red-300 text-sm mt-1  px-6">{formik.errors.image}</p>
                        ) : null}
                    </div>
                    {/* select category */}
                    <div className="mb-5">
                        <select
                            className={`block w-[90%] mx-auto bg-gray-700  border rounded py-2 px-5 outline-none ${formik.touched.category && formik.errors.category
                                ? "border-red-500"
                                : "border-gray-300"
                                }`}
                            {...formik.getFieldProps("category")}
                        >
                            <option value="">Select a category</option>
                            <option value="category1">Category 1</option>
                            <option value="category2">Category 2</option>
                            <option value="category3">Category 3</option>
                        </select>
                        {formik.touched.category && formik.errors.category ? (
                            <p className="text-red-300 text-sm mt-1  px-6">{formik.errors.category}</p>
                        ) : null}
                    </div>
                    {/* btn */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-[90%] bg-blue-500 hover:bg-blue-700 rounded py-2">
                            Add Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPost;