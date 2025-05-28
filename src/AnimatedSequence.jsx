import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const scenes = [
  { id: 'scene1', src: '/1000102514.png', alt: 'Χέρι με κινητό και Like' },
  { id: 'scene2', src: '/paper_plane_final.png', alt: 'Χάρτινο αεροπλανάκι' },
  { id: 'scene3', src: '/girl_heart_final.png', alt: 'Κοπέλα με καρδιά' },
];

export default function AnimatedSequence() {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const timers = [];
    scenes.forEach((_, index) => {
      timers.push(setTimeout(() => {
        setVisibleIndex(index);
      }, index * 2500));
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full bg-white font-hand">
      <div className="min-h-screen flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={scenes[visibleIndex].id}
            src={scenes[visibleIndex].src}
            alt={scenes[visibleIndex].alt}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="max-w-[90%] h-auto"
          />
        </AnimatePresence>

        {/* Extra animations based on scene index */}
        {visibleIndex === 1 && (
          <motion.div
            className="absolute top-1/2 left-1/2 w-10 h-10"
            initial={{ x: -100, y: 0, rotate: -45, opacity: 0 }}
            animate={{ x: 100, y: -100, rotate: 20, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            ✈️
          </motion.div>
        )}

        {visibleIndex === 2 && (
          <motion.div
            className="absolute top-[30%] text-red-400 text-6xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          >
            ❤️
          </motion.div>
        )}
      </div>
    </div>
  );
}
