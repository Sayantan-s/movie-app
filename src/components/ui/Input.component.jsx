import React from 'react'
import styled from 'styled-components'

const Input = ({inpType,ElementConfig,value,onChange,otherInpProps,Icon}) => {
   let inputEle = null;

   switch(inpType){
       case 'input': 
            inputEle = <InpItem >
                <Icon size={'1.5rem'} fill="rgba(43, 40, 40, 0.2)"/>
                <input
                    {...ElementConfig} 
                    value={value} 
                    onChange={onChange}
                />
            </InpItem>
            break;
        case 'textarea' : 
            inputEle = <textarea
            {...ElementConfig}
            value={value}
            onChange={onChange}
            />
            break;
        default:
            inputEle = <input
            {...otherInpProps}
            value={value}
            onChange={onChange}
            />
   }

   return inputEle;
    
}

export default Input

const InpItem = styled.div`
display : flex;
align-items: center;
justify-items : center;
gap: 0.5rem;
padding : 0.8rem 0.5rem;
transition : 0.3s all;
border-radius: 0.8rem;
border: 2.5px solid rgba(247, 244, 246,1);
svg path{
    fill : rgba(156, 163, 175, 0.7);
}
&:focus-within{
    border: 2.5px solid rgba(209, 213, 219, 1) ;
}
&:focus-within svg path{
    fill : rgba(156, 163, 175, 1);
}
input {
    border: none;
    outline: none;
    font-family : 'poppins';
    width : 100%;
    ::placeholder{
        color : rgba(156, 163, 175, 0.8);
    }
}
`