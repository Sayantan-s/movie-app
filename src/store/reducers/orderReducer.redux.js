import { ADD_TICKET } from "../action.redux"

const initialState = {
    orderName : '',
    noOfTickets : 0
}

export const ticketOrder = (state = initialState,action) => {
    switch(action.type){
        case ADD_TICKET :
            return {
                ...state,
                orderName : action.moviename,
                noOfTickets : state.noOfTicket + action.payload
            }
        default: state
    }
}