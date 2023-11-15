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
            </div>
            {isOpen && (
                <AnimatePresence>
                    <motion.div className='faq-description' initial="collapsed" animate="open" exit="collapsed" 
                        variants={openVariants}
                        transition={{duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98]}}
                        style={{padding: "0 0 0 2rem"}}
                    >
                        {description}
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    )
}