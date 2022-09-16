import { PropsWithChildren } from 'react';
import { motion, Variants } from 'framer-motion';

const loadAnim: Variants = {
  open: {
    height: 'auto',
    overflow: 'hidden'
  },
  closed: {
    height: '0px',
    overflow: 'hidden'
  }
}

interface Props extends PropsWithChildren<{}> {
  animClosed: boolean;
  className?: string;
}
/**
 * Animate height of element. Default height is 'auto'. If prop animClosed
 * is set to true the height will transition to '0px'.
 */
export const AnimHeight = ({ children, animClosed, className }: Props) => (
  <motion.div
    variants={loadAnim}
    initial="open"
    animate={animClosed ? 'closed' : 'open'}
    className={className}>
    {children}
  </motion.div>
);
