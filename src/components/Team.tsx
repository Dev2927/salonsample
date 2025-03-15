import { motion } from "framer-motion";
import { Card } from "./ui/card";
import team1 from '../assets/team1.jpeg'
import team2 from '../assets/team2.jpeg'
import team3 from '../assets/team3.jpeg'

const team = [
  {
    name: "Emma Wilson",
    role: "Lead Stylist",
    bio: "10+ years experience in creative hair design",
    image: team1
  },
  {
    name: "Sophia Rodriguez",
    role: "Skincare Expert",
    bio: "Certified dermatology specialist",
    image: team2
  },
  {
    name: "Liam Johnson",
    role: "Nail Artist",
    bio: "Master of intricate nail designs",
    image: team3
  },
];

function TeamCard({ member }: { member: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      <Card className="h-full bg-white border border-rose-100 hover:border-rose-200 transition-all rounded-xl shadow-sm hover:shadow-md overflow-hidden flex justify-center">
        <div className="relative aspect-square overflow-hidden ">
          <img
            src={member.image}
            alt={member.name}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-rose-900/20" />
        </div>
        
        <div className="p-6 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {member.name}
            </h3>
            <p className="text-rose-700 font-medium">
              {member.role}
            </p>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {member.bio}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-rose-50 to-white relative flex justify-center">
      {/* Static background element */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-rose-700 to-pink-700 bg-clip-text text-transparent">
                Meet Our Experts
              </span>
            </h2>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-rose-700/20 rounded-full" />
          </div>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mt-4">
            Professional beauty specialists dedicated to your transformation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}