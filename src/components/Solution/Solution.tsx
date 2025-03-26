import React from 'react'

const Solution = () => {
  return (
    <>
  <section className="py-16 text-center bg-white">
  <h3 className="text-4xl font-bold mb-8 text-gray-900 ">Our Solution</h3>

  <div className="space-y-12 max-w-6xl mx-auto px-6">
    {/* Card 1: Open Source Projects */}
    <div className="relative flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Text Section */}
      <div className="p-8 md:w-1/2 flex flex-col justify-center text-left">
        <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full w-max">OPEN SOURCE</span>
        <h4 className="text-3xl font-bold mt-4">Open Source Projects</h4>
        <p className="text-lg text-gray-700 mt-2">
          Access a collection of ready-to-use open-source electronic projects, collaborate with the community, and contribute to innovative solutions.
        </p>
        <div className="mt-4">
          <button className="px-5 py-2 border border-black rounded-lg font-semibold transition-colors duration-300 hover:bg-black hover:text-white">
            Explore
          </button>
        </div>
      </div>
      {/* Image Section */}
      <div className="md:w-1/2 overflow-hidden">
        <img src="/images/opensource (2).jpg" alt="Open Source Projects" 
             className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105" />
      </div>
    </div>

    {/* Card 2: Industrial Applications */}
    <div className="relative flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Text Section */}
      <div className="p-8 md:w-1/2 flex flex-col justify-center text-left">
        <span className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full w-max">INDUSTRY</span>
        <h4 className="text-3xl font-bold mt-4">Industrial Applications</h4>
        <p className="text-lg text-gray-700 mt-2">
          Learn how electronics is transforming industries like automation, healthcare, and smart devices, with real-world case studies and expert insights.
        </p>
        <div className="mt-4">
          <button className="px-5 py-2 border border-black rounded-lg font-semibold transition-colors duration-300 hover:bg-black hover:text-white">
            Learn More
          </button>
        </div>
      </div>
      {/* Image Section */}
      <div className="md:w-1/2 overflow-hidden">
        <img src="/images/industrial.jpg" alt="Industrial Applications" 
             className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105" />
      </div>
    </div>

    {/* Card 3: 30-Day Course */}
    <div className="relative flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Text Section */}
      <div className="p-8 md:w-1/2 flex flex-col justify-center text-left">
        <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full w-max">LEARNING</span>
        <h4 className="text-3xl font-bold mt-4">30-Day Course</h4>
        <p className="text-lg text-gray-700 mt-2">
          A step-by-step learning program designed to take you from a beginner to an electronics designer, covering circuit design, prototyping, and microcontrollers.
        </p>
        <div className="mt-4">
          <button className="px-5 py-2 border border-black rounded-lg font-semibold transition-colors duration-300 hover:bg-black hover:text-white">
            Join Now
          </button>
        </div>
      </div>
      {/* Image Section */}
      <div className="md:w-1/2 overflow-hidden">
        <img src="/images/training.jpg" alt="30-Day Course" 
             className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105" />
      </div>
    </div>
  </div>
</section>



    </>
  )
}

export default Solution