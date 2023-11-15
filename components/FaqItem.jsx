import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqItem({i, expanded, setExpanded, title, description}) {
    const isOpen = i === expanded;

    const openVariants = {
        open: {opacity: 1, height: "auto"},
        collapsed: {opacity: 0, height: 0}
    }

    return (
        <div key={i}>
            <div className='faq-title' onClick={() => setExpanded(isOpen ? false : i)}>
                {title}

                <div>
                    <motion.span animate={{rotateZ: isOpen ? -45 : 45, x: isOpen ? -11 : -22, y: 3}} transition={{duration: 0.4, ease: 'anticipate'}}></motion.span>
                    <motion.span animate={{rotateZ: isOpen ? 45 : -45, x: isOpen ? -11 : 0}}></motion.span>
                </div>
            </div>

            {isOpen && (
                <AnimatePresence>
                    <motion.div className='faq-description' initial="collapsed" animate="open" exit="collapse" 
                        variants={openVariants}
                        transition={{duration: 0.4}}
                        style={{padding: "0 1rem"}}
                    >
                        {description}
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    )
}