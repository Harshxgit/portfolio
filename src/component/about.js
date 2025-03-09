"use client"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
export default function AnimatedAbout() {
  const { scrollYProgress } = useScroll();

  const width = useTransform(scrollYProgress, [0, 0.5], ["20px", "100%"]);
  const height = useTransform(scrollYProgress, [0, 0.7], ["40px", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.8], ["100%", "5%"]);
   const animatedWidth = useSpring(width, { stiffness: 400, damping: 90 });
  const animatedHeight = useSpring(height, { stiffness: 400, damping: 90 });
//pushing code for checking 
  return (
    <div className="relative h-screen w-full ">
      <motion.div
        style={{
          x: "-50%",
          y: "-25%",
          width: animatedWidth,
          height: animatedHeight,
          borderRadius: borderRadius,
        }}
        className="border-2 border-black bg-yellow-600 text-white -bottom-80 md:-bottom-40 font-bold  left-1/2  fixed"
      >
        
        <div className="text-sm md:text-4xl text-center p-4 tracking-widest">ABOUT</div>
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        className="p-8 text-4xl">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        hii everyone
        </motion.div>
      </motion.div>
    </div>
  );
}
