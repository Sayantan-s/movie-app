import React from 'react'
import { useSelector } from 'react-redux'
import BrowseByCatagory from '../components/BrowseByCatagory.component'
import NowShowing from '../components/NowShowing.component'

const Dashboard = (props) => {
    console.log(props)
    const movies = useSelector(state => state.firestore.ordered.movies);
    console.log(movies)
    return (
        <div>
        <NowShowing />
            <BrowseByCatagory />
        </div>
    )
}

export default Dashboard