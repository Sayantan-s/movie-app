import { motion, useMotionValue, useSpring } from 'framer-motion'
import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { Route, Switch, useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MovieCards from './ui/MovieCards.component'
import MoviePage from '../pages/dynamic/MoviePage'

const BrowseByCatagory = () => {
    const history = useHistory();
    console.log(history)
    useFirestoreConnect([
        {
            collection : 'movies'
        }
    ])
    let scrollRef = React.useRef(null);
    const x = useSpring(0,{
        damping : 200,
        stiffness: 200,
        ease: [0.6,0.05,-0.01,0.99]
    })
    const movies = useSelector(state => state.firestore.ordered.movies);

    console.log(x.get())

    React.useEffect(_ => {
        
    },[])
    return (
       <SectionBrowse>
           <h2>
               Browse by catagory
           </h2>
            <GenreFilter>
                {
                    ['Action','Drama','Crime','Sci-fi','Comedy'].map(genre => {
                        return <Genres isActive>{genre}</Genres>
                    })
                }
            </GenreFilter>
          {movies !== undefined ? <MovieStack 
          ref={ele => scrollRef = ele} 
          style={{ x }}
          drag={'x'}
          dragConstraints={{ left: -2050,right : 0 }}
          dragTransition={{ bounceStiffness: 1000, bounceDamping: 50,min: 0, max:100 }}
          dragPropagation
          layout
          >
               {
                  movies.map((movie,id) => {
                      return <CardLink
                      to={`${history.location.pathname}${movie.name}`}
                      key={movie.name}
                      >
                       <MovieCards
                      {...movie}
                      />
                      </CardLink>
                  } )
               }
            </MovieStack> : <div>Loading...</div>}
       </SectionBrowse>
    )
}

export default BrowseByCatagory

const SectionBrowse = styled.section`
display: flex;
flex-direction: column;
h2{
    font-size : 1.4rem;
}
`
const GenreFilter = styled.div`
display: flex;
gap: 0.5rem;
font-size : 0.9rem;
`
const Genres = styled.span(props => ({
    padding:' 0.2rem 0.5rem',
    color: props.isActive ? '#F46C3F': 'var(--text)',
    backgroundColor: props.isActive ? '#FBE9E7': '#fff',
    borderRadius: '50px',
    cursor: 'pointer' 
}))

const MovieStack = styled(motion.section)`
display: flex;
gap: 2rem;
margin-top: 1.5rem;
cursor: grab;
`
const CardLink = styled(Link)`
text-decoration: none;
`