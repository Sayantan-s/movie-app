import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Button = ({children,...btnProps},ref) => {
    return (
        <Btn
        ref={ref}
        whileTap={{ scale : 0.9 }} 
        {...btnProps}>
            {children}
        </Btn>
    )
}

export default React.forwardRef(Button);


const Btn = styled(motion.button)`
gap: 0.5rem;
padding : ${props => props.padding || "0.8rem 0.5rem" };
border-radius: ${props => props.radius || '0.4rem'};
border: none;
outline: none;
font-family : 'poppins';
font-size : 1rem;
font-weight: ${props => props.fontWeight};
background-color : ${props => props.backgroundColor};
color: ${props => props.color};
display:flex;
align-items: center;
cursor: pointer;
`
