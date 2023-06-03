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
                                title={movie.title}
                                score={movie.vote_average}
                                imgUrl={movie.poster_path}
                            /></Link>
                            </div>
                        );
                    })
                }
        </div>
    )
}
