import React from "react"

function MenuCard({ img, title, price, desc }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition-all p-4 text-center">
      {/* Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-56 object-cover rounded-xl mb-4"
      />

      {/* Title */}
      <h3 className="title text-xl font-bold mb-1">{title}</h3>

      {/* Price */}
      <p className=" text-lg font-bold mb-2">
        Rs <span className="text-red-600">{price}</span>
      </p>

      {/* Description */}
      <p className="text-gray-600 mb-4 text-sm">{desc}</p>

      {/* Button */}
      <button className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition">
        Order Now
      </button>
    </div>
  )
}

export default MenuCard
