import React, { PropsWithChildren } from 'react';
import { motion, Variants } from 'framer-motion';

const loadAnim: Variants = {
  hide: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2
    }
  }
}

export const AnimFadeOnLoad = ({ children }: PropsWithChildren<{}>) => (
  <motion.div
    variants={loadAnim}
    initial="hide"
    animate="show"
  >
    {children}
  </motion.div >
);
