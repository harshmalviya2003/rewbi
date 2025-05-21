"use client"

import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const particleVariants = {
  animate: {
    y: [0, -20, 0],
    opacity: [0, 0.3, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#1A3C34] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-5"></div>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gray-700/30 rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
            animate="animate"
            initial={{ opacity: 0 }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 py-16 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 justify-items-center">
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-100">AI Labs</h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Revolutionizing the future with cutting-edge artificial intelligence solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-100 mb-6">Quick Links</h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <Link href="#about" className="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-200">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-100 mb-6">Contact</h3>
            <ul className="space-y-3 text-center md:text-left">
              <li className="text-sm text-gray-400">contact@ailabs.com</li>
              <li className="text-sm text-gray-400">+1 (555) 123-4567</li>
              <li className="text-sm text-gray-400 max-w-xs">
                123 AI Street, Tech City, TC 12345
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-100 mb-6">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ duration: 0.2 }}>
                <Link href="https://twitter.com" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                  <Twitter className="h-6 w-6" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ duration: 0.2 }}>
                <Link href="https://linkedin.com" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ duration: 0.2 }}>
                <Link href="https://github.com" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                  <Github className="h-6 w-6" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 AI Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}