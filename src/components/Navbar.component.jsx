import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Avatar, Search } from '../utils/Icons'

const Navbar = () => {
    return (
        <Nav>
            <div>
                <ToLink
                to="/"
                className="Logo">
                    Movie app
                </ToLink>
            </div>
            <NavHandler>
                <Search size="1rem"/>
                <ToLink
                 to="/login">
                     Login
                 </ToLink>
                 <ToLink
                 to="/signup">
                     Sign up
                 </ToLink>
                 <ToLink
                 to="/">
                     Sign out
                 </ToLink>
                 <Avatar size="1.5rem" />
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
`