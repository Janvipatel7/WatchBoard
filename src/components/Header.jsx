import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { tologout } from "../features/watches/watchSlice";
import { toast } from "react-toastify";
import { useState } from "react";

const Header = () => {

    const { pathname } = useLocation();
    const [menu, setMenu] = useState(false);
    const isLoggedIn = useSelector((state) => (state.users.isLoggedIn))
    console.log(isLoggedIn);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(tologout())
        navigate("/login");
        toast.success("Admin Logged Out Successfully !")
    }


    return (
        <>
            <header>
                <nav className="bg-[#16181e]  w-full z-20 top-0 start-0">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link to={"/"} className="flex items-center space-x-3">
                            <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
                                WatchBoard
                            </span>
                        </Link>

                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 text-white items-center">
                                <li>
                                    <Link to={"/"} className={`${pathname == "/" ? "text-[#795b50]  px-2 font-bold text-md" : "text-white px-2 text-md"}`}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/about"} className={`${pathname == "/about" ? "text-[#795b50] px-2 font-bold text-md" : "text-white px-2 text-md"}`}>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/shop"} className={`${pathname == "/shop" ? "text-[#795b50] px-2 font-bold text-md" : "text-white px-2 text-md"}`}>
                                        Shop
                                    </Link>
                                </li>
                                {isLoggedIn && (<Link to={"/watch"} className={`${pathname == "/watch" ? "text-[#795b50] px-2 font-bold text-md" : "text-white px-2 text-md"}`}> Watch </Link>)}
                            </ul>
                        </div>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse align-items-center justify-content-center">
                            {
                                isLoggedIn ?
                                    <button onClick={handleClick} type="button" className="btn-custom">Logout</button>
                                    :
                                    <button onClick={() => {
                                        navigate("/login")
                                    }} type="button" className="btn-custom">Login</button>
                            }
                            <div className="md:hidden">
                                <button onClick={() => setMenu(!menu)} className="text-white text-2xl mt-2">
                                    {menu ? '✕' : '☰'}
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                {menu && (
                    <div className={`md:hidden fixed inset-0 bg-[#16181e] z-50 p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out ${menu ? "translate-x-0" : "translate-x-full" }`}>
                        <div className="flex items-center justify-between">
                            <Link to={"/"} onClick={() => setMenu(false)} className="flex items-center space-x-3">
                                <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
                                    WatchBoard
                                </span>
                            </Link>
                            <button onClick={() => setMenu(false)}
                                className="text-white text-2xl w-8 h-8 flex items-center justify-center">
                                ✕
                            </button>
                        </div>

                        <ul className="flex flex-col mt-12 space-y-6 font-medium text-white text-lg">
                            <li>
                                <Link to="/" onClick={() => setMenu(false)}
                                    className={`${pathname === "/" ? "text-[#795b50] font-bold" : "text-white"} transition`}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={() => setMenu(false)}
                                    className={`${pathname === "/about" ? "text-[#795b50] font-bold" : "text-white"} transition`}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" onClick={() => setMenu(false)}
                                    className={`${pathname === "/shop" ? "text-[#795b50] font-bold" : "text-white"} transition`}>
                                    Shop
                                </Link>
                            </li>
                            {isLoggedIn && (
                                <li>
                                    <Link  to="/watch"  onClick={() => setMenu(false)}
                                        className={`${pathname === "/watch" ? "text-[#795b50] font-bold" : "text-white"} transition`}>
                                        Watch
                                    </Link>
                                </li>
                            )}
                        </ul>

                        <div className="mt-10">
                            {isLoggedIn ? (
                                <button onClick={() => {
                                        handleClick();
                                        setMenu(false);
                                    }} className="btn-custom w-full">
                                    Logout
                                </button>
                            ) : (
                                <button onClick={() => {
                                        setMenu(false);
                                        navigate("/login");
                                    }} className="btn-custom w-full">
                                    Login
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </header>
        </>
    )
}

export default Header