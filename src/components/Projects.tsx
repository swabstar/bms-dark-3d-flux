import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { toast } from 'sonner';

const projects = [
  {
    id: 'p1',
    title: 'Cinematic Excellence',
    description: 'High-end film production for global brands and independent creators.',
    tag: 'Film',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/be5a685e-66ca-4116-a45a-2230202f7838/film-production-service-a591ad05-1782087797312.webp',
  },
  {
    id: 'p2',
    title: 'Future Motion',
    description: 'Breathtaking 3D animations and visual effects that push technical limits.',
    tag: 'Animation',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/be5a685e-66ca-4116-a45a-2230202f7838/3d-animation-service-8d512264-1782087796224.webp',
  },
  {
    id: 'p3',
    title: 'Brand Resonance',
    description: 'Strategic visual identities crafted for the modern digital landscape.',
    tag: 'Branding',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/be5a685e-66ca-4116-a45a-2230202f7838/branding-service-ed6e5a41-1782087796568.webp',
  },
  {
    id: 'p4',
    title: 'Sonic Visuals',
    description: 'Dynamic music video production blending art, light, and sound.',
    tag: 'Music',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/be5a685e-66ca-4116-a45a-2230202f7838/music-video-service-30b9c12e-1782087797727.webp',
  },
];

export const Projects = () => {
  const [likedProjects, setLikedProjects] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('bms-liked-projects');
    if (stored) {
      try {
        setLikedProjects(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse liked projects');
      }
    }
  }, []);

  const toggleLike = (id: string) => {
    const project = projects.find(p => p.id === id);
    const newLikes = likedProjects.includes(id)
      ? likedProjects.filter(p => p !== id)
      : [...likedProjects, id];
    
    setLikedProjects(newLikes);
    localStorage.setItem('bms-liked-projects', JSON.stringify(newLikes));
    
    if (!likedProjects.includes(id)) {
      toast.success(`Liked ${project?.title}`);
    }
  };

  return (
    <section id="projects" className="bg-black py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row md:items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.4em] text-white/40"
            >
              Selected Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-4xl font-bold text-white md:text-7xl tracking-tighter"
            >
              Our Projects
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-4"
          >
            <button 
              onClick={() => toast.info('Full portfolio coming soon!')}
              className="rounded-full border border-white/10 px-8 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black"
            >
              View All
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <GlassCard 
                {...project} 
                isLiked={likedProjects.includes(project.id)}
                onLike={toggleLike}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};