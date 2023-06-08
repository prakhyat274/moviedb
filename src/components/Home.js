import React, { useEffect, useState } from "react";
import HomeMovie from "./HomeMovie";

export default function Home({time="day", apiKey, changeId}) {

    const [movieTrend,setMovieTrend] = useState([])
    const [tvTrend,setTvTrend] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            if (time) {
              let url = `https://api.themoviedb.org/3/trending/movie/${time}?api_key=${apiKey}&language=en-US`;
              let data = await fetch(url);
              let parsedData = await data.json();
              let limitResult = [];
              for(let i=0;i<6;i++){
                limitResult.push(parsedData.results[i])
              }
              setMovieTrend(limitResult)
            }
          } catch (error) {
            // Handle error
          }
        };
        const fetchDataTv = async () => {
            try {
              if (time) {
                let url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}&language=en-US`;
                let data = await fetch(url);
                let parsedData = await data.json();
                let limitResult = [];
                for(let i=0;i<6;i++){
                  limitResult.push(parsedData.results[i])
                }
                setTvTrend(limitResult);
              }
            } catch (error) {
              // Handle error
            }
          };

          fetchDataTv();
        fetchData();
      }, [time, apiKey]);

    return(
        <>
        <h2 style={{textAlign: "center"}}>Movie Trending Now</h2>
        <HomeMovie movieTrend={movieTrend} changeId={changeId} type={"movie"}/>
        <h2 style={{textAlign: "center"}}>TV Shows Trending Now</h2>
        <HomeMovie movieTrend={tvTrend} changeId={changeId} type={"tv"}/>
        </>
    )
}
