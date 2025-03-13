"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaTimes, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// Variants untuk animasi
const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 1, delay, ease: "easeOut" },
  },
});

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.5 },
  },
};

const floating = {
  animate: {
    y: [0, -20, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function About() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 to-black text-white flex justify-center items-center p-8 overflow-hidden">
      {/* Efek Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.1) 10%, transparent 70%)",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      />

      {/* Dekorasi Lingkaran */}
      <motion.div
        className="absolute top-20 left-20 w-36 h-36 bg-purple-500 rounded-full blur-[120px] opacity-60"
        variants={floating}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-20 w-44 h-44 bg-pink-500 rounded-full blur-[120px] opacity-60"
        variants={floating}
        animate="animate"
      />

      {/* Konten Utama */}
      <motion.div
        className="relative z-10 max-w-5xl text-center space-y-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeIn("up", 0.2)}
          className="text-3xl md:text-6xl font-bold leading-tight mt-8 md:mt-0"
        >
          Siapa Kami? <br />
          <span className="text-indigo-400">Kami Adalah Masa Depan Bisnismu</span>
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.4)}
          className="text-lg md:text-2xl text-gray-300"
        >
          Kami adalah tim kreatif yang mendorong inovasi dan menghadirkan solusi digital{" "}
          <span className="text-indigo-400"> interaktif</span>. Misi kami adalah membangun
          pengalaman digital yang mengesankan dan mengubah pengunjung menjadi pelanggan setia.
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.6)}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
        >
          <div className="p-6 bg-white/10 rounded-lg backdrop-blur-md border border-white/20">
            <h3 className="text-xl font-bold flex items-center gap-3 mb-4">
              <FaEnvelope className="text-indigo-400" /> Visi
            </h3>
            <p className="text-gray-300">
              Menjadi partner teknologi terbaik untuk mempercepat pertumbuhan bisnismu.
            </p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg backdrop-blur-md border border-white/20">
            <h3 className="text-xl font-bold flex items-center gap-3 mb-4">
              <FaPhoneAlt className="text-indigo-400" /> Misi
            </h3>
            <p className="text-gray-300">
              Menghadirkan solusi digital inovatif dan membangun pengalaman yang tak terlupakan.
            </p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg backdrop-blur-md border border-white/20">
            <h3 className="text-xl font-bold flex items-center gap-3 mb-4">
              <FaEnvelope className="text-indigo-400" /> Nilai
            </h3>
            <p className="text-gray-300">
              Kreativitas, integritas, dan fokus pada hasil untuk mendorong kesuksesan klien.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.8)}
          className="flex justify-center gap-6 mt-8"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-indigo-600 text-white rounded-full text-lg font-semibold hover:bg-indigo-500 transition"
            >
              Hubungi Kami
            </motion.button>
          </Link>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-indigo-400 text-white rounded-full text-lg font-semibold hover:bg-indigo-400 transition"
            >
              Kembali ke Beranda
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Tombol Close */}
      <motion.button
        whileHover={{ rotate: 90, scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => router.push("/")}
        className="absolute top-8 right-8 text-white text-3xl font-bold"
      >
        <FaTimes />
      </motion.button>
    </section>
  );
}
