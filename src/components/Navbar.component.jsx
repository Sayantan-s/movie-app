import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Search } from '../utils/Icons'

const Navbar = () => {
    const { auth : { isEmpty } } = useSelector(state => state.firebase)
    return (
        <Nav>
            <NavHandler>
                <Search size="1.2rem"/>
                {isEmpty && <div className="AuthLinks">
                    <ToLink
                    color ={'#F46C3F'}
                    bgCol="#FBE9E7"
                    to="/auth/login">
                        Login
                    </ToLink>
                    <ToLink
                    color={'#706bfa'}
                    bgCol={'#EDE7F6'}
                    to="/auth/signup">
                        Sign up
                 </ToLink>
                </div> }
            </NavHandler>
        </Nav>
    )
}
//#706bfa;
//#F46C3F;

export default Navbar

const Nav = styled.nav`
display : flex;
justify-content: space-between;
align-items: center;
padding:1rem;
`

const ToLink = styled(NavLink)`
text-decoration : none;
background-color : ${props => props.bgCol};
color : ${props => props.color};
padding: 0.3rem 0.8rem;
border-radius: 0.4rem;
`

const NavHandler = styled.div`
display : flex;
align-items: center;
gap:1.5rem;
flex: 1;
justify-content: flex-end;
padding-right : 3rem;
.AuthLinks{
    display: flex;
    gap: 0.5rem;
}
`