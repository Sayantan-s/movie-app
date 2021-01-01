import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Image = ({src,alt,...otherImageProps}) => {
    return (
       <Img {...otherImageProps}>
            <motion.img 
                whileHover={{ scale : 1.03 }}
                transition={{ duration: 0.3,ease:"easeInOut"}}
                src={src} 
                alt={alt}
                loading="lazy"
            />      
       </Img>
    )
}

export default Image

const Img = styled(motion.div)`
position: relative;
overflow: hidden;
width: ${props => props.width};
height: ${props => props.height};
border-radius: ${props => props.radius || 'none'};
img{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`