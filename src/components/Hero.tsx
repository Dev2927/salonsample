import { motion } from "framer-motion";
import { Button } from "./ui/button";
import heroSalon from '../assets/heroSalon.jpeg'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 bg-gradient-to-b from-rose-50 to-white relative overflow-hidden flex justify-center"
    >
      {/* Background element simplified */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-rose-100 rounded-full opacity-20 blur-3xl" />
      
      <div className="container flex flex-col md:flex-row items-center gap-8 lg:gap-16 px-4">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 z-10"
        >
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-24 h-24 bg-rose-600/10 rounded-full blur-lg" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-rose-700 to-pink-700 bg-clip-text text-transparent">
                Discover Your
              </span>
              <br />
              <span className="inline-block mt-2 text-gray-800">
                Natural Beauty
              </span>
            </h1>
          </div>

          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-xl">
            Experience luxury beauty treatments tailored to your unique style. 
            <span className="block mt-2 text-rose-700/80 font-medium">
              Where elegance meets transformation
            </span>
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-rose-700 to-pink-700 hover:from-rose-800 hover:to-pink-800 
                       text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book Appointment
          </Button>
        </motion.div>

        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 relative z-10 mt-12 md:mt-0"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-rose-100 border-8 border-white shadow-xl">
            <img
              src={heroSalon}
              alt="Salon"
              className="object-cover w-full h-full scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-rose-100/20" />
          </div>
          
          {/* Static decorative elements */}
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-pink-200/40 rounded-full blur-2xl" />
        </motion.div>
      </div>

      {/* Scroll indicator simplified */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 rounded-3xl border-2 border-rose-600 flex justify-center p-1">
          <div className="w-2 h-2 bg-rose-600 rounded-full animate-bounce" />
        </div>
        <span className="mt-2 text-rose-700/80 text-sm font-medium">
          Scroll Down
        </span>
      </div>
    </section>
  );
}