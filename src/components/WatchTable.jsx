import { useDispatch } from "react-redux"
import { deleteWatch } from "../features/watches/watchSlice"
import { Link } from "react-router-dom"

const WatchTable = ({watches}) => {
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteWatch(id))
    }
    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-[14px] text-gray-900 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Watch Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Watch Model
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            watches.map((watch) => {
                                return <tr key={watch.id} className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {watch.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {watch.model}
                                    </td>
                                    <td className="px-6 py-4">
                                        {watch.color}
                                    </td>
                                    <td className="px-6 py-4">
                                        {watch.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <Link to={`/edit-watch/${watch.id}`} className="font-medium text-green-600 hover:underline">Edit</Link>
                                            <button onClick={() => handleDelete(watch.id)}
                                                className="font-medium text-red-600 hover:underline">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WatchTable