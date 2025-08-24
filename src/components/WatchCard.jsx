import { useNavigate } from "react-router-dom"

const WatchCard = ({ id, img, name, model, color, price }) => {
  const navigate = useNavigate()

  return (
    <div className="w-full h-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="bg-[#0f1014] text-white rounded-xl shadow-lg overflow-hidden group relative border border-gray-700">
        <div className="relative flex justify-center p-6">
          <img  src={img}  alt={model} 
            className="h-52 object-contain transition-transform duration-300 group-hover:scale-105"/>
        </div>

        <div className="px-6">
          <button onClick={() => navigate(`/watch/${id}`)}
            className="w-full px-5 py-2 bg-black border-white text-white border  font-semibold transition hover:bg-white hover:text-black">
            ADD WATCH
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-md font-semibold">{model}</h3>
          <p className="text-sm text-gray-400">{name} · {color}</p>
          <p className="text-sm mt-1">30 mm</p>
          <p className="text-md font-bold mt-2">₹{price}</p>
        </div>
      </div>
    </div>
  )
}

export default WatchCard
