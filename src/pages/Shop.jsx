import WatchCard from "../components/WatchCard"
import cards from "../components/cards"

const Shop = () => {
  return (
    <section className="bg-[#0f1014] min-h-screen text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Product</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our premium watch collection designed with elegance and style.
          </p>
        </div>


        <div className="flex flex-wrap -m-4">
          {cards.map((watch, idx) => (
            <WatchCard  key={idx} id={idx} img={watch.img} name={watch.name} model={watch.model} color={watch.color} price={watch.price}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Shop
