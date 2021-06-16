import { Request_handler } from "./request_handler"


export const getMovies = async ( postData ) => {
   // console.log(postData,"postData")
   let res = await Request_handler.get(  '', postData )
   return res
}

export const getMoviesDetail = async ( postData ) => {
   // console.log(postData,"postData")
   let res = await Request_handler.get( '' , postData )
   return res
}
