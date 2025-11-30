import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import MenuCard from "../components/MenuCard"
import { menuData } from "../data"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import FAQ from "./../components/FAQ"
import { motion } from "framer-motion"
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <div className="py-16 px-6">
        <h2 className="text-center text-3xl font-bold mb-12">
          Our <span className="text-red-500">Menu</span>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {menuData.map((item) => (
              <MenuCard
                key={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                desc={item.desc}
              />
            ))}
          </div>
        </motion.div>
      </div>
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
