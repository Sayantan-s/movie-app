import { ADD_TICKET } from "../action.redux"

 export const INCREMENT_MOVIE_TICKET = moviename => {
     return {
         type : ADD_TICKET,
         payload: 1,
         moviename
     }
 }