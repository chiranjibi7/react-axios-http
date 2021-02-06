import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {axiosInstance, API_KEY} from '../../config';
import DetailCard from "../DetailCard/DetailCard";

const Details = () => {

  const { mediaType, mediaId }= useParams();

  const [details, setDetails]= useState({});

  const getDetails= async()=>{
    try {
      const fetchedDetails= await axiosInstance({
        method:'GET',
        url:`/${mediaType}/${mediaId}`,
        params: {
          api_key: API_KEY
        }
      });
      console.log(fetchedDetails.data);
      setDetails(fetchedDetails.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDetails();
  }, [mediaType,mediaId]);

  
    return (
       <div>
        <DetailCard 
        posterPath={details.poster_path}
        title={details.title}
        name={details.name}
        vote={details.vote_average}
        runtime={details.runtime}
        overview={details.overview}
        date={details.release_date}
        genres={details.genres}
        productionCountry={details.production_countries}
        seasons={details.number_of_seasons}
        episodes={details.number_of_episodes}/>

        </div>
    )
}

export default Details;
 