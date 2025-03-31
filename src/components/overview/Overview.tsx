

const Overview = () => {
  return (
    <>
    
    <div
        className="relative w-full h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/asd.jpg')" }}
      >
        {/* Light Overlay */}
        <div className="w-full h-screen  bg-opacity-80 flex flex-col justify-center items-center text-center  px-6 text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 poppins-medium relative inline-block">
  What is ABCD
  <span className="relative inline-block">
    E
    <span className="absolute top-[-0.2rem] right-[-1rem] text-lg md:text-xl">©</span>
  </span>
  
</h2>

          <p className="text-lg md:text-xl max-w-xl poppins-regular">
          ABCDE is a versatile, easy-to-use electronic chip designed for makers, engineers, and students. Whether you're a beginner or an expert, ABCDE lets you prototype, innovate, and build electronic solutions effortlessly.
          </p>
        </div>
      </div>

      {/* Additional Section */}
      <section className="bg-white text-gray-900 py-16 text-center">
        <h3 className="text-3xl font-bold mb-6 poppins-regular">
          Why ABCDE Stands Out?
        </h3>
        <p className="max-w-2xl mx-auto text-gray-600 poppins-light">
        ABCDE is craffed for Plug & Play, Low Power Consumption, Customizable,  Wireless Connectivity.
        </p>
      </section>
    
    </>
  )
}

export default Overview