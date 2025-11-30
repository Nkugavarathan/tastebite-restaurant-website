import React from "react"
import herobg from "/public/images/herobg.jpg"

function Hero() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
     style={{ backgroundImage: "url('/images/herobg.jpg')" }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Experience Authentic Flavor
        </h1>

        <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all">
          Explore Menu
        </button>
      </div>
    </div>
  )
}

export default Hero
