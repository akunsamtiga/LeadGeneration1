#!/bin/bash

# Membuat folder components jika belum ada
mkdir -p components

# Membuat file Header.jsx
cat << 'EOF' > components/Header.jsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">Logo</div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#features">Fitur</Link></li>
            <li><Link href="#testimonials">Testimonial</Link></li>
            <li><Link href="#contact">Kontak</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
EOF

# Membuat file Hero.jsx
cat << 'EOF' > components/Hero.jsx
'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Selamat Datang di Landing Page Lead Generation
        </h1>
        <p className="text-xl mb-8">
          Tingkatkan konversi dan raih lebih banyak prospek dengan desain yang menarik dan fitur interaktif.
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
        >
          Daftar Sekarang
        </a>
      </div>
    </motion.section>
  )
}
EOF

# Membuat file Features.jsx
cat << 'EOF' > components/Features.jsx
export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Fitur Unggulan</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-2">Desain Responsif</h3>
              <p className="text-gray-600">Desain yang adaptif untuk semua perangkat.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-2">SEO Terintegrasi</h3>
              <p className="text-gray-600">Optimalisasi SEO untuk meningkatkan visibilitas.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-2">Interaksi Dinamis</h3>
              <p className="text-gray-600">Animasi dan interaksi menarik untuk pengalaman pengguna.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
EOF

# Membuat file Testimonials.jsx
cat << 'EOF' > components/Testimonials.jsx
export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Apa Kata Mereka?</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 italic mb-4">
                "Landing page ini membantu bisnis kami mencapai target lead dengan signifikan."
              </p>
              <h4 className="text-xl font-bold">John Doe</h4>
              <span className="text-gray-500">CEO, Perusahaan ABC</span>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 italic mb-4">
                "Desain yang menarik dan fitur yang lengkap. Sangat merekomendasikan!"
              </p>
              <h4 className="text-xl font-bold">Jane Smith</h4>
              <span className="text-gray-500">Marketing Manager, XYZ Corp</span>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 italic mb-4">
                "Lead generation yang efektif dengan tampilan yang profesional."
              </p>
              <h4 className="text-xl font-bold">Ali Rahman</h4>
              <span className="text-gray-500">Founder, Startup 123</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
EOF

# Membuat file LeadForm.jsx
cat << 'EOF' > components/LeadForm.jsx
'use client'
import { useState } from 'react'

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = "Nama harus diisi"
    if (!formData.email) newErrors.email = "Email harus diisi"
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Format email tidak valid"
    if (!formData.phone) newErrors.phone = "Nomor telepon harus diisi"
    return newErrors
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      // Simulasi pengiriman data (bisa diganti dengan API call)
      console.log("Data terkirim:", formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '' })
      setErrors({})
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Hubungi Kami</h2>
        {submitted && (
          <div className="bg-green-100 text-green-700 p-4 rounded mb-6 text-center">
            Terima kasih! Data Anda telah terkirim.
          </div>
        )}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded shadow">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nama</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nomor Telepon</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Kirim
          </button>
        </form>
      </div>
    </section>
  )
}
EOF

# Membuat file CTA.jsx
cat << 'EOF' > components/CTA.jsx
export default function CTA() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Siap Meningkatkan Lead?</h2>
        <p className="mb-8">
          Bergabunglah dengan kami sekarang untuk memaksimalkan potensi bisnis Anda!
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
        >
          Hubungi Kami
        </a>
      </div>
    </section>
  )
}
EOF

# Membuat file Footer.jsx
cat << 'EOF' > components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Landing Page Lead Generation. All rights reserved.</p>
      </div>
    </footer>
  )
}
EOF

echo "Semua file komponen telah dibuat di folder 'components'."
