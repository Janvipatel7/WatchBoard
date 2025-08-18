import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { tologout } from "../features/watches/watchSlice";

const Header = () => {

  
    const {pathname} = useLocation();
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
                            {isLoggedIn && (<Link to={"/watch"} className={`${pathname == "/watch" ? "text-[#795b50] px-2 font-bold text-md" : "text-white px-2 text-md"}`}> Watch </Link>)}
                        </ul>
                    </div>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        {
                            isLoggedIn ? 
                                <button onClick={handleClick}  type="button" className="text-white bg-[#795b50] hover:bg-[#815849]  font-medium rounded-lg text-[15px] py-2 px-[33px] text-center">Logout</button>
                                :
                                <button onClick={() => {
                                    navigate("/login")
                                }}  type="button" className="text-white bg-[#795b50] hover:bg-[#815849]  font-medium rounded-lg text-[15px] py-2 px-[33px] text-center">Login</button>
                        }
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header