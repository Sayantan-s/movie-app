import React from 'react'

const MoviePage = (props) => {
    console.log(props)
    return (
        <div>
            {props.match.params.id}
        </div>
    )
}

export default MoviePage
