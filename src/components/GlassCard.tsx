import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
  tag?: string;
  id: string;
  isLiked?: boolean;
  onLike?: (id: string) => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  id, title, description, image, className, tag, isLiked, onLike 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={cn(
        'group relative h-96 w-full cursor-pointer rounded-2xl transition-all duration-300',
        className
      )}
    >
      <div
        style={{
          transform: 'translateZ(50px)',
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-0 rounded-2xl glass-dark overflow-hidden"
      >
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        <div
          style={{
            transform: 'translateZ(30px)',
          }}
          className="absolute bottom-0 left-0 p-8 w-full"
        >
          <div className="flex items-center justify-between">
          {tag && (
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-widest text-white/80 uppercase backdrop-blur-md border border-white/10">
              {tag}
            </span>
          )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onLike?.(id);
              }}
              className={cn(
                "rounded-full p-2 transition-all hover:bg-white/20 active:scale-90",
                isLiked ? "text-red-500" : "text-white/40"
              )}
            >
              <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
            </button>
          </div>
          <div className="mt-3">
          <h3 className="text-2xl font-bold text-white group-hover:text-glow transition-all duration-300">
            {title}
          </h3>
          <p className="mt-2 text-sm text-white/60 line-clamp-2 transition-all duration-300 group-hover:text-white/80">
            {description}
          </p>
          </div>
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-[-100%] bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 transform" />
        </div>
      </div>

      {/* Outer Glow */}
      <div className={cn(
        "absolute -inset-0.5 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10",
        hovered && "opacity-100"
      )} />
    </motion.div>
  );
};
