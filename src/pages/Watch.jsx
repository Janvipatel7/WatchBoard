import { useNavigate, useParams } from "react-router-dom"
import WatchTable from "../components/WatchTable"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import cards from "../components/cards"
import { addWatchCard } from "../features/watches/watchSlice"

const Watch = () => {
  const watches = useSelector((state) => state.users.watchlist)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    let cardData = cards.find((item, idx) => idx == id)
    if (cardData) {
      dispatch(addWatchCard(cardData))
    }
  }, [id, dispatch])

  return (
    <section className="pt-[100px] min-h-screen bg-gradient-to-br from-[#0f1014] via-[#1b1d24] to-[#0f1014] text-white px-6">
      <div className="container mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold  text-white text-transparent">
            Watch Collection
          </h2>
          <button
            onClick={() => navigate("/add-watch")}
            type="button"
            className="bg-gradient-to-r from-[#795b50] to-[#9c7e70] hover:opacity-90 
                       text-white font-medium rounded-xl px-6 py-3 flex items-center gap-2 
                       shadow-md transition-all duration-300"
          >
            + Add Watch
          </button>
        </div>

 
        <div className="bg-[#1e1f25]  rounded-2xl shadow-xl p-6 border border-[#2a2b31]">
          {watches.length > 0 ? (
            <WatchTable watches={watches} />
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-white">
              <span className="text-6xl mb-4">⌚</span>
              <p className="text-lg">No watches added yet.</p>
              {/* <button
                onClick={() => navigate("/add-watch")}
                className="mt-6 bg-[#795b50] hover:bg-[#815849] px-6 py-2 rounded-lg transition"
              >
                Add Your First Watch
              </button> */}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Watch
