import React from "react"

function Contact() {
  return (
    <div className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Contact <span className="text-red-500">Us</span>
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 bg-white p-8 rounded-xl shadow">
        {/* Left Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-4">
            Have questions or want to visit? We’re here to help!
          </p>

          <p className="font-semibold">📍 Address:</p>
          <p className="text-gray-600 mb-3">123 Main Street, Colombo</p>

          <p className="font-semibold">📞 Phone:</p>
          <p className="text-gray-600 mb-3">+94 77 123 4567</p>

          <p className="font-semibold">📧 Email:</p>
          <p className="text-gray-600">contact@tastebite.com</p>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-lg"
          />

          <textarea
            placeholder="Message"
            rows="5"
            className="border p-3 rounded-lg"
          ></textarea>

          <button className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
