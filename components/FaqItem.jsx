import React, { useRef, useEffect} from 'react';
import { motion } from 'framer-motion';
import autoAnimate from '@formkit/auto-animate';

export default function FaqItem({i, expanded, setExpanded, title, description}) {
    const isOpen = i === expanded;
    const parent = useRef(null);

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

    return (
        <div key={i} ref={parent}>
            <div className='faq-title' onClick={() => setExpanded(isOpen ? false : i)}>
                {title}

                <div>
                    <motion.span animate={{rotateZ: isOpen ? -45 : 45, x: isOpen ? -11 : -22, y: 3}} transition={{duration: 0.4, ease: 'anticipate'}}></motion.span>
                    <motion.span animate={{rotateZ: isOpen ? 45 : -45, x: isOpen ? -11 : 0}}></motion.span>
                </div>
            </div>

            {isOpen && (
                <div className='faq-description' style={{padding: "2rem 1rem"}}>
                    {description}
                </div>
            )}
        </div>
    )
}