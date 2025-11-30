import React from "react"
import { motion } from "framer-motion"
function About() {
  return (
    <div className="w-full py-16 px-6 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Why Choose <span className="text-red-500">Us? </span>
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-gray-100 p-8 rounded-xl text-center shadow hover:shadow-lg transition-all">
            <div className="text-5xl mb-4">🍲</div>
            <h3 className="text-red-500 text-2xl font-semibold mb-2">
              Fresh Ingredients
            </h3>
            <p className="text-gray-600">
              Locally sourced, organic produce daily.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-8 rounded-xl text-center shadow hover:shadow-lg transition-all">
            <div className="text-5xl mb-4">👨‍🍳</div>
            <h3 className="text-red-500 text-2xl font-semibold mb-2">
              Master Chefs
            </h3>
            <p className="text-gray-600">
              Experienced chefs creating unique dishes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-8 rounded-xl text-center shadow hover:shadow-lg transition-all">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-red-500 text-2xl font-semibold mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Quick delivery with hot, fresh meals.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About
