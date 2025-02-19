import React, { useState, useEffect } from 'react'
import axios from './axios';
import "./Row.css";
import YouTube from "react-youtube"
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");

    //row 가 로딩될 때마다 렌더링됨
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

        //만약 [], row가 로딩되면, 한번만 로딩됨
    }, [fetchUrl]);

    const opts = {
        height:"390",
        width:"100%",
        playerVars:{
            autoply:1,
        }
    };

    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl("");

        }else{
            movieTrailer(movie?.name || "")
            .then((url)=>{
                const urlParams=new URLSearchParams(new Url(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error)=> console.log(error));
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map((movie) => {
                    return (
                        <img
                            key={movie.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${base_url}${
                                isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />
                    )
                })}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row;