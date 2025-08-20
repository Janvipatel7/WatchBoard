import { useState } from "react"
import { useDispatch } from "react-redux"
import { addwatch } from "../features/watches/watchSlice"
import { useNavigate } from "react-router-dom"


const AddWatch = () => {

    const [input , setInput] = useState({
        name : "" , model : "" , color : "" , price : ""
    })
    const [errors , setErrors] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleChange = (e) => {
        setInput({...input , [e.target.id]: e.target.value})
        setErrors({...errors, [e.target.id] : ""})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let validateErrors = {}

        if(input.name.trim() === ""){
            validateErrors.name = "Enter Valid Name !";
        }

        if(input.model.trim() === ""){
            validateErrors.model = "Enter Valid Model Name !"
        }

        if(input.color.trim() === ""){
            validateErrors.color = "Please select a color !"
        }

        if (input.price.trim() === "") {
            validateErrors.price = "Enter Valid Price !";
        }

        setErrors(validateErrors)

        if (Object.keys(validateErrors).length == 0) {
            dispatch(addwatch(input))
            navigate("/watch")
        }
    }

    return (
        <div className="add-trip min-h-screen flex items-center justify-center bg-[#0f1014] pt-[100px]">
            <div className="w-full lg:w-1/2 flex item-center justify-center p-5">
                <div className="w-full bg-white rounded-md max-w-md p-8 shadow-lg">
                    <div className="container mx-auto">
                        <h2 className="mb-5 text-3xl text-[#815849] font-medium">Add Watch</h2>
                        <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-5">

                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                                    Watch Name :
                                </label>
                                <input onChange={handleChange} value={input.name} type="text" id="name" placeholder="Enter watch name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-[#795b50] focus:outline-none block w-full p-2.5"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="model" className="block mb-2 text-sm font-medium text-gray-900">
                                    Watch Model Name :
                                </label>
                                <input onChange={handleChange} value={input.model} type="text"  id="model"  placeholder="Enter model name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-[#795b50] focus:outline-none block w-full p-2.5"
                                />
                                {errors.model && <p className="text-red-500 text-sm mt-1">{errors.model}</p>}
                            </div>

                            <div>
                                <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900">
                                    Color :
                                </label>
                                <input  onChange={handleChange} value={input.color} type="text" id="color" placeholder="Enter color"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-[#795b50] focus:outline-none block w-full p-2.5"
                                />
                                {errors.color && <p className="text-red-500 text-sm mt-1">{errors.color}</p>}
                            </div>

                            <div>
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">
                                    Price :
                                </label>
                                <input onChange={handleChange} value={input.price} type="number"  id="price" placeholder="Enter price"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-[#795b50] focus:outline-none block w-full p-2.5"
                                />
                                {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                            </div>


                            <button type="submit" className="bg-gradient-to-r from-amber-950 to-[#795b50] text-white
                                     focus:ring-4 focus:outline-none focus:ring-[#795b50] font-medium rounded-lg 
                                     text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                                Add Watch
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddWatch