import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import ButtonComponent from '../../components/ui/Button.component';
import { DECREMENT_MOVIE_TICKET, INCREMENT_MOVIE_TICKET } from '../../store/actions/orderAction.redux';
import { ProfileBold } from '../../utils/Icons';

let seatArray = [];

for(let i = 0; i<(15*10);i++){
    seatArray.push(i);
}

//console.log(seatArray)

const HallBooking = (props) => {
    const [clicked,setClicked] = useState(seatArray.map((seat,id) => {
        return {
            ...seat,
            booked : false,
            isBooked : !!(Math.round(Math.random())),
            id
        }
    }));

    const dispatch = useDispatch();

    const seatBooker = id => {
        let updatedbooking = [...clicked];
        let updatedbookedSeat = { ...updatedbooking[id] };
        if(!updatedbookedSeat.isBooked){
            updatedbookedSeat.booked = !clicked[id].booked;
            if(!updatedbookedSeat.booked){
                dispatch(DECREMENT_MOVIE_TICKET());
            }
            else if(updatedbookedSeat.booked){
                dispatch(INCREMENT_MOVIE_TICKET());
            } 
        }
        updatedbooking[id] = updatedbookedSeat;
        setClicked(updatedbooking);
    }

    const { TotalCost,
        noOfTickets,
        orderName } = useSelector(state => state.order)
    
    const RouteHandler = () => {
       console.log(props)
    }    

    return (
        <Booking>
            <h1>
                Buy ticket
            </h1>
            <SeatGrid>
                {
                    seatArray.map((seat,id) => (
                        <Seat
                        bgCol={clicked[id].booked ? "#F46C3F" : clicked[id].isBooked ? "#d3d3d350" : " #FBE9E7"}
                        onClick={() => seatBooker(id)}
                        whileTap={{ scale : 0.95 }} 
                        key={seat}>
                          {
                              clicked[id].isBooked && <ProfileBold size="1rem" fill="var(--text)"/>
                          }  
                        </Seat>
                    ))
                }
            </SeatGrid>
            <Cost>
                <h1>Total cost</h1>
                <div className="book">
                    <h2>
                        <span>$</span>
                        <span>{TotalCost.toFixed(2)}</span>
                    </h2>
                    <ButtonComponent
                        onClick={RouteHandler}
                         padding="0.7rem 1rem"
                         radius="0.8rem"
                         color="#fff"
                         backgroundColor="#F46C3F"
                         fontWeight="600"
                    >Continue</ButtonComponent>
                </div>
            </Cost>
        </Booking>
    )
}

export default HallBooking




const SeatGrid = styled.section`
display: grid;
grid-template-columns : repeat(25,max-content);
grid-template-rows: repeat(6,max-content);
gap:1rem;
//background-color:orange;
`


const Seat = styled(motion.div)`
background-color: ${props => props.bgCol};
width: 30px;
height: 30px;
border-radius: 0.3rem;
cursor: pointer;
display:flex;
justify-content: center;
align-items: center;
`

const Booking = styled.section`
margin: 0 200px 0 100px;

`
const Cost = styled.div`
display:flex;
flex-direction: column;
margin-top: 2rem;
&:before{
    height: 1px;
    width: 20%;
    background-color: rgba(0,0,0,0.1);
    content: '';
    margin-bottom: 1rem;
}
h1{
    font-size : 0.9rem;
    font-weight: 400;
    opacity:0.5;
    margin:0;
}
h2{
    margin:-0rem;
}
.book{
    display:flex;
    gap: 2rem;
    align-items: center;
    a{
        text-decoration: none;
    }
}
`