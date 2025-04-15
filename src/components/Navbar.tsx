'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Menu, X, Bell, MessageCircle,
  User, LogIn, Zap, Briefcase, Globe
} from 'lucide-react';
import Logo from '@/components/ui/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [notificationOpen, setNotificationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '/jobs', label: 'AI Jobs', icon: Briefcase },
    { href: '/network', label: 'Network', icon: Globe },
    { href: '/messages', label: 'Messages', icon: MessageCircle },
    { href: '/profile', label: 'Profile', icon: User },
  ];

  const notifications = [
    { title: 'New job match', desc: 'AI Research Scientist at TechCorp', time: '2m ago', icon: Zap },
    { title: 'Profile viewed', desc: 'Your profile was viewed by AI Innovations', time: '1h ago', icon: User },
    { title: 'New message', desc: 'You have a new message from Sarah', time: '3h ago', icon: MessageCircle },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/40 backdrop-blur-2xl border-b border-gray-800/50 shadow-lg' : 'bg-transparent backdrop-blur-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative">
                <motion.div
                  className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Logo className="w-8 h-8 sm:w-10 sm:h-10" />
                </motion.div>
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                ElevatePro
              </span>
            </Link>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">

            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center space-x-1 px-3 py-2 text-gray-400 hover:text-gray-300 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{item.label}</span>
              </Link>
            ))}

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setNotificationOpen(!notificationOpen)}
                className="relative p-2 text-gray-400 hover:text-gray-300 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full" />
              </button>

              <AnimatePresence>
                {notificationOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-80 rounded-2xl bg-gray-900 border border-gray-800 shadow-2xl shadow-black/20"
                  >
                    <div className="p-4 border-b border-gray-800">
                      <h3 className="text-lg font-semibold text-gray-200">Notifications</h3>
                    </div>
                    <div className="divide-y divide-gray-800">
                      {notifications.map((notification, index) => (
                        <div
                          key={index}
                          className="p-4 hover:bg-gray-800/50 transition-colors cursor-pointer"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="p-2 bg-gray-800 rounded-xl">
                              <notification.icon className="w-4 h-4 text-blue-400" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-200">{notification.title}</p>
                              <p className="text-sm text-gray-400">{notification.desc}</p>
                              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 border-t border-gray-800">
                      <button className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-xl transition-colors text-sm">
                        View all notifications
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/auth/signin"
              className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 flex items-center space-x-2 group"
            >
              <LogIn className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              <span>Sign In</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-gray-300 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">


              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-400 hover:text-gray-300 hover:bg-gray-800/50 transition-all duration-300 group"
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>{item.label}</span>
                </Link>
              ))}

              <Link
                href="/auth/signin"
                className="flex items-center justify-center space-x-2 mt-4 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group w-full"
              >
                <LogIn className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                <span>Sign In</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
