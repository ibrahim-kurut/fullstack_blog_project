import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            rePassword: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(2, "The first name should not be less than 2 letters")
                .required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            email: Yup.string()
                .email("Invalid email format")
                .required("Email is required"),
            password: Yup.string()
                .min(8, "Password must be at least 8 characters long")
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                    "Password must contain at least one uppercase letter, one lowercase letter, and one number"
                )
                .required("Password is required"),
            rePassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords do not match!")
                .required("Confirm password is required"),
        }),
        onSubmit: (values) => {
            // Handle form submission logic
            console.log(values);
            toast.success("Account created successfully!");
        },
    });

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-6 text-black">
                    Create an Account
                </h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className={`text-black mt-1 p-2 w-full border ${formik.touched.firstName && formik.errors.firstName
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-md focus:ring-blue-500 focus:border-blue-500`}
                            placeholder="Enter your first name"
                            {...formik.getFieldProps("firstName")}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.firstName}</p>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className={`text-black mt-1 p-2 w-full border ${formik.touched.lastName && formik.errors.lastName
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-md focus:ring-blue-500 focus:border-blue-500`}
                            placeholder="Enter your last name"
                            {...formik.getFieldProps("lastName")}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.lastName}</p>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={`text-black mt-1 p-2 w-full border ${formik.touched.email && formik.errors.email
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-md focus:ring-blue-500 focus:border-blue-500`}
                            placeholder="Enter your email"
                            {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                        ) : null}
                    </div>

                    <div className="mb-4">
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
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                        ) : null}
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="rePassword"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="rePassword"
                            className={`text-black mt-1 p-2 w-full border ${formik.touched.rePassword && formik.errors.rePassword
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-md focus:ring-blue-500 focus:border-blue-500`}
                            placeholder="Confirm your password"
                            {...formik.getFieldProps("rePassword")}
                        />
                        {formik.touched.rePassword && formik.errors.rePassword ? (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.rePassword}</p>
                        ) : null}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign Up
                    </button>

                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <Link to="/login" className="text-blue-500 hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
