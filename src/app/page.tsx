'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Brain, Bot, Cpu } from 'lucide-react';
import { Boxes } from '@/components/ui/background-boxes';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

interface Stat {
  label: string;
  value: string;
  change: string;
}

interface Connection {
  name: string;
  role: string;
  image: string;
  mutuals: number;
  status: 'Connect' | 'Pending' | 'Connected';
}

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

export default function Home() {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [activeTimeframe, setActiveTimeframe] = useState<number>(1);
  const [chartData, setChartData] = useState<Array<{ name: string; value: number }>>(Array.from({ length: 12 }, (_, i) => ({
    name: `${i + 1}h`,
    value: 1500
  })));

  // Update chart data
  useEffect(() => {
    const initialData = Array.from({ length: 12 }, (_, i) => ({
      name: `${i + 1}h`,
      value: Math.floor(1500 + Math.random() * 1000)
    }));
    setChartData(initialData);

    // Update chart data every 2 seconds
    const chartInterval = setInterval(() => {
      setChartData(prev => {
        const newData = [...prev];
        newData.shift();
        newData.push({
          name: `${new Date().getHours()}h`,
          value: Math.floor(1500 + Math.random() * 2000)
        });
        return newData;
      });
    }, 2000);

    return () => clearInterval(chartInterval);
  }, []);



  const simulateInteraction = useCallback(async (element: Element, duration = 300, shouldClick = true) => {
    if (shouldClick) {
      await new Promise(resolve => setTimeout(resolve, 200)); // Faster click delay
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    await new Promise(resolve => setTimeout(resolve, duration));
  }, []);


  const [stats, setStats] = useState<Stat[]>([
    { label: 'Profile Views', value: '2.1k', change: '+8%' },
    { label: 'Job Matches', value: '144', change: '+5%' },
    { label: 'Network Reach', value: '15.8k', change: '+10%' }
  ]);

  const [connections, setConnections] = useState<Connection[]>([
    {
      name: 'Dr. Sarah Chen',
      role: 'AI Research Lead at DeepMind',
      image: '👩🏻‍🔬',
      mutuals: 28,
      status: 'Connect'
    },
    {
      name: 'Alex Rodriguez',
      role: 'ML Engineer at OpenAI',
      image: '👨🏽‍💻',
      mutuals: 42,
      status: 'Connect'
    },
    {
      name: 'Emily Watson',
      role: 'AI Ethics Researcher at Google',
      image: '👩🏼‍🎓',
      mutuals: 15,
      status: 'Connect'
    }
  ]);

  useEffect(() => {
    let isInteracting = false;

    const interactWithRandomElement = async () => {
      if (isInteracting) return;
      isInteracting = true;

      try {
        // List of all interactive elements
        const interactiveElements = [
          ...Array.from(document.querySelectorAll('.stat-card')),
          ...Array.from(document.querySelectorAll('.timeframe-button')),
          ...Array.from(document.querySelectorAll('.connection-button')),
          ...Array.from(document.querySelectorAll('button')),
          ...Array.from(document.querySelectorAll('a')),
          ...Array.from(document.querySelectorAll('.job-card')),
          document.querySelector('.hero-cta'),
          document.querySelector('.connections-container'),
        ].filter((el): el is Element => el !== null);

        if (interactiveElements.length > 0) {
          const randomElement = interactiveElements[Math.floor(Math.random() * interactiveElements.length)];
          await simulateInteraction(randomElement, 800, randomElement.tagName !== 'DIV');

          // Update stats if interacting with stat card
          if (randomElement.classList.contains('stat-card')) {
            const newStats = [
              { label: 'Profile Views', value: Math.floor(2100 + Math.random() * 1000).toLocaleString(), change: `+${Math.floor(15 + Math.random() * 20)}%` },
              { label: 'Job Matches', value: Math.floor(140 + Math.random() * 60).toString(), change: `+${Math.floor(10 + Math.random() * 15)}%` },
              { label: 'Network Reach', value: (Math.floor(15000 + Math.random() * 8000) / 1000).toFixed(1) + 'k', change: `+${Math.floor(20 + Math.random() * 25)}%` }
            ];
            setStats(() => newStats);
          }

          // Update timeframe if interacting with timeframe button
          if (randomElement.classList.contains('timeframe-button')) {
            setActiveTimeframe((prev) => (prev + 1) % 4);
          }

          // Update connections if interacting with connection button
          if (randomElement.classList.contains('connection-button')) {
            setConnections((prevConnections) => {
              const newConnections = [...prevConnections];
              const randomIndex = Math.floor(Math.random() * newConnections.length);
              newConnections[randomIndex] = {
                ...newConnections[randomIndex],
                status: 'Connected' as const
              };
              return newConnections;
            });
          }

          // Handle scrolling in connections container
          if (randomElement.classList.contains('connections-container')) {
            setScrollPosition((prev) => (prev + 1) % 3);
            const scrollAmount = scrollPosition * 80;
            (randomElement as Element & { scrollTo: (options: ScrollToOptions) => void }).scrollTo({
              top: scrollAmount,
              behavior: 'smooth'
            });
          }
        }
      } catch (error) {
        console.error('Error during interaction:', error);
      } finally {
        isInteracting = false;
      }
    };

    // Start periodic interactions
    const interactionInterval = setInterval(interactWithRandomElement, 1500);

    // Update connections periodically
    const connectionInterval = setInterval(() => {
      setConnections((prev: Connection[]) => prev.map((conn: Connection, i: number) => ({
        ...conn,
        status: i === 0 ? (conn.status === 'Connect' ? 'Pending' : 
                         conn.status === 'Pending' ? 'Connected' : 'Connect') : conn.status
      })));
    }, 1200);

    return () => {
      clearInterval(interactionInterval);
      clearInterval(connectionInterval);
    };
  }, [simulateInteraction, setConnections, scrollPosition, chartData]);
  return (
    <div ref={dashboardRef} className="min-h-screen bg-[#0B0F1C] text-white relative overflow-hidden">

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] overflow-hidden flex items-center pt-20 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Boxes />
        </div>
        <div className="absolute inset-0 w-full h-full bg-[#0B0F1C]/80 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        
        <div className="w-full max-w-6xl mx-auto relative z-30">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="text-center relative z-10 space-y-8 sm:space-y-10"
          >
            <motion.div variants={fadeInUp} className="mb-8 sm:mb-10">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                Your <span className="bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] bg-clip-text text-transparent">AI Assistant</span> for
                <br />
                <span className="bg-gradient-to-r from-[#5C24FF] to-[#0075FF] bg-clip-text text-transparent">Professional Networking</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                AI.Network is the world&apos;s only professional network that helps you connect with AI-matched opportunities
                and industry leaders within seconds.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-6 mb-16">
              <Link
                href="/auth/signup"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF] rounded-full font-medium text-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2 w-64"
              >
                <span className="mx-auto flex items-center gap-2">
                  Start Networking
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              <p className="text-gray-500 text-sm">No credit card required</p>
            </motion.div>

            {/* App Preview */}
            <motion.div
              variants={fadeInUp}
              className="relative mx-auto max-w-5xl mt-20 rounded-2xl overflow-hidden border border-gray-800/50 shadow-2xl shadow-purple-500/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF3BFF]/5 to-[#5C24FF]/5" />
              <div className="relative bg-gray-900/50 backdrop-blur-md p-6 rounded-t-2xl border-b border-gray-800/50">
                {/* Browser Controls */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1.5">
                    {['#FF3BFF', '#5C24FF', '#0075FF'].map((color, i) => (
                      <div key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                  <div className="flex-1 h-8 bg-gray-800/50 rounded-lg flex items-center px-4">
                    <div className="w-full h-5 bg-gray-700/50 rounded" />
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="space-y-6">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        className="stat-card bg-gray-800/50 rounded-xl p-4 hover:bg-gray-800/70 transition-colors cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                        <div className="flex items-end justify-between">
                          <motion.span 
                            className="text-white text-2xl font-semibold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            key={stat.value}
                            layout
                          >
                            {stat.value}
                          </motion.span>
                          <motion.span 
                            className="text-emerald-400 text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ 
                              opacity: 1,
                              x: 0,
                              scale: stat.value !== stats[i].value ? [1, 1.1, 1] : 1
                            }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 200,
                              scale: { duration: 0.3 }
                            }}
                          >
                            {stat.change}
                          </motion.span>
                        </div>
                        <div className="h-16 mt-2">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                              <defs>
                                <linearGradient id={`colorValue${i}`} x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                                </linearGradient>
                              </defs>
                              <XAxis dataKey="name" tick={false} hide />
                              <YAxis hide />
                              <Tooltip 
                                contentStyle={{ 
                                  backgroundColor: '#1F2937',
                                  border: '1px solid #374151',
                                  borderRadius: '0.5rem'
                                }}
                                labelStyle={{ color: '#9CA3AF' }}
                                itemStyle={{ color: '#60A5FA' }}
                              />
                              <Area 
                                type="monotone" 
                                dataKey="value" 
                                stroke="#3B82F6" 
                                fillOpacity={1} 
                                fill={`url(#colorValue${i})`}
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Activity Graph */}
                  <motion.div 
                    className="bg-gray-800/50 rounded-xl p-4 h-32"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-medium text-gray-300">Network Activity</h3>
                      <div className="flex gap-2">
                        {['1W', '1M', '3M', '1Y'].map((period, i) => (
                          <motion.button 
                            key={i} 
                            className={`timeframe-button px-2 py-1 rounded text-xs ${i === activeTimeframe ? 'bg-[#FF3BFF]/20 text-[#FF3BFF]' : 'text-gray-400'}`}
                            animate={i === activeTimeframe ? { 
                              scale: [1, 1.1, 1],
                              transition: { duration: 0.3 }
                            } : {}}
                          >
                            {period}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                    <div className="relative h-20">
                      <div className="absolute inset-0 flex items-end justify-between gap-1">
                        {[40, 65, 45, 50, 80, 35, 70].map((height, i) => (
                          <motion.div 
                            key={i} 
                            className="w-full bg-gradient-to-t from-[#FF3BFF]/20 to-[#5C24FF]/20 rounded-sm" 
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 100, 
                              delay: i * 0.1 
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Recent Connections */}
                  <motion.div 
                    className="space-y-3 connections-container overflow-y-auto" 
                    style={{ maxHeight: '240px' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-medium text-gray-300">Recent Connections</h3>
                      <motion.button 
                        className="text-[#FF3BFF] text-sm hover:text-[#FF3BFF]/80 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View All
                      </motion.button>
                    </div>
                    {connections.map((person, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-center justify-between bg-gray-800/30 rounded-lg p-3 hover:bg-gray-800/40 transition-colors group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: 0.5 + (i * 0.1),
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center gap-3">
                          <motion.div 
                            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF3BFF]/20 to-[#5C24FF]/20 flex items-center justify-center text-lg group-hover:from-[#FF3BFF]/30 group-hover:to-[#5C24FF]/30 transition-all"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            {person.image}
                          </motion.div>
                          <div>
                            <h4 className="text-white font-medium">{person.name}</h4>
                            <p className="text-gray-400 text-sm">{person.role}</p>
                            <motion.p 
                              className="text-gray-500 text-xs mt-0.5"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.6 + (i * 0.1) }}
                            >
                              {person.mutuals} mutual connections
                            </motion.p>
                          </div>
                        </div>
                        <motion.button 
                          className={`connection-button px-3 py-1 rounded-full text-xs ${person.status === 'Pending' 
                            ? 'bg-gray-700/30 text-gray-400' 
                            : person.status === 'Connected'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20'
                            : 'bg-[#FF3BFF]/10 text-[#FF3BFF] border border-[#FF3BFF]/20'}`}
                          animate={{
                            scale: [1, 1.1, 1],
                            transition: { duration: 0.3, delay: i * 0.1 }
                          }}
                        >
                          {person.status}
                        </motion.button>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900/0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              {
                icon: Brain,
                title: 'AI-Powered Matching',
                description: 'Our advanced AI algorithms connect you with the perfect opportunities and professionals in your field.',
                stats: ['98% Match Accuracy', '50K+ Successful Matches', '24/7 AI Updates'],
                color: 'from-blue-600 to-purple-600',
              },
              {
                icon: Bot,
                title: 'Smart Career Insights',
                description: 'Get personalized career recommendations and industry insights powered by machine learning.',
                stats: ['Real-time Market Data', 'Salary Predictions', 'Growth Trends'],
                color: 'from-cyan-600 to-blue-600',
              },
              {
                icon: Cpu,
                title: 'AI Skill Analysis',
                description: 'Automatic skill assessment and matching with relevant job opportunities in the AI industry.',
                stats: ['500+ Skills Tracked', 'Industry Benchmarks', 'Learning Paths'],
                color: 'from-purple-600 to-pink-600',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl ${feature.color}`} />
                <div className="relative space-y-6">
                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 bg-gradient-to-br rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${feature.color}`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-center space-x-1"
                    >
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color} ${i === 2 ? '' : 'opacity-50'}`}
                        />
                      ))}
                    </motion.div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-gray-100">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3 }}
                    className="pt-4 border-t border-gray-800"
                  >
                    <div className="flex flex-wrap gap-2">
                      {feature.stats.map((stat, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center px-3 py-1 rounded-lg text-sm bg-gradient-to-r ${feature.color} bg-opacity-10 text-gray-300 backdrop-blur-sm`}
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-32 bg-gray-900/80 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent inline-block"
            >
              Featured AI Positions
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-400"
            >
              Explore groundbreaking opportunities at the forefront of AI innovation
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'AI Research Scientist',
                company: 'TechCorp AI',
                type: 'Full-time',
                salary: '$150k - $200k',
              },
              {
                title: 'Machine Learning Engineer',
                company: 'AI Innovations',
                type: 'Full-time',
                salary: '$130k - $180k',
              },
              {
                title: 'AI Product Manager',
                company: 'Future AI Labs',
                type: 'Full-time',
                salary: '$140k - $190k',
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-xl mb-1 text-gray-100">{job.title}</h3>
                      <p className="text-gray-400">{job.company}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
                      {job.type}
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="text-gray-400 font-medium">{job.salary}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-gray-800"
                        />
                      ))}
                    </div>
                    <Link
                      href={`/jobs/${index + 1}`}
                      className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 group"
                    >
                      View Position
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
}
