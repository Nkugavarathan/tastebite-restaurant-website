import React, { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h3 className="text-2xl font-bold text-red-500">TasteBite</h3>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Icons */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 bg-white px-6 pb-4 pt-2 shadow-md text-lg font-medium">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      )}
    </div>
  )
}

export default Navbar
