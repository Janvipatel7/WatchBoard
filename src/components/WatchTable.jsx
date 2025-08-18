
const WatchTable = () => {
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
                        {/* <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                               
                            </th>
                            <td className="px-6 py-4">
                               
                            </td>
                            <td className="px-6 py-4">
                               
                            </td>
                            <td className="px-6 py-4">
                              
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-4">
                                    <button  className="font-medium text-green-600 hover:underline">Edit</button>
                                    <button  className="font-medium text-red-600 hover:underline">Delete</button>
                                </div>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WatchTable