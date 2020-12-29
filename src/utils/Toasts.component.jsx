import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Toasts = ({Icon,toastText,extraText,...otherProps}) => {
    const duration = 0.2
    const variants = {
        initial: {
          opacity: 0,
        },
        enter: {
          opacity: 1,
          transition: {
            duration: duration,
            type:'spring',
            stiffness : 30
          },
        },
        exit: {
          opacity: 0,
          transition: { duration: duration },
        },
      }
    return (
       <AnimatePresence>
            <Toastify
            variants={variants}
             initial="initial"
             animate="enter"
             exit="exit"
            {...otherProps}>
                <Icon size="1.5rem"/>
                <p>
                    <span>
                        {toastText}
                    </span>
                    &nbsp;
                    <span>
                        {extraText}
                    </span>
                </p>
        </Toastify>
       </AnimatePresence>
    )
}

export default Toasts

const Toastify = styled(motion.div)`
display: flex;
padding: 0.3rem 0.8rem;
gap:0.3rem;
width:max-content; 
position : absolute;
left: 50%;
transform:translate(-50%);
color : ${props => props.bgColor};
background-color : ${props => props.color};
align-items:center;
border-radius: 50px;
font-size: 0.9rem;
bottom: 0;
margin: 2rem 0;
svg{
    fill: ${props => props.bgColor};
}
p{
    span{
    &:first-child{
        font-weight: 600;
    }
}
}
`