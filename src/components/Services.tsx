import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Film, Monitor, Zap, Palette, Layers } from 'lucide-react';

const services = [
  {
    title: 'Cinematography',
    description: 'High-end film production with a focus on cinematic storytelling and lighting.',
    icon: Camera,
  },
  {
    title: 'Post-Production',
    description: 'Advanced editing, color grading, and sound design to bring your vision to life.',
    icon: Film,
  },
  {
    title: '3D & Motion',
    description: 'Breathtaking 3D visuals and motion graphics that push technical boundaries.',
    icon: Layers,
  },
  {
    title: 'Brand Identity',
    description: 'Strategic visual systems crafted for modern digital-first brands.',
    icon: Palette,
  },
  {
    title: 'Digital Experience',
    description: 'High-performance interactive websites and applications.',
    icon: Monitor,
  },
  {
    title: 'Creative Strategy',
    description: 'Data-driven creative direction and strategy for impactful results.',
    icon: Zap,
  },
];

export const Services = () => {
  return (
    <section id="services" className="bg-black py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.5em] text-white/40"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl font-bold text-white md:text-7xl lg:text-8xl tracking-tighter"
          >
            Expertise<span className="text-white/20">.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative p-10 glass-dark rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-glow">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                  {service.description}
                </p>
              </div>

              {/* Corner Glow */}
              <div className="absolute -right-10 -bottom-10 h-32 w-32 bg-white/5 blur-3xl group-hover:bg-white/10 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};