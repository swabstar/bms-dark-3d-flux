import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, ChevronDown, MessageSquare, X } from 'lucide-react';

export const Hero = () => {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="h-full w-full object-cover opacity-40"
          poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=2070"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-fast-motion-lights-at-night-1549-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      </div>

      {/* Atmospheric Overlays */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        <div className="absolute top-0 h-32 w-full bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 h-64 w-full bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="relative flex items-center justify-center">
            {/* 3D Animated Logo Concept */}
            <motion.div
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="relative h-24 w-24 md:h-32 md:w-32"
            >
              <div className="absolute inset-0 rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm neon-glow" />
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-3xl md:text-4xl font-black text-white tracking-tighter">BMS</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-4xl text-5xl font-black uppercase tracking-tighter text-white md:text-8xl lg:text-9xl leading-[0.9]"
        >
          <span className="block overflow-hidden">
            <motion.span className="block" initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>Creative</motion.span>
          </span>
          <br />
          <span className="text-transparent outline-text text-white/20" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Media</span> Studios
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg text-white/60 md:text-xl font-light leading-relaxed"
        >
          Pushing the boundaries of cinematic storytelling through high-performance visual experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-12 flex flex-col items-center gap-6 sm:flex-row"
        >
          <button 
            className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-black transition-all hover:scale-105 active:scale-95"
            onClick={() => setIsShowreelOpen(true)}
          >
            <span className="relative z-10 uppercase tracking-widest text-xs">Watch Showreel</span>
            <Play size={16} className="relative z-10 fill-current" />
            <div className="absolute inset-0 -translate-x-full bg-black/10 transition-transform group-hover:translate-x-0" />
          </button>
          
          <button 
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white transition-all hover:text-white/80"
            onClick={() => scrollTo('#projects')}
          >
            Our Portfolio
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/* Quick WhatsApp Connect */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col gap-4"
      >
        {[ 
          { name: 'Blacko', href: 'https://wa.me/2349023570518' },
          { name: 'Simon', href: 'https://wa.me/2349138404010' },
          { name: 'Meltson', href: 'https://wa.me/2348120312238' }
        ].map((contact) => (
          <a 
            key={contact.name} 
            href={contact.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-2 pl-4 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              {contact.name}
            </span>
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-black/5">
              <MessageSquare size={18} />
            </div>
          </a>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        onClick={() => scrollTo('#services')}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/40"
        >
          <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em]">Explore</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      {/* Showreel Modal */}
      <AnimatePresence>
        {isShowreelOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6 backdrop-blur-xl"
            onClick={() => setIsShowreelOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute right-6 top-6 z-10 rounded-full bg-black/50 p-3 text-white backdrop-blur-md hover:bg-white hover:text-black transition-colors"
                onClick={() => setIsShowreelOpen(false)}
              >
                <X size={24} />
              </button>
              
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Placeholder showreel
                title="BMS Studios Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};