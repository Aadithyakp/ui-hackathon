'use client';

import { motion } from 'framer-motion';
import { Brain, Mail, MapPin, Globe, Award, Briefcase, GraduationCap, Share2, Edit3, Bot } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProfilePage() {
  return (
    <div className="w-full min-h-full pt-20 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-purple-600/20 to-transparent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-600/20 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="relative bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 mb-8 border border-gray-800/50 shadow-2xl shadow-purple-500/5"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF3BFF]/10 to-[#5C24FF]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative flex flex-col md:flex-row gap-8 items-start">
            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <div className="w-32 h-32 bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] rounded-2xl flex items-center justify-center text-white">
                <Brain className="w-16 h-16" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#FF3BFF]/20 rounded-full p-2">
                <Bot className="w-6 h-6 text-[#FF3BFF]" />
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex-grow">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FF3BFF]/10 text-[#FF3BFF] text-sm font-medium mb-4">
                AI Research Scientist
              </span>
              <h1 className="text-3xl font-bold mb-2">
                John Anderson, <span className="bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] bg-clip-text text-transparent">Ph.D</span>
              </h1>
              <p className="text-xl text-gray-400 mb-4">Senior AI Researcher at DeepMind</p>
              <p className="text-gray-400 mb-6">
                Pioneering advances in machine learning and artificial intelligence. Specialized in deep learning,
                reinforcement learning, and neural networks. Published researcher with 15+ papers in top AI conferences.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] text-white px-6 py-2 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2">
                  <Edit3 className="w-4 h-4" />
                  Edit Profile
                </button>
                <button className="border border-gray-800/50 text-gray-300 px-6 py-2 rounded-xl hover:bg-gray-800/50 transition-colors flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share Profile
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="space-y-8"
          >
            {/* Contact Information */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 border border-gray-800/50 shadow-2xl shadow-purple-500/5"
            >
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#FF3BFF]" />
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-400">john.anderson@deepmind.ai</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">London, United Kingdom</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <a href="#" className="text-blue-600 hover:underline">research.ai/john-anderson</a>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 border border-gray-800/50 shadow-2xl shadow-purple-500/5"
            >
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Brain className="w-5 h-5 text-blue-600" />
                AI Expertise
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Deep Learning",
                  "PyTorch",
                  "TensorFlow",
                  "Computer Vision",
                  "NLP",
                  "Reinforcement Learning",
                  "Neural Networks",
                  "MLOps"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent border border-blue-100 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Center and Right Columns */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="md:col-span-2 space-y-8"
          >
            {/* Experience */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 border border-gray-800/50 shadow-2xl shadow-purple-500/5"
            >
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#FF3BFF]" />
                Research Experience
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Senior AI Research Scientist',
                    company: 'DeepMind',
                    period: '2020 - Present',
                    description: 'Leading research in advanced AI systems and neural architectures. Published multiple papers in top-tier conferences.',
                  },
                  {
                    title: 'AI Researcher',
                    company: 'Google AI',
                    period: '2017 - 2020',
                    description: 'Developed novel machine learning algorithms and contributed to major AI projects.',
                  },
                ].map((job, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-gray-800/50 last:border-l-0">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FF3BFF]" />
                    <h3 className="font-semibold text-lg text-white">{job.title}</h3>
                    <p className="text-[#FF3BFF] font-medium">{job.company}</p>
                    <p className="text-sm text-gray-500 mb-2">{job.period}</p>
                    <p className="text-gray-400">{job.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 border border-gray-800/50 shadow-2xl shadow-purple-500/5"
            >
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#FF3BFF]" />
                Education
              </h2>
              <div className="relative pl-6 border-l-2 border-gray-800/50">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FF3BFF]" />
                <h3 className="font-semibold text-lg text-white">Ph.D. in Artificial Intelligence</h3>
                <p className="text-[#FF3BFF] font-medium">University of Oxford</p>
                <p className="text-sm text-gray-500">2014 - 2017</p>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 border border-gray-800/50 shadow-2xl shadow-purple-500/5"
            >
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#FF3BFF]" />
                Awards & Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: 'Best Paper Award',
                    org: 'NeurIPS 2023',
                    date: '2023',
                  },
                  {
                    name: 'AI Research Excellence',
                    org: 'Machine Learning Society',
                    date: '2022',
                  },
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="group relative bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 hover:bg-gradient-to-r hover:from-[#FF3BFF]/5 hover:to-[#5C24FF]/5 transition-colors border border-gray-800/30"
                  >
                    <Award className="w-8 h-8 text-[#FF3BFF] mb-2" />
                    <h3 className="font-semibold text-white">{cert.name}</h3>
                    <p className="text-[#FF3BFF]">{cert.org}</p>
                    <p className="text-sm text-gray-500">{cert.date}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
