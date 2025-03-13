"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";

// Update testimonial dengan tambahan foto dan posisi
const testimonials = [
  { 
    id: 1, 
    name: "Kim Ji-min",  // Nama cewek Korea
    text: "Platform ini membantu saya mengoptimalkan kampanye pemasaran, meningkatkan ROI secara signifikan!", 
    job: "Ahli Pemasaran Digital", 
    photo: "/images/pp6.jpg", 
    rating: 5,
  },
  { 
    id: 2, 
    name: "Lee Seung-hee",  // Nama cewek Korea
    text: "Kami melihat peningkatan signifikan dalam lead generation sejak menggunakan layanan ini—sangat direkomendasikan!", 
    job: "Manajer E-commerce", 
    photo: "/images/pp2.jpg", 
    rating: 4,
  },
  { 
    id: 3, 
    name: "Park Hye-jin",  // Nama cewek Korea
    text: "Alat ini menyederhanakan alur kerja kami, memungkinkan kami untuk fokus pada pertumbuhan sambil mengotomatisasi tugas-tugas yang membosankan.", 
    job: "Manajer Operasional", 
    photo: "/images/pp3.jpg", 
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-22 px-4 bg-gray-50">
      <motion.h2 
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-center text-3xl md:text-4xl lg:text-5xl  font-bold mb-12 text-gray-800"
      >
        Apa Kata Klien Kami
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {testimonials.map((testimonial) => (
          <motion.div 
            key={testimonial.id} 
            variants={fadeIn} 
            whileHover={{ scale: 0.95 }}
            className="p-6 md:p-4 bg-white rounded-lg shadow-lg border-t-4 border-indigo-600 transform transition duration-300 ease-in-out hover:shadow-2xl"
          >
            <div className="flex items-center space-x-5 md:space-x-3">
              {/* Foto Klien */}
              <img 
                src={testimonial.photo} 
                alt={testimonial.name} 
                className="w-14 h-14 md:w-16 object-contain md:h-16 rounded-full border-4 border-indigo-600" 
              />
              <div>
                <h4 className="font-semibold text-xl text-gray-900 line-clamp-1">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 line-clamp-2">{testimonial.job}</p>
              </div>
            </div>
            <p className="text-base md:text-lg italic text-gray-700 mt-4 md:mt-6 line-clamp-3 md:line-clamp-4">"{testimonial.text}"</p>
            <div className="mt-4 flex items-center">
              {/* Rating */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 ${index < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15l-3.5 2.05L7.5 12.45 4.5 9.8l4.6-.35L10 4l1.9 5.45 4.6.35-3 2.65 1 4.6L10 15z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
