import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AuthSecondaryRoutes = ({text,linktext,to}) => {
    return (
       <AuthText>
           { text } 
           <span><Link to={to}>{linktext}</Link></span>
       </AuthText>
    )
}

export default AuthSecondaryRoutes

const AuthText = styled.p`
font-size : 0.85rem;
-webkit-font-smoothing: antialiased;
align-self:center;
a{
    text-decoration : none;
    color : #706bfa;
    font-weight: 500;
}
`