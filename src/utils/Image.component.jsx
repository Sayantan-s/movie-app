import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Image = ({src,alt,...otherImageProps}) => {
    const ImageRef = React.useRef('');
    const [imgLoad,setImgLoaded] = React.useState(false)
    React.useEffect(() => {
        console.log(ImageRef);
        ImageRef.current.addEventListener('load', () =>{
            console.log(alt + ' is Loaded')
            setImgLoaded(true);
        })
    },[imgLoad])
    return (
       <Img {...otherImageProps}>
           {
               imgLoad ? 
               <motion.img 
               ref={ImageRef}
               src={src} 
               alt={alt}
               loading="lazy"/>
               : <div>Loading..</div>
           }
       </Img>
    )
}

export default Image

const Img = styled(motion.div)`
position: relative;
overflow: hidden;
width: 400px;
height: 400px;
img{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`