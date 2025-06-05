'use client';

import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function Providers({ children }: { children: ReactNode }) {
  
  return (
    <AnimatePresence mode="popLayout">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 