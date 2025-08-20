import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { tologin } from "../features/watches/watchSlice"

const Login = () => {

    const [input , setInput] = useState({
        email:"" , password: ""
    })
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.users.isLoggedIn)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setInput({...input , [e.target.id]: e.target.value})
    }

    useEffect(() => {
        if(isLoggedIn){
            navigate("/watch")
        }
    } , [isLoggedIn])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(tologin(input))
    } 
    return (
        <>
            <section className="bg-[#0f1014]  min-h-screen flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="px-8 py-10">
                        <h1 className="text-2xl font-extrabold text-[#795b50] mb-6 text-center">
                            Adimn Login
                        </h1>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-[#795b50] mb-2">
                                    Your email
                                </label>
                                <input onChange={handleChange} value={input.email}
                                    type="email" name="email" id="email" placeholder="admin@gmail.com" required
                                    className="w-full px-4 py-3 text-sm border border-[#795b50] rounded-xl focus:ring-1 focus:ring-[#795b50] focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-semibold text-[#795b50] mb-2">
                                    Password
                                </label>
                                <input onChange={handleChange} value={input.password}
                                    type="password" name="password" id="password" placeholder="admin@123" required
                                    className="w-full px-4 py-3 text-sm border border-[#795b50] rounded-xl focus:ring-1 focus:ring-[#795b50] focus:outline-none"
                                />
                            </div>
                            <div className="text-left">
                                <a href="#" className="text-sm font-medium text-[#795b50] hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 bg-gradient-to-br from-amber-950 to-[#795b50] text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition">
                                <span className="tracking-wider">LOG IN</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Login