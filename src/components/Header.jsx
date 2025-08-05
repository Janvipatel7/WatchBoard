import { Link, useLocation } from "react-router-dom"

const Header = () => {

    const {pathname} = useLocation();
    return (
        <>


            <nav className="bg-[#0f1014]   w-full z-20 top-0 start-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">WatchBoard</span>
                    </a>

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
                                <Link to={"/services"} className={`${pathname == "/services" ? "text-[#795b50] px-2 font-bold text-md" : "text-white px-2 text-md"}`}>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to={"/watch"} className={`${pathname == "/watch" ? "text-[#795b50] px-2 font-bold text-md" : "text-white px-2 text-md"}`}>
                                    Services
                                </Link>
                            </li>
                        </ul>

                    </div>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="text-white bg-[#795b50] hover:bg-[#815849]  font-medium rounded-lg text-[15px] py-2 px-[33px] text-center ">Login</button>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header