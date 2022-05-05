import React, { PropsWithChildren } from 'react';
import { motion, Variants } from 'framer-motion';

const parentLoadAnim: Variants = {
  hide: {},
  show: {
    transition: {
      delay: 0.2,
      staggerChildren: 0.05
    }
  }
}

const childLoadAnim: Variants = {
  hide: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
  }
}

export const AnimStaggeredLoad = ({ className, children }: PropsWithChildren<{ className?: string }>) => (
  <motion.div
    variants={parentLoadAnim}
    initial="hide"
    animate="show"
    className={className}
  >
    {children}
  </motion.div >
);

export const FadeStaggeredChild = ({ children }: PropsWithChildren<{}>) => (
  <motion.div variants={childLoadAnim}>
    {children}
  </motion.div>
);
