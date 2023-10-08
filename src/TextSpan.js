import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const TextSpan = ({children}) => {
    const controls = useAnimationControls();
    const [isPlaying, setIsPlaying] = useState(false);

    const rubberBand = () => {
        controls.start({
            transform: [
                "scale3d(1, 1, 1)",
                "scale3d(1.4, 0.55, 1)",
                "scale3d(0.75, 1.35, 1)",
                "scale3d(1.35, 0.7, 1)",
                "scale3d(0.9, 1.2, 1)",
                "scale3d(1,1,1)",
            ]
        })
        setIsPlaying(true)
    }

    return(
        <motion.span 
            animate={controls}
            onMouseOver={()=>{
                if(!isPlaying)
                rubberBand()
            }}
            onAnimationComplete={() => setIsPlaying(false)}
            >
            {children}
        </motion.span>
    )
}

export default TextSpan;