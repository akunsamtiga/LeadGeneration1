"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const headerVariants = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hidden: { y: -100, opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Logika scroll untuk menyembunyikan/memperlihatkan header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll ke bawah: sembunyikan header
        setShowHeader(false);
      } else {
        // Scroll ke atas: tampilkan header
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Menutup mobile menu jika pengguna klik di luar header
  useEffect(() => {
    function handleClickOutside(event) {
      if (isMenuOpen && headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <motion.header
      ref={headerRef}
      variants={headerVariants}
      animate={showHeader ? "visible" : "hidden"}
      className="fixed top-0 left-0 w-full bg-[#00000040] backdrop-blur-sm shadow-md z-50"
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          LeadGenPro
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 text-white text-xl">
          <Link href="/about" className="hover:text-indigo-600 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-indigo-600 transition">
            Contact
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} aria-label="Toggle Menu" className="md:hidden focus:outline-none">
          {isMenuOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: 0 }}
              animate={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="open"
              initial={{ rotate: 0 }}
              animate={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </motion.svg>
          )}
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden bg-[#0000005] backdrop-blur-sm"
          >
            <ul className="flex flex-col text-gray-100 text-lg items-center space-y-4 p-4">
              <li>
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-indigo-600 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-indigo-600 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
