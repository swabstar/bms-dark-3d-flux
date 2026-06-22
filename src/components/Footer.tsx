import React from 'react';
import { Mail, MessageSquare, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { name: 'WhatsApp (Blacko)', icon: MessageSquare, href: 'https://wa.me/2349023570518' },
  { name: 'WhatsApp (Simon)', icon: MessageSquare, href: 'https://wa.me/2349138404010' },
  { name: 'WhatsApp (Meltson)', icon: MessageSquare, href: 'https://wa.me/2348120312238' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@bmsstudios.com' },
];

export const Footer = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8 cursor-pointer" onClick={() => scrollTo('#hero')}>
              <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center">
                <span className="font-bold text-black text-sm">BMS</span>
              </div>
              <span className="text-xl font-bold tracking-tighter text-white uppercase">
                Studios
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6 md:text-5xl max-w-md">
              Ready to start your next project?
            </h3>
            <button 
              className="group flex items-center gap-2 text-lg font-bold text-white transition-colors hover:text-white/60"
              onClick={() => window.location.href = 'mailto:hello@bmsstudios.com'}
            >
              hello@bmsstudios.com
              <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollTo(item === 'Home' ? '#hero' : `#${item.toLowerCase()}`)}
                    className="text-white/60 hover:text-white transition-colors text-sm font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-8">Connect</h4>
            <ul className="space-y-4">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                  >
                    <link.icon size={16} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} BMS Studios. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};