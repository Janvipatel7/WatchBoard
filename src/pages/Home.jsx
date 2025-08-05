const Home = () => {
    return (
        <>
            <section className="relative bg-[#0f1014] py-14  overflow-hidden">
                <div className="absolute left-0 bottom-0 w-40 h-40 bg-[radial-gradient(circle,#795b50_1px,transparent_1px)] bg-[size:16px_16px] opacity-20 rounded-full blur-sm"></div>
                <div className="absolute right-10 top-10 w-24 h-24 bg-[radial-gradient(circle,#fff_1px,transparent_1px)] bg-[size:12px_12px] opacity-10 rounded-full blur-sm"></div>

                <div className="absolute bottom-28 z-10">
                    <img src="/images/hero_bg.svg" alt="Brown Badge" className="w-26 md:w-32"/>
                </div>

                <div className="container mx-auto px-3 text-center">
                    <div className="relative mb-12 flex justify-center items-center gap-5">
                        <img
                            src="/images/herowatch1.webp"
                            alt="Watch 1"
                            className="w-60 md:w-72 lg:w-60 transform rotate-[-20deg] z-10" />
                        <img
                            src="/images/herowatch2.webp"
                            alt="Watch 2"
                            className="w-60 md:w-72 lg:w-60 transform rotate-[20deg] z-0 -ml-5"/>

                        <div className="absolute right-0 top-0">
                            <img src="/images/hero_text.webp" className="w-26" alt="Text Badge" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                        Limited Edition Of <br /> High Quality Watches
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Home;
