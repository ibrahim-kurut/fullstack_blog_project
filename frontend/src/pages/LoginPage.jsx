import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/Slices/userSlice';

const LoginPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.user);

    console.log(user);



    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required("Username is required")
                .min(4, "Username must be at least 3 characters"),
            password: Yup.string()
                .required("Password is required")
                .min(6, "Password must be at least 6 characters"),
        }),
        onSubmit: (values) => {
            // Handle form submission logic
            dispatch(login(values))
                .unwrap()
                .then(() => {
                    toast.success("Login successful")
                    navigate('/')
                })
                .catch((error) => {
                    toast.error(`Login failed: ${error}`);
                });
        },
    });

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-6 text-black">
                    Login to My Blog
                </h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700"
                        >
                            User Name
                        </label>
                        <input
                            type="text"
                            id="username"
                            className={`text-black mt-1 p-2 w-full border ${formik.touched.username && formik.errors.username
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-md focus:ring-blue-500 focus:border-blue-500`}
                            placeholder="Enter your username"
                            {...formik.getFieldProps("username")}
                            autoComplete="username"
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.username}</p>
                        ) : null}
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className={`text-black mt-1 p-2 w-full border ${formik.touched.password && formik.errors.password
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-md focus:ring-blue-500 focus:border-blue-500`}
                            placeholder="Enter your password"
                            {...formik.getFieldProps("password")}
                            autoComplete="password"
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                        ) : null}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>

                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-blue-500 hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
