import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Trophy } from 'lucide-react';

const stats = [
  { label: 'Awards Won', value: '24+', icon: Trophy },
  { label: 'Team Members', value: '12', icon: Users },
  { label: 'Creative Projects', value: '150+', icon: Sparkles },
];

export const About = () => {
  return (
    <section id="about" className="relative bg-black py-32 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-white/40">Our Story</span>
            <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl leading-[1.1] tracking-tighter">
              We Craft Digital <br />
              <span className="text-white/40 italic">Experiences</span>
            </h2>
            <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-lg">
              BMS Studios is a full-service creative agency specializing in high-performance digital solutions. 
              We blend cinematic artistry with cutting-edge technology to tell stories that resonate and inspire.
            </p>
            <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-lg">
              Founded on the principles of innovation and aesthetic precision, our studio has become a hub 
              for creators who dare to imagine beyond the conventional.
            </p>

            <div className="mt-12 flex flex-wrap gap-12">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-4xl font-bold text-white tracking-tighter">{stat.value}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mt-2">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 group">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/be5a685e-66ca-4116-a45a-2230202f7838/about-studio-image-c73279dd-1782091261255.webp"
                alt="Studio setup"
                className="h-full w-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" />
              
              {/* Floating UI Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-10 right-10 p-8 glass rounded-3xl border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center shadow-2xl">
                    <Sparkles className="text-black" size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Our Mission</div>
                    <div className="text-lg font-bold text-white tracking-tight">Pushing Frontiers</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};