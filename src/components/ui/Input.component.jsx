import React from 'react'
import styled from 'styled-components'

const Input = ({inpType,ElementConfig,value,onChange,otherInpProps}) => {
   let inputEle = null;

   switch(inpType){
       case 'input': 
            inputEle = <input 
            {...ElementConfig} 
            value={value} 
            onChange={onChange}
            />
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

