import React from 'react'
import styled from 'styled-components'
import { Star } from '../../utils/Icons'

const MovieCards = ({photoUrl,name,movieProps}) => {
    const { rating,rates,genre,release } = movieProps
    return (
        <Card>
            <div className="movie-poster">
                <img src={photoUrl} alt={name} />
            </div>
            <div className="movie-content">
                <h2>{name}</h2>
                <h3>
                    <span>{release}</span>
                    &middot;
                    <span>{genre.join(' | ')}</span>
                </h3>
                <div className="movie-content--rates">
                    <Star size="0.8rem" fill="#F9982D"/>
                    <span>{rating}</span>
                    <span>({rates})</span>
                </div>
            </div>
        </Card>
    )
}

export default MovieCards

const Card = styled.figure`
padding: 0;
margin: 0;
cursor: pointer;
.movie{
    &-poster{
    width: 250px;
    height: 400px;
    position: relative;
    overflow: hidden;
    border-radius: 0.8rem;
    img{
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit:cover;
    }
}
&-content{
    margin-top: 0.8rem;
    font-size: 0.7rem;
    h2{
    font-size: 1.3rem;
    margin: 0;
    }
    h3{
        margin-top: 0.5rem;
        font-weight: 300;
        display: flex;
        gap: 0.5rem;
        margin: 0;
        color : var(--text);
    }
    &--rates{
        color : var(--text);
        margin-top: 0.5rem;
        display: flex;
        gap: 0.1rem;
        span{
            &:last-child{
                margin-left : 0.5rem;
            }
        }
    }
}
}
`