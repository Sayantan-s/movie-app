import { motion } from 'framer-motion';
import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { FilmCards } from './ui/MovieCards.component';

const NowShowing = () => {
    const movies = useSelector(state => state.firestore.ordered.movies);
    console.log(movies)
    return (
        <Showing>
            <h1>Now Showing</h1>
            <p>Retro occupy organic,stumpdown shabby chic pour-over roof part.</p>
            <MovieStack
               drag={'x'}
               dragConstraints={{ left: -2330,right : 0 }}
               dragTransition={{ bounceStiffness: 1000, bounceDamping: 50,min: 0, max:100 }}
            >
                {
                    movies?.map(({id,thumbnail}) => {
                        return <FilmCards
                        key={id}
                        {...thumbnail}
                        />
                    })
                }
            </MovieStack>
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
    margin: 0 0 1rem 0;
}

`
const MovieStack = styled(motion.section)`
display : flex;
gap : 2rem;
cursor : grab;
`