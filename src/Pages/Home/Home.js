import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import "./Home.css";
import { API_KEY, IMAGE_URL, axiosInstance } from "../../config";
import {Link} from 'react-router-dom';
import Carousel from '../../Components/Carousel/Carousel';

const Home = () => {
  
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTvShows, setTrendingTvShows] = useState([]);

  const getTrending= async () => {
    try {
      const trendingMoviesList = await axiosInstance({
        method: "GET",
        url: "/trending/movie/week",
        params: {
          api_key: API_KEY,
        },
      });
      console.log(trendingMoviesList.data.results);
      setTrendingMovies(trendingMoviesList.data.results);
      const trendingTvshowsList = await axiosInstance({
        method: "GET",
        url: "/trending/tv/week",
        params: {
          api_key: API_KEY,
        },
      });
      setTrendingTvShows(trendingTvshowsList.data.results);
    } catch (error) {
      console.log(error);
 
    }
  };

  useEffect(() => {
    getTrending();
  }, []);

 

  const displayTrendingMovies= trendingMovies.map((movie) => {
    return (
      <Link to={`/${movie.media_type}/${movie.id}`} key={movie.id} style={{textDecoration:'none'}}><Card
          imgURL={IMAGE_URL}
          path={movie.poster_path}
          title={movie.title || movie.name}
          type={movie.media_type}
          overview={movie.overview}
        /></Link>
    );
  });

  const displayTrendingTvShows= trendingTvShows.map((tv) => {
    return (
      <Link to={`/${tv.media_type}/${tv.id}`} key={tv.id} style={{textDecoration:'none'}}><Card
          imgURL={IMAGE_URL}
          path={tv.poster_path}
          title={tv.title || tv.name}
          type={tv.media_type}
          overview={tv.overview}
        /></Link> 
    );
  });

  return(
      <div className="Home">
        <div>
          <Carousel movies={trendingMovies.filter(movie=> movie.vote_average >=7.3)}/>
        </div>
      <p className="label">Trending Movies</p>
      <div className="Trending">
          {displayTrendingMovies}
      </div>
      
      <p className="label">Trending TV Shows</p>
      <div className="Trending">
          {displayTrendingTvShows}
      </div>

      </div>
  );
};

export default Home;
