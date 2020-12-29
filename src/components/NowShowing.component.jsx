import React from 'react'
import styled from 'styled-components'
import Image from '../utils/Image.component'

const NowShowing = () => {
    return (
        <Showing>
            <h1>Now Showing</h1>
            <p>Retro occupy organic,stumpdown shabby chic pour-over roof part.</p>
            <Image 
            src={'https://images.unsplash.com/photo-1608749769135-cdc495ef90ac?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
            alt="Canion"
            />
        </Showing>
    )
}

export default NowShowing


const Showing = styled.div`
h1{
    font-size: 1.8rem;
    margin: 0.5rem 0;
}
p{
    font-size: 0.9rem;
    margin: 0;
}

`