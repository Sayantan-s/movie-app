import { ADD_TICKET, DELETE_TICKET } from "../action.redux"

 export const INCREMENT_MOVIE_TICKET = moviename => {
     return {
         type : ADD_TICKET,
         ticketPrice:100.0,
         moviename
     }
 }

 export const DECREMENT_MOVIE_TICKET = moviename => {
    return {
        type : DELETE_TICKET,
        ticketPrice:100.0,
        moviename
    }
}