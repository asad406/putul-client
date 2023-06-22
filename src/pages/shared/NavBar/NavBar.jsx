// import React from 'react';
import { useContext } from 'react';
import logo from '../../../assets/logo.png';

import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut().then().catch();
    };

    return (
        <div className=" bg-indigo-100">
            <div className="navbar my-container-nav">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost md:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
                        >
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/allToys">All Toys</Link>
                            </li>
                            {user && (
                                <li>
                                    <Link to="/myToys">My Toys</Link>
                                </li>
                            )}
                            {user && (
                                <li>
                                    <Link to="/addAToy">Add a Toy</Link>
                                </li>
                            )}
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="btn btn-ghost normal-case font-bold text-3xl text-indigo-700"
                    >
                        <img
                            className="rounded-full"
                            src={logo}
                            alt=""
                        />
                        Putul
                    </Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'text-indigo-600' : ''
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'text-indigo-600' : ''
                                }
                                to="/allToys"
                            >
                                All Toys
                            </NavLink>
                        </li>
                        {user && (
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? 'text-indigo-600' : ''
                                    }
                                    to="/myToys"
                                >
                                    My Toys
                                </NavLink>
                            </li>
                        )}
                        {user && (
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? 'text-indigo-600' : ''
                                    }
                                    to="/addAToy"
                                >
                                    Add a Toy
                                </NavLink>
                            </li>
                        )}
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'text-indigo-600' : ''
                                }
                                to="/blog"
                            >
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.photoURL && (
                        <img
                            className="w-12 h-12 rounded-full mr-3"
                            src={user?.photoURL}
                            alt="image"
                            title={user?.displayName}
                        />
                    )}
                    {user ? (
                        <Link to="/">
                            <button
                                onClick={handleLogOut}
                                className="btn-custom"
                            >
                                Logout
                            </button>
                        </Link>
                    ) : (
                        <Link to="/login">
                            <button className="btn-custom">Login</button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
