import { PropsWithChildren } from 'react';
import { motion, Variants } from 'framer-motion';

const loadAnim: Variants = {
  initial: {
    opacity: 0,
    height: '0px',
    x: -100
  },
  enter: {
    height: 'auto',
    opacity: 1,
    x: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.2,
      opacity: { delay: 0.18 },
      x: { delay: 0.18 },
    }
  },
  exit: {
    opacity: 0,
    height: '0px',
    x: 100,
    transition: {
      ease: 'easeInOut',
      duration: 0.2,
      height: { delay: 0.18 },
    }
  }
}

interface Props extends PropsWithChildren<{}> {
  className?: string;
}
/**
 * Animate height of element. Default height is 'auto'. If prop animClosed
 * is set to true the height will transition to '0px'.
 */
export const AnimSwipeEnterExit = ({ children, className, ...props }: Props) => (
  <motion.div
    variants={loadAnim}
    initial="initial"
    animate="enter"
    exit="exit"
    {...props}>
    {children}
  </motion.div>
);
