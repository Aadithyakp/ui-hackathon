'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'AI Research Lead',
    company: 'TechVision AI',
    quote: 'ElevatePro has revolutionized how I connect with other professionals.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop',
    position: { top: '5%', left: '2%' },
    rotation: -2
  },
  {
    id: 2,
    name: 'Marcus Zhang',
    role: 'ML Engineer',
    company: 'Neural Dynamics',
    quote: 'The ElevatePro platform has become essential for growing my professional network.',
    image: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=200&h=200&auto=format&fit=crop',
    position: { top: '30%', left: '22%' },
    rotation: 1
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Director of AI Ethics',
    company: 'AI Governance Institute',
    quote: 'ElevatePro bridges the gap between professionals and creates meaningful connections.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
    position: { top: '10%', left: '42%' },
    rotation: -1
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Head of AI',
    company: 'InnovateAI',
    quote: 'This platform has transformed how we collaborate and innovate in the AI space.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop',
    position: { top: '35%', left: '62%' },
    rotation: 2
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'VP Engineering',
    company: 'AI Solutions',
    quote: 'The connections and opportunities we\'ve found here are truly remarkable.',
    image: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=200&h=200&auto=format&fit=crop',
    position: { top: '15%', left: '82%' },
    rotation: -2
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  return (
    <div ref={containerRef} className="relative py-32 overflow-hidden bg-[#0B0F1C]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#2C1250_0%,transparent_50%)] opacity-30" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="block text-center text-white">Trusted by leaders</span>
              <span className="block text-center text-gray-400 mt-2 text-2xl">from various industries</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto text-center">
              Learn why professionals trust our solutions to complete their customer journeys.
            </p>
            <button className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2 mx-auto">
              Read Success Stories
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>

        <div className="relative h-[500px] max-w-6xl mx-auto mt-16 mb-8">
          {testimonials.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="absolute group"
              style={{
                top: person.position.top,
                left: person.position.left
              }}
            >
              <div 
                className="w-[260px] bg-[#151C34] backdrop-blur-sm rounded-2xl p-5 shadow-lg group-hover:shadow-xl transition-all duration-500 border border-purple-500/20 hover:border-purple-500/40"
                style={{ transform: `rotate(${person.rotation}deg)` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-14 h-14 rounded-xl overflow-hidden transform group-hover:scale-105 transition-all duration-500 bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-0.5">
                    <div className="rounded-xl overflow-hidden bg-[#151C34] h-full w-full">
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-white/90">{person.name}</p>
                    <p className="text-sm text-gray-400">{person.role}</p>
                    <p className="text-sm text-gray-500">{person.company}</p>
                  </div>
                </div>
                <blockquote className="text-sm text-gray-300 leading-relaxed">
                  &ldquo;{person.quote}&rdquo;
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
