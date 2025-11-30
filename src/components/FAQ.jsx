import React, { useState } from "react"

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  const faqs = [
    {
      q: "What makes your food special?",
      a: "We use fresh, locally sourced ingredients and authentic cooking methods.",
    },
    {
      q: "Do you offer home delivery?",
      a: "Yes! We provide fast home delivery with hot, fresh meals.",
    },
    {
      q: "Can I book a table online?",
      a: "Yes, you can reserve your table through our website or by calling us.",
    },
    {
      q: "Do you cater for events?",
      a: "We provide catering services for parties, weddings, and corporate events.",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Frequently Asked <span className="text-red-500">Questions</span>
      </h2>

      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div key={i} className="border border-gray-300 rounded-lg">
            <button
              onClick={() => toggle(i)}
              className="w-full text-left px-4 py-4 flex justify-between items-center font-semibold text-lg"
            >
              {item.q}
              <span className="text-2xl">{openIndex === i ? "-" : "+"}</span>
            </button>

            {openIndex === i && (
              <div className="px-4 pb-4 text-gray-600">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
