'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-[100vh] bg-[#0B0F1C] text-white flex items-center justify-center p-4 overflow-hidden pt-32 pb-20">
      {/* Neural network background effect */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(0,0,0,0))]" />
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/30 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-blue-600/30 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-800/50 p-6 shadow-2xl">
          <div className="max-w-sm mx-auto">
          {/* Close button */}
          <Link href="/" className="absolute right-4 top-4 p-2 hover:bg-gray-800/50 rounded-full transition-colors">
            <X className="h-5 w-5 text-gray-400" />
          </Link>

          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-medium font-geist-sans mb-2">Create a profile</h1>
            <p className="text-gray-400 text-sm font-geist-sans">Create a free profile in less than 5 minutes.</p>
          </div>

          {/* Social Sign-in Buttons */}
          <div className="space-y-2.5 mb-6">
            <button className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 rounded-lg p-3 font-medium font-geist-sans hover:bg-gray-100 transition-colors">
              <Image src="/google.svg" alt="Google" width={20} height={20} />
              <span>Sign up with Google</span>
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-black text-white rounded-lg p-3 font-medium font-geist-sans hover:bg-gray-900 transition-colors">
              <Image src="/x-logo.svg" alt="X (Twitter)" width={20} height={20} />
              <span>Sign up with X (Twitter)</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800/50"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gray-900/50 text-gray-400">OR</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium font-geist-sans text-gray-400 mb-1">
                  First name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium font-geist-sans text-gray-400 mb-1">
                  Last name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium font-geist-sans text-gray-400 mb-1">
                Email*
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium font-geist-sans text-gray-400 mb-1">
                Password*
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 focus:outline-none transition-colors pr-10"
                  placeholder="Must be 8 characters"
                  minLength={8}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button type="button" className="text-sm font-geist-sans text-blue-400 hover:text-blue-300 transition-colors">
                Forgot password?
              </button>
              <button
                type="submit"
                className="bg-[#8B5CF6] hover:bg-[#7C3AED] px-6 py-2.5 rounded-lg font-medium font-geist-sans transition-colors"
              >
                Create profile
              </button>
            </div>
          </form>

          {/* Sign in link */}
          <p className="mt-6 text-center text-sm font-geist-sans text-gray-400">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-blue-400 hover:text-blue-300 transition-colors">
              Sign in
            </Link>
          </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
