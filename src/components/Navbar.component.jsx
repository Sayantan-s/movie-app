import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Search } from '../utils/Icons'

const Navbar = () => {
    return (
        <Nav>
            <NavHandler>
                <Search size="1.2rem"/>
                <ToLink
                 to="/auth/login">
                     Login
                 </ToLink>
                 <ToLink
                 to="/auth/signup">
                     Sign up
                 </ToLink>
            </NavHandler>
        </Nav>
    )
}

export default Navbar

const Nav = styled.nav`
display : flex;
justify-content: space-between;
align-items: center;
padding:1rem;
`

const ToLink = styled(NavLink)`
text-decoration : none;
`

const NavHandler = styled.div`
display : flex;
align-items: center;
gap:3rem;
flex: 1;
justify-content: flex-end;
padding-right : 3rem;
`