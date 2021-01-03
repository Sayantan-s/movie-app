import React from 'react'

const HallBooking = (props) => {
    console.log(props)
    return (
        <div>
            <h1>
                Select Hall
            </h1>
            { JSON.stringify(props) }
        </div>
    )
}

export default HallBooking
