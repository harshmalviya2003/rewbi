"use client"
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center mb-4">
            <hr className="w-16 h-1 bg-gray-800 border-0 rounded mr-4 transition-all duration-500 ease-in-out" />
            <span className="text-gray-900 font-semibold tracking-wider uppercase">Who We Are</span>
            <hr className="w-16 h-1 bg-gray-800 border-0 rounded ml-4 transition-all duration-500 ease-in-out" />
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
            Crafting the <span className="text-gray-800 font-bold">Future</span> with AI
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Where innovation meets bold solutions to transform your business
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              We are <span className="font-semibold text-gray-900">visionaries in artificial intelligence</span>, relentlessly pushing the boundaries of technological possibility. Our elite team merges cutting-edge research with real-world applications to drive epic transformations.
            </p>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Since our founding in 2025, we've empowered <span className="font-semibold text-gray-900">over 500 organizations</span> worldwide to revolutionize their operations with our AI solutions. Our passion for innovation fuels every game-changing impact.
            </p>
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.25)", backgroundColor: "#1F2937" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-800 transition-all duration-300 ease-in-out"
              >
                Learn More About Us
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03 }}
            className="relative group"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl border-8 border-white ring-2 ring-gray-200/60 transition-transform duration-300">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1740&auto=format&fit=crop"
                className="object-cover w-full h-full"
                src="hero.mp4"
              />
            </div>
            <div className="absolute -z-10 inset-0 bg-gray-400/20 rounded-2xl translate-x-6 translate-y-6 transition-transform duration-300 group-hover:translate-x-8 group-hover:translate-y-8"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-lg px-6 py-4 rounded-xl shadow-xl border border-gray-200/50"
            >
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">50+ Experts</p>
                  <p className="text-sm text-gray-600">AI Specialists</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}