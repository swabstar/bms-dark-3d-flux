import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, MapPin, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const contactInfo = [
  {
    name: 'Blacko',
    role: 'Lead Director',
    phone: '09023570518',
    whatsapp: 'https://wa.me/2349023570518',
    icon: MessageSquare
  },
  {
    name: 'Simon',
    role: 'Project Manager',
    phone: '+234 913 840 4010',
    whatsapp: 'https://wa.me/2349138404010',
    icon: MessageSquare
  },
  {
    name: 'Meltson',
    role: 'Creative Designer',
    phone: '+234 812 031 2238',
    whatsapp: 'https://wa.me/2348120312238',
    icon: MessageSquare
  }
];

export const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:hello@bmsstudios.com';
    toast.success('Opening your email client...');
  };

  return (
    <section id="contact" className="relative bg-black py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-white/40"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl font-bold text-white md:text-7xl tracking-tighter"
          >
            Connect with the <span className="text-white/40italic">Team</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 glass-dark rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-500"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                  <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <info.icon size={28} />
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-bold text-white/40 uppercase tracking-widest">{info.role}</span>
                    <span className="block text-2xl font-bold text-white mt-1 tracking-tight">{info.name}</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <p className="text-white/40 mb-6 font-mono text-sm tracking-wider">{info.phone}</p>
                  <a 
                    href={info.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 group/btn"
                  >
                    <span className="text-xs uppercase tracking-widest">WhatsApp</span>
                    <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center glass-dark p-12 rounded-[40px] border border-white/5">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Have a bigger vision?</h3>
            <p className="text-white/60 text-lg mb-10 max-w-md leading-relaxed">
              Drop us an email for large-scale productions, collaborations, or custom studio services.
            </p>
            <div className="flex flex-col gap-6">
              <button 
                onClick={handleEmailClick}
                className="flex items-center gap-4 text-white hover:text-white/70 transition-colors w-fit"
              >
                <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail size={20} />
                </div>
                <span className="font-medium tracking-tight">hello@bmsstudios.com</span>
              </button>
              <div className="flex items-center gap-4 text-white/80">
                <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin size={20} />
                </div>
                <span className="font-medium tracking-tight">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden border border-white/10 group">
            <img 
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2070" 
              alt="Studio"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};