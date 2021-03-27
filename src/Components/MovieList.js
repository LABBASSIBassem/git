import React,{useState} from 'react'
import logo from '../logo.svg'
import MovieCard from './MovieCard'



const MovieList = () =>{
    const [Movies,setMovies] = useState([{title:'Le silence de la ville blanche',desc:'aheioaie',postUrl:'https://www.netflix-news.com/wp-content/uploads/2020/03/AAAABbuKCPOlV6RAlStUJim7KiBGdVEpKo_nz6hAFyQ36h4X13kLHQu_Hy8h6NpmThH-oe70cEafsrqEXiYCNee1_3-W4auZUfMJ6-OMXWQNs0PEnJ-iZxgamJaxMhbM4w.jpg',rate:'5'},
    {title:'spiderman',desc:'aheioaie',postUrl:logo,rate:'5'}
   
])

const [data,setData] = useState('')

    return(
        <>
        <input type="text" onChange={(e)=>{setData(e.target.value)}} />
        <button onClick={()=>{setMovies(Movies.filter(film=> film.title == data))}}>Seacrh</button>
{
    Movies.map(film=><MovieCard title={film.title} disc={film.desc} image={film.postUrl} rate={film.rate}/>)
}
        </>
    )
}


export default MovieList