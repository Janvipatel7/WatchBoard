const About = () => {
  return (
    <section className="bg-[#0f1014]  text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About WatchBoard</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Quisque tempor massa enim
            enim tincidunt cursus non scelerisque phasellus. Sed ultricies quis
            massa dolor sod magna.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h3 className="text-4xl font-bold leading-snug mb-6">
              Our Journey in the <br /> World of Timepieces
            </h3>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet consectetur. Una egestas id lorem
              viverra facilisis. Integer nunc lorem fermentum velit turpis et
              in volutpat. Ac viverra urna morbi purus. At ultrices eget blandit
              tellus ornare.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
               <img src="/images/about-img1.svg" alt="about-img" />
                <div>
                  <h4 className="font-bold text-lg">Watch Repair</h4>
                  <p className="text-gray-400 text-sm">
                    Ac viverra urna morbi purus. At ultrices eget blandit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img src="/images/about-img2.svg" alt="about-img" />
                <div>
                  <h4 className="font-bold text-lg">Customization</h4>
                  <p className="text-gray-400 text-sm">
                    Ac viverra urna morbi purus. At ultrices eget.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img src="/images/about-img3.png" alt="about-img" />
                <div>
                  <h4 className="font-bold text-lg">Maintenance</h4>
                  <p className="text-gray-400 text-sm">
                    Ac viverra urna morbi purus. At ultrices eget.
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-8 px-8 py-3 bg-white text-black border border-white font-semibold transition hover:bg-black hover:text-white">
              DISCOVER MORE
            </button>
          </div>


          <div className="flex justify-center">
            <img src="/images/about-img.webp" alt="About" width={450}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About