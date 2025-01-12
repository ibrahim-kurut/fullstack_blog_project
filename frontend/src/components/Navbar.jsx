import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/Slices/userSlice';
import swal from "sweetalert";
const Navbar = ({ toggleColor, color }) => {


    const { user } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    // handle logout
    const handleLogout = () => {

        swal({
            title: "Are you sure?",
            text: `To make an exit?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((isOk) => {
                if (isOk) {
                    dispatch(logout());
                    navigate("/")

                } else {
                    swal("The exit is not done ...");
                }
            });










    };


    return (
        <nav className="p-4 bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between ">
                <div className="text-xl font-bold">blog</div>
                <div className="flex space-x-4">
                    <Link to="/" className="text-gray-800 hover:text-blue-500">home</Link>
                    <Link to="/posts" className="text-gray-800 hover:text-blue-500">posts</Link>
                    <Link to="/profile" className="text-gray-800 hover:text-blue-500">profile</Link>
                    <Link to="/add-post" className="text-gray-800 hover:text-blue-500">add post</Link>
                </div>
                <div className="flex space-x-4">
                    <div>
                        {
                            !user ?

                                (
                                    <Link to="/login" className="text-gray-800 hover:text-blue-500">
                                        login
                                    </Link>
                                )
                                :
                                (
                                    <p
                                        onClick={handleLogout}
                                        className="text-gray-800 hover:text-blue-500 cursor-pointer">
                                        logout

                                    </p>
                                )
                        }
                    </div>
                    <div
                        onClick={toggleColor}
                        className="text-gray-800"
                    >
                        {color === 'bg-gray-800' ? (
                            <MdSunny size={20} />
                        ) : (
                            <FaMoon size={20} />
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;