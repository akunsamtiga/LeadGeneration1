// components/cards/FeatureCard.jsx
"use client";
import { motion } from "framer-motion";
import { fadeIn, hoverEffect } from "../animations/animations";

export default function FeatureCard({ title, description }) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover="hover"
      className="p-8 shadow-md rounded-lg bg-white border border-gray-200"
    >
      <h3 className="text-2xl font-bold text-indigo-600 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
