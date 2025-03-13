"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiMail, FiPhone, FiX } from "react-icons/fi";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const slideUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: false, error: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      const res = await fetch("https://formspree.io/f/yourFormID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ loading: false, success: true, error: false });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Gagal mengirim pesan");
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <section className="relative min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black p-2 md:p-6">
      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-10 left-10 w-24 h-24 bg-purple-500 rounded-full filter blur-3xl opacity-50"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-10 right-20 w-32 h-32 bg-indigo-500 rounded-full filter blur-3xl opacity-50"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/2 right-1/4 w-20 h-20 bg-pink-500 rounded-full filter blur-3xl opacity-50"
      />

      {/* Contact Form */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative z-10 bg-white max-w-3xl w-full px-4 md:px-8 py-8 md:py-10 rounded-lg shadow-2xl"
      >
        {/* Tombol Close */}
        <Link href="/" aria-label="Kembali ke Beranda">
          <motion.button
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-2 left-2 md:top-5 md:left-5 lg:top-6 lg:left-6 p-1 bg-red-600 text-white rounded-full shadow-md hover:bg-red-500 transition"
          >
            <FiX className="w-5 h-5 md:w-7 md:h-7" />
          </motion.button>
        </Link>

        <motion.h1
          variants={slideUp}
          className="text-4xl font-extrabold text-gray-800 text-center mb-6"
        >
          Hubungi Kami
        </motion.h1>
        <p className="text-center text-gray-600 mb-8">
          Kami siap membantu Anda. Silakan isi formulir di bawah ini dan kami akan segera menghubungi Anda.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={fadeIn}>
            <label className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Masukkan nama Anda"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </motion.div>

          <motion.div variants={fadeIn}>
            <label className="block text-gray-700 font-medium mb-2">Alamat Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Masukkan email Anda"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </motion.div>

          <motion.div variants={fadeIn}>
            <label className="block text-gray-700 font-medium mb-2">Pesan</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Tuliskan pesan Anda..."
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={status.loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-500 transition"
          >
            {status.loading ? "Mengirim..." : "Kirim Pesan"}
          </motion.button>

          {status.success && (
            <motion.p variants={fadeIn} className="text-center text-green-600 mt-4">
              Pesan Anda berhasil dikirim! 🎉
            </motion.p>
          )}
          {status.error && (
            <motion.p variants={fadeIn} className="text-center text-red-600 mt-4">
              Terjadi kesalahan. Silakan coba lagi. ❌
            </motion.p>
          )}
        </form>
        <div className="mt-10 text-center">
        <p className="text-gray-600 mb-4">Atau hubungi kami melalui:</p>

        <div className="grid gap-4 md:grid-cols-2">
            <a
            href="mailto:contact@yourdomain.com"
            className="flex items-center justify-center text-indigo-600 hover:underline"
            >
            <FiMail className="mr-2 text-2xl" /> contact@yourdomain.com
            </a>

            <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-green-600 hover:underline"
            >
            <FiPhone className="mr-2 text-2xl" /> +62 812 3456 7890
            </a>
        </div>
        </div>
      </motion.div>
    </section>
  );
}
