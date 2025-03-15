import { motion } from "framer-motion";
import team1 from '../assets/team1.jpeg'
import team2 from '../assets/team2.jpeg'

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "Best salon experience ever! The stylists are truly artists.",
    avatar: team1
  },
  {
    name: "Emma Davis",
    text: "My go-to place for relaxation and beauty treatments.",
    avatar: team2
  },
];

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      <div className="h-full bg-white border border-rose-100 hover:border-rose-200 transition-all rounded-xl shadow-sm hover:shadow-md p-6">
        <div className="text-5xl text-rose-700/10 absolute top-2 right-4">
          ”
        </div>

        <p className="text-gray-600 text-lg mb-6 relative z-10">
          "{testimonial.text}"
        </p>

        <div className="flex items-center gap-4">
          <div className="relative group">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-rose-100 transition-transform group-hover:scale-105"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-rose-700 rounded-full flex items-center justify-center text-white text-xs">
              ✓
            </div>
          </div>
          <span className="font-semibold text-gray-800">
            {testimonial.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white relative flex justify-center">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-rose-700 to-pink-700 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-rose-700/20 rounded-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-4">
            Join our satisfied clients today
          </p>
          <button className="bg-gradient-to-r from-rose-700 to-pink-700 text-white px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all">
            Book Your Session
          </button>
        </div>
      </div>
    </section>
  );
}