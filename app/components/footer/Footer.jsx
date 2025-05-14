"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-gray-800 text-white py-4"
    >
      <div className="container text-gray-300 mx-auto px-6 text-sm md:text-base text-center">
        <p>© {new Date().getFullYear()} Sanzystore. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
