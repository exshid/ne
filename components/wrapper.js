'use client'

import { blogConfig } from '@/config';
import { motion, AnimatePresence } from "framer-motion"
import React, { ReactNode,useState  } from 'react';

  
const PageWrapper  = ({ children }) => {

 return (
    <AnimatePresence>
<motion.div
  initial={{ opacity: 0, y:150 }}
  animate={{ opacity: 1, y:0 }}
  exit={{ opacity: 0, y:150 }}
transition={{delay:0.4}}
>
    {children}
</motion.div>
</AnimatePresence>
 )

}

export const ScrollWrapper = ({ children }) => {
return <motion.div
  initial={{ opacity: 0, y:100 }}
  whileInView={{ opacity: 1, y:0 }}
  viewport={{ once: true }}
transition={{delay:0, duration: 0.4}}
>
    {children}
</motion.div>


}
  

export const ImageWrapper = ({ children }) => {
  return     <AnimatePresence>
  <motion.div
  className="flex h-full items-center flex-col w-full"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, y:150 }}
  transition={{delay:0.1}}
  >
      {children}
  </motion.div>
  </AnimatePresence>
    
  }
    
  

export default PageWrapper;
