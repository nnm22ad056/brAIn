// Filename: Components/Transition.tsx
import { motion, Variants } from "framer-motion";

// Define the animation configuration with typing
const animationConfiguration: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// Type for props (children)
interface TransitionProps {
  children: React.ReactNode; // Ensure children can be any valid React node
}

const Transitions: React.FC<TransitionProps> = ({ children }) => {
  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 3 }}
    >
      {children}
    </motion.div>
  );
};

export default Transitions;
