import { motion } from "motion/react";
import { ReactNode } from "react";

// Animation variants
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -60
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const fadeInRight = {
  initial: {
    opacity: 0,
    x: 60
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  initial: {
    opacity: 0,
    y: 40
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.9
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const slideInFromBottom = {
  initial: {
    y: 100,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Reusable animation components
interface AnimationWrapperProps {
  children: ReactNode;
  variant?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideInFromBottom";
  delay?: number;
  className?: string;
}

export function AnimationWrapper({ 
  children, 
  variant = "fadeInUp", 
  delay = 0,
  className = "" 
}: AnimationWrapperProps) {
  const variants = {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    slideInFromBottom
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        ...variants[variant],
        animate: {
          ...variants[variant].animate,
          transition: {
            ...variants[variant].animate.transition,
            delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container component
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function StaggerContainer({ 
  children, 
  className = "", 
  delay = 0,
  stagger = 0.1 
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        initial: {},
        animate: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Individual stagger item
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div
      variants={staggerItem}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Floating animation for decorative elements
export const floatingAnimation = {
  y: [-20, 20],
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut"
  }
};

// Button hover animations
export const buttonHover = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: "easeInOut"
  }
};

export const buttonTap = {
  scale: 0.95
};

// Card hover animations
export const cardHover = {
  y: -8,
  transition: {
    duration: 0.3,
    ease: "easeOut"
  }
};
