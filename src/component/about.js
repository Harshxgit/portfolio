import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ScalingElement = () => {
  // Get scroll progress (0 to 1 value)
  const { scrollYProgress } = useScroll();
  
  // Create transform values based on scroll progress
  const scaleX = useTransform(
    scrollYProgress, 
    [0, 0.5], // Use first half of the scroll to complete the animation
    [0.2, 1]    // scale from 1x to 2x along the X axis
  );
  const scaleY = useTransform(
    scrollYProgress, 
    [0, 0.5], // Use first half of the scroll to complete the animation
    [1, 1]    // scale from 1x to 2x along the X axis
  );
  const valueX = useSpring(scaleX, { stiffness: 400, damping: 90 });
  const valueY = useSpring(scaleY, { stiffness: 400, damping: 90 });
  const borderRadius = useTransform(scaleX, [0, 0.5], ["80%", "5%"]);

  return (
    <div className="relative h-screen -top-24  ">
      <motion.div
        className="relative left-1/2 top-1/2 border-2  bg-yellow-600  text-white font-bold "
        style={{
          x: "-50%", // Center horizontally
          y: "-50%", // Center horizontally
          scaleX: valueX,
          scaleY: valueY,
          width: "100%",
          height: "100vh",
          borderRadius: borderRadius
        }}
      >
        <div className='text-8xl text-center p-4 tracking-widest'> ABOUT 
     
        </div>
      </motion.div>
    </div>
  );
};

export default ScalingElement;