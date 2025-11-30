import React from "react"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Logo + About */}
        <div>
          <h3 className="text-2xl font-bold text-red-500 mb-4">TasteBite</h3>
          <p className="text-gray-300">
            Bringing you the finest flavors with authentic taste and quality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
          <ul className="text-gray-300 space-y-2">
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Get in Touch</h4>
          <p className="text-gray-300">📍 Colombo, Sri Lanka</p>
          <p className="text-gray-300">📞 +94 77 123 4567</p>
          <p className="text-gray-300">📧 contact@tastebite.com</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-2xl text-white">
            <a href="#" className="hover:text-red-500 transition">
              <FaFacebookF />
            </a>

            <a href="#" className="hover:text-red-500 transition">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-red-500 transition">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-10">
        © 2025 TasteBite. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
