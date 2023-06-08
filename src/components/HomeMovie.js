import React from 'react'
import { Link } from "react-router-dom";
import HomeCard from "./HomeCard";

export default function HomeMovie({movieTrend, changeId, type}) {
    const handleClick = async (id,type) =>{
        await changeId(id,type)
    }
    return (
        <div className="row">
                {
                    movieTrend.map((movie)=>{
                        return (
                            <div onClick={() => handleClick(movie.id,type)} key={movie.id} className="coloumn col-lg-2 col-md-3 col-sm-4 col-xs-2 my-3">
                            <Link to="/details"><HomeCard
                                title={type==="movie"?movie.title:movie.name}
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
