import React from 'react'
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function HomeMovie({movieTrend, changeId, type}) {
    const handleClick = async (id,type) =>{
        await changeId(id,type)
    }
    return (
        <div className="row">
                {
                    movieTrend.map((movie)=>{
                        return (
                            <div onClick={() => handleClick(movie.id,type)} key={movie.id} className="coloumn col-lg-3 col-md-6 col-xs-12 my-3">
                            <Link to="/details"><MovieCard
                                title={type==="movie"?movie.title:movie.original_name}
                                score={Math.floor(movie.vote_average*10)/10}
                                imgUrl={movie.poster_path}
                            /></Link>
                            </div>
                        );
                    })
                }
        </div>
    )
}
