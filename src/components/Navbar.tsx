import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Play, Film, Camera, Music, Zap, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Showreel', href: '#hero', icon: Play },
  { name: 'Services', href: '#services', icon: Camera },
  { name: 'Projects', href: '#projects', icon: Film },
  { name: 'About', href: '#about', icon: Zap },
  { name: 'Contact', href: '#contact', icon: MessageSquare },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-500 px-6 py-4',
        isScrolled ? 'py-3' : 'py-6'
      )}
    >
      <div className={cn(
        'mx-auto max-w-7xl rounded-2xl transition-all duration-500 px-6 py-3 flex items-center justify-between',
        isScrolled ? 'glass-dark border-white/5' : 'bg-transparent border-transparent'
      )}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollTo('#hero')}
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-white flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="font-bold text-black text-sm">BMS</span>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white uppercase group-hover:text-glow">
            Studios
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative text-sm font-medium text-white/70 transition-colors hover:text-white"
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-full bg-white px-6 py-2 text-xs font-bold uppercase tracking-widest text-black transition-all hover:scale-105 hover:bg-white/90 active:scale-95 cursor-pointer"
            onClick={() => scrollTo('#contact')}
          >
            Contact
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="flex md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 glass-dark rounded-2xl p-6 md:hidden border border-white/10"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="flex items-center gap-4 text-lg font-medium text-white/80 hover:text-white transition-colors"
                >
                  <link.icon size={20} className="text-white/40" />
                  {link.name}
                </a>
              ))}
              <button 
                className="w-full rounded-xl bg-white py-4 text-sm font-bold uppercase tracking-widest text-black"
                onClick={() => scrollTo('#contact')}
              >
                Get in touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};