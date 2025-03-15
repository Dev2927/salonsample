import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Booking() {
  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white relative flex justify-center">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            <div className="bg-white border border-rose-100 hover:border-rose-200 transition-all rounded-xl shadow-md hover:shadow-lg p-6 sm:p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                  <span className="bg-gradient-to-r from-rose-700 to-pink-700 bg-clip-text text-transparent">
                    Book Your Appointment
                  </span>
                </h2>
                <p className="text-gray-600">
                  Experience luxury beauty care at your convenience
                </p>
              </div>

              <form className="flex flex-col gap-4 sm:gap-6">
                {["Your Name", "Email", "Phone"].map((placeholder) => (
                  <Input
                    key={placeholder}
                    placeholder={placeholder}
                    className="rounded-full py-5 px-6 border-2 border-rose-100 focus:border-rose-300 focus:ring-0 transition-all"
                  />
                ))}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-700 to-pink-700 hover:from-rose-800 hover:to-pink-800 text-white py-5 sm:py-6 text-lg font-semibold rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] transition-all mt-4"
                >
                  Schedule Now
                </Button>
              </form>
            </div>
            
            {/* Static gradient decoration */}
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-r from-rose-100 to-pink-100 opacity-50 blur-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}