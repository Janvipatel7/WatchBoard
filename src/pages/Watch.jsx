import { Navigate, useNavigate, useParams } from "react-router-dom"
import WatchTable from "../components/WatchTable"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import cards from "../components/cards";
import { addWatchCard } from "../features/watches/watchSlice";

const Watch = () => {
    const watches = useSelector((state) => {
         return state.users.watchlist
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        let cardData = cards.find((item , idx) => {
            return idx == id
        })
            dispatch(addWatchCard(cardData))
            navigate("/watch")
    }, [])
    return (
        <>
            <section className="pt-[100px] bg-[#16181e] h-screen">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <h2 className="text-white font-medium text-[20px]">Watch Details</h2>
                        <div>
                            <button onClick={() => navigate("/add-watch")} type="button" className="text-white bg-[#795b50] hover:bg-[#815849] font-medium rounded-md text-sm px-5 py-3 flex items-center gap-2 transition">Add Watch +</button>
                        </div>
                    </div>
                    <div className="mt-5">
                        <WatchTable watches={watches} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Watch