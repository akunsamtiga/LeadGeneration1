"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Variants untuk animasi masuk
const slideIn = (direction, delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -200 : direction === "right" ? 200 : 0,
    y: direction === "bottom" ? 200 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, ease: "easeOut", delay },
  },
});

// Floating + Rotasi + Scaling
const floatingRotateScaleBurger = {
  animate: {
    y: [0, -20, 0],
    rotate: [-5, 5, -5],
    scale: [2.25, 2, 2.25],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const floatingRotateScaleMie = {
  animate: {
    y: [0, -20, 0],
    x: [0, -50, 0],
    rotate: [5, -25, 5],
    scale: [1.55, 1.45, 1.55],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const floatingRotateScaleCheetos = {
  animate: {
    y: [20, 40, 20],
    x: [0, -30, 0],
    rotate: [15, 5, 15],
    scale: [1.25, 1.1, 1.25],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};


const staggererContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5, delayChildren: 0.5 },
  },
};

// Variants untuk animasi
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Fungsi untuk scroll ke bagian form lead
  const handleGetStarted = () => {
    const targetSection = document.getElementById("leadform");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Fungsi direct ke halaman kontak
  const handleLearnMore = () => {
    router.push("/contact");
  };

  return (
    <section className="relative h-screen flex justify-center items-center bg-black text-white overflow-hidden">
      {/* Latar Belakang Gradien Dinamis */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), transparent 80%)`,
        }}
      />

      {/* Elemen Dekoratif Mengambang */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-14 h-14 bg-purple-500 rounded-full blur-2xl opacity-70"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-20 right-20 w-20 h-20 bg-blue-500 rounded-full blur-2xl opacity-70"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/2 left-1/4 w-10 h-10 bg-pink-500 rounded-full blur-2xl opacity-70"
      />

      {/* Gambar Melayang dengan Staggered Animations */}
      <motion.div
        variants={staggererContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={slideIn("left", 0)}
          className="absolute top-20 left-10 w-28 md:w-40"
        >
          <motion.div variants={floatingRotateScaleBurger} animate="animate">
            <Image
              src="/images/burger.png"
              alt="Burger"
              width={150}
              height={150}
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideIn("right", 0.5)}
          className="absolute bottom-20 right-0 w-28 md:w-40"
        >
          <motion.div variants={floatingRotateScaleMie} animate="animate">
            <Image
              src="/images/mie.png"
              alt="Mie"
              width={150}
              height={150}
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideIn("bottom", 1)}
          className="absolute bottom-10 left-10 w-28 md:w-40"
        >
          <motion.div variants={floatingRotateScaleCheetos} animate="animate">
            <Image
              src="/images/cheetos.png"
              alt="Cheetos"
              width={150}
              height={150}
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Konten Utama */}
      <motion.div
        className="relative z-10 text-center max-w-full md:max-w-xl lg:max-w-3xl"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeIn}
          className="text-4xl md:text-7xl font-extrabold leading-tight mb-4 px-8 md:px-0"
        >
          Selezat  <span className="text-indigo-400">Hidangan </span> Andalanmu!
        </motion.h1>
        <motion.p variants={fadeIn} className="text-base md:text-2xl mb-8 px-8 md:px-0 line-clamp-3 shadow-lg">
        Hadirkan cita rasa terbaik untuk audiensmu dan ubah mereka menjadi pelanggan setia. Sajikan strategi yang menggugah selera!
        </motion.p>
        <motion.div variants={scaleIn} className="flex justify-center space-x-4 md:space-x-6 lg:space-x-8">
          <motion.button
            onClick={handleGetStarted}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-5 py-2 md:px-8 md:py-3 lg:px-10 py-3 bg-indigo-600 text-white rounded-full text-lg lg:text-2xl font-semibold hover:bg-indigo-400 transition"
          >
            Berlangganan
          </motion.button>
          <motion.button
            onClick={handleLearnMore}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-5 py-2 md:px-8 md:py-3 lg:px-10 py-3 border-2 border-indigo-400 text-white rounded-full text-lg lg:text-2xl font-semibold hover:bg-indigo-400 transition"
          >
            Konsultasi
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Indikator Scroll */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
      >
        <svg
          className="w-6 h-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
