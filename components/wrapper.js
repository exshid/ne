'use client'

import { blogConfig } from '@/config';
import { motion, AnimatePresence } from "framer-motion"
import React, { ReactNode,useState  } from 'react';

  
const PageWrapper  = ({ children }) => {

 return (
  <div className="!bg-center"       style={{    backgroundSize: 'cover',
  backgroundAttachment: 'fixed'}}>

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
</div>
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
  

export default PageWrapper;
