import { ADD_TICKET, DELETE_TICKET } from "../action.redux"

const initialState = {
    orderName : '',
    noOfTickets : 0,
    TotalCost : 0.0
}

export default (state = initialState,action) => {
    switch(action.type){
        case ADD_TICKET :
            return {
                ...state,
                orderName : action.moviename,
                noOfTickets : state.noOfTickets + 1,
                TotalCost : state.TotalCost + action.ticketPrice
            }

        case DELETE_TICKET : 
            return {
                ...state,
                orderName : action.moviename,
                noOfTickets : state.noOfTickets - 1,
                TotalCost : state.TotalCost - action.ticketPrice
            }
        default: return state
    }
}