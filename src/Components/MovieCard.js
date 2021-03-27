import React from 'react'



const MovieCard = (props) =>{


    return(
        <>
        <p>Name:{props.title} </p>
        <p>Description: {props.disc}</p>
        <img src={props.image} />
        <p>rate:{props.rate} </p>


        </>
    )
}




export default MovieCard