import React, {useState, useEffect} from 'react'
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl}){
    const [movies, setMovies] = useState([]);

    //row 가 로딩될 때마다 렌더링됨
    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

        //만약 [], row가 로딩되면, 한번만 로딩됨
    }, [fetchUrl]);

    return(
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie=>{
                    return (
                        <img 
                            className='row__poster'
                            src={`${base_url}${movie.poster_path}`} 
                            alt={movie.name}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Row;