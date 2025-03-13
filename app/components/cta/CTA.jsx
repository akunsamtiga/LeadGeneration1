"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";

export default function CTA() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="py-20 bg-yellow-400 text-indigo-900 text-center"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Ready to Elevate Your Business?</h2>
        <p className="mb-8 text-xl">Join us now and start your journey towards success!</p>
        <a
          href="/contact"
          className="inline-block bg-indigo-900 text-white px-10 py-4 rounded-full font-semibold hover:bg-indigo-800 transition"
        >
          Contact Us
        </a>
      </div>
    </motion.section>
  );
}
