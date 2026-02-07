import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * AnimatedSection - A reusable component for scroll-triggered animations
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {string} props.variant - Animation variant: 'fadeIn', 'slideUp', 'slideLeft', 'slideRight', 'scale'
 * @param {number} props.delay - Delay before animation starts (in seconds)
 * @param {number} props.duration - Animation duration (in seconds)
 * @param {boolean} props.stagger - Whether to stagger children animations
 * @param {number} props.staggerDelay - Delay between staggered children (in seconds)
 */

const variants = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
        }
    },
    slideUp: {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
        }
    },
    slideDown: {
        hidden: { opacity: 0, y: -50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
        }
    },
    slideLeft: {
        hidden: { opacity: 0, x: 50 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
        }
    },
    slideRight: {
        hidden: { opacity: 0, x: -50 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
        }
    },
    scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
        }
    },
    scaleRotate: {
        hidden: { opacity: 0, scale: 0.5, rotate: -10 },
        visible: { 
            opacity: 1, 
            scale: 1,
            rotate: 0,
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
        }
    }
};

export const AnimatedSection = ({ 
    children, 
    variant = 'fadeIn', 
    delay = 0,
    duration = 0.6,
    stagger = false,
    staggerDelay = 0.1,
    className = '',
    once = true
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-100px" });

    const selectedVariant = variants[variant] || variants.fadeIn;
    
    // Override duration if provided
    const customVariant = {
        hidden: selectedVariant.hidden,
        visible: {
            ...selectedVariant.visible,
            transition: {
                ...selectedVariant.visible.transition,
                duration,
                delay,
                ...(stagger && {
                    staggerChildren: staggerDelay,
                    delayChildren: delay
                })
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={customVariant}
            className={className}
        >
            {children}
        </motion.div>
    );
};

/**
 * AnimatedItem - Use inside AnimatedSection with stagger enabled
 */
export const AnimatedItem = ({ children, className = '' }) => {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
        }
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
};

/**
 * PageTransition - Wrapper for page-level animations
 */
export const PageTransition = ({ children }) => {
    const pageVariants = {
        initial: { 
            opacity: 0,
            y: 20
        },
        animate: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        exit: { 
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
