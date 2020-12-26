import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Ticket, Video,Profile,Logout, FacebookF, Paypal, Squarespace } from '../utils/Icons'

const Sidebar = () => {
    const Widgets = [
        {
            toPath: '/',
            widgetName: 'Now Streaming',
            Icon : Video
        },
        {
            toPath : '/orders',
            widgetName : 'My Tickets',
            Icon : Ticket
        },
        {
            toPath : '/profile',
            widgetName : 'Profile',
            Icon : Profile
        },
        {
            toPath : '/',
            widgetName : 'Logout',
            Icon : Logout
        }
    ]
    return (
      <Bar>
          <NavlinkStyled to="/">
              <span>
                  Movie
              </span>
              <span>
                  app
              </span>
          </NavlinkStyled>
          <NavHolders>
            {
                Widgets.map(widget => {
                    return <SidebarWidgets
                    key={widget.toPath}
                    {...widget}
                    />
                })
            }
          </NavHolders>
          <Footer>
            <span> Copyright &copy; 2005-{new Date().getFullYear()} </span>
            <div className="links">
                <FacebookF size={"0.9rem"}/>
                <Paypal size={"0.9rem"}/>
                <Squarespace size={"0.9rem"}/>
            </div>
          </Footer>
      </Bar>
    )
}

export default Sidebar


const Bar = styled.div`
background-color : #f7f7f7;
flex-basis : 15%;
display:flex;
gap: 5rem;
flex-direction:column;
position:relative;
`
const NavlinkStyled = styled(NavLink)`
text-decoration: none;
font-weight: 600;
color: #000;
padding: 1.5rem;
font-size: 2rem;
margin: 0 auto;
span{
    &:last-child{
        color :  #F46C3F;
    }
}
`
const NavHolders = styled.div`
display:flex;
flex-direction:column;
gap: 2rem;
`
const Footer = styled.footer`
font-size: 0.8rem;
color : rgba(107, 114, 128, 1);
display:flex;
flex-direction:column;
position:absolute;
bottom:2rem;
margin: 0 auto;
text-align: center;
width:100%;
gap:0.6rem;
.links{
    display: flex;
    gap: 0.4rem;
    justify-content: center;
    fill: rgba(156, 163, 175, 1);
    align-items:center;
    cursor:pointer;
    svg:hover{
        fill : #F46C3F;
    }
}
`

const SidebarWidgets = ({Icon,widgetName,toPath}) => {
    return(
        <StyledLink to={toPath}>
           <div className="widget-holder">
                <Icon size="1.5rem"/>
                <span>{widgetName}</span>
           </div>
        </StyledLink>
    )
}

const StyledLink = styled(NavLink)`
display : flex;
color : rgba(156, 163, 175, 1);
text-decoration: none;
align-items: center;
justify-items:center;
text-align: center;
position: relative;
.widget-holder{
    display: flex;;
    align-items: center;
    flex: 1;
    margin: 0 2vw;
    gap: 1.2rem;
}
&:before{
    content : ' ';
    width: 0px;
    height: 22px;
    background-color : #F46C3F;
    border-top-right-radius : 50%;
    border-bottom-right-radius : 50%;
    transition: 0.3s all;
    position: absolute;
    left: 0;
}
&:hover::before{
    width: 13px;
}
svg{
    fill : rgba(156, 163, 175, 1);
}
&:hover svg{
    fill : #F46C3F;
}
`