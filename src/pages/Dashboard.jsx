import React from 'react'
import BrowseByCatagory from '../components/BrowseByCatagory.component'
import NowShowing from '../components/NowShowing.component'

const Dashboard = (props) => {
    console.log(props)
    return (
        <div>
            <NowShowing />
            <BrowseByCatagory />
           
        </div>
    )
}

export default Dashboard
