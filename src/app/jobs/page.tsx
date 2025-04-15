'use client';

import { motion } from 'framer-motion';
import { Search, Briefcase, MapPin, Clock, ChevronLeft, ChevronRight, SlidersHorizontal, Brain } from 'lucide-react';

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

export default function JobsPage() {
  return (
    <div className="w-full min-h-screen bg-[#0B0F1C] pt-20 sm:pt-28 pb-16 sm:pb-20 text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-8 sm:space-y-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-purple-600/20 to-transparent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-600/20 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        </div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="mb-8"
        >
          <motion.div variants={fadeInUp}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
              Find Your Next <span className="bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] bg-clip-text text-transparent">AI Opportunity</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
              Discover cutting-edge positions in artificial intelligence, machine learning, and data science.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 sm:mt-12 bg-gray-900/50 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-800/50 shadow-2xl shadow-purple-500/5 w-full"
          >
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search AI jobs, skills, or companies"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-800/50 bg-gray-900/30 backdrop-blur-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF3BFF]/50 focus:border-transparent"
                />
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-3 bg-gray-800/50 text-gray-300 rounded-xl hover:bg-gray-700/50 transition-colors flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5" />
                  <span>Filters</span>
                </button>
                <button className="px-8 py-3 bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] text-white rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
              {['Remote', 'Full-time', 'AI/ML', 'Senior Level', '$150k+'].map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 rounded-full bg-gray-800/50 text-gray-300 text-sm hover:bg-gray-700/50 transition-colors"
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Job Listings */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="space-y-6"
        >
          {[
            {
              title: 'Senior AI Research Scientist',
              company: 'DeepMind AI',
              location: 'Remote',
              salary: '$180k - $250k',
              posted: '2 days ago',
              type: 'Full-time',
              description: 'Lead research in advanced machine learning algorithms and contribute to groundbreaking AI projects...',
              skills: ['PyTorch', 'TensorFlow', 'Computer Vision', 'NLP']
            },
            {
              title: 'Machine Learning Engineer',
              company: 'OpenAI',
              location: 'San Francisco',
              salary: '$150k - $220k',
              posted: '1 day ago',
              type: 'Full-time',
              description: 'Develop and deploy state-of-the-art machine learning models for various applications...',
              skills: ['Python', 'Deep Learning', 'MLOps', 'Kubernetes']
            },
            {
              title: 'AI Product Manager',
              company: 'Google AI',
              location: 'Hybrid',
              salary: '$160k - $230k',
              posted: '3 days ago',
              type: 'Full-time',
              description: 'Drive the development of AI-powered products and features from conception to launch...',
              skills: ['Product Strategy', 'AI/ML', 'Agile', 'Technical PM']
            },
          ].map((job, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative bg-gray-900/50 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800/50 shadow-2xl shadow-purple-500/5 hover:border-gray-700/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF3BFF]/10 to-[#5C24FF]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-6 w-6 text-[#FF3BFF]" />
                      <h2 className="text-lg sm:text-xl font-semibold text-white">{job.title}</h2>
                    </div>
                    <p className="text-gray-400 font-medium">{job.company}</p>
                  </div>
                  <span className="px-4 py-1.5 bg-[#FF3BFF]/10 text-[#FF3BFF] rounded-full text-sm font-medium">
                    {job.type}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-between items-center text-sm">
                  <div className="flex flex-wrap items-center gap-4 text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.posted}</span>
                    </div>
                  </div>
                  <button className="mt-4 sm:mt-0 px-6 py-2 bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] text-white rounded-full hover:opacity-90 transition-opacity font-medium">
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 sm:mt-16 flex justify-center gap-2 sm:gap-3"
        >
          <button className="p-2 rounded-lg border border-gray-800/50 text-gray-400 hover:bg-gray-800/50 transition-colors">
            <ChevronLeft className="h-5 w-5 text-gray-400" />
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`w-10 h-10 rounded-lg ${page === 1
                ? 'bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] text-white'
                : 'border border-gray-800/50 text-gray-400 hover:bg-gray-800/50'
                } transition-colors`}
            >
              {page}
            </button>
          ))}
          <button className="p-2 rounded-lg border border-gray-800/50 text-gray-400 hover:bg-gray-800/50 transition-colors">
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
