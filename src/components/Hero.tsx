import Title from "./Title"

const Hero = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between min-h-[400px] py-16 mt-8">
      <div className="w-full lg:w-1/2 xl:w-[35%] flex flex-col items-start justify-center gap-6 py-8">
        <Title text="Want anything to be easy with LaslesVPN" highlight="LaslesVPN" />
        <p className="text-base font-light text-gray-600 text-left py-8">Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
            <button
              className="mt-2 bg-red-500 text-white font-medium text-lg shadow hover:bg-red-600 transition"
              style={{ width: 193, height: 54, borderRadius: 16 }}
            >
              Get started
            </button>
      </div>
      <div
        className="w-full lg:w-1/2 xl:w-[65%] h-64 lg:h-[400px] bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: "url('/src/assets/image_hero.png')" }}
      ></div>
    </section>
  )
}

export default Hero
