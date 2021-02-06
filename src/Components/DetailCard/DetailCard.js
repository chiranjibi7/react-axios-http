import React from "react";
import "./DetailCard.css";
import { IMAGE_URL } from "../../config";
import Card from '../Card/Card';

const DetailCard = ({
  posterPath,
  title,
  name,
  vote,
  runtime,
  overview,
  date,
  genres,
  productionCountry,
  seasons,
  episodes
}) => {
  return (
    <div className="Detail">
      <Card imgURL={IMAGE_URL} path={posterPath}/> 
      <div className="detail-section">
        <h2>{title || name}</h2>

        <div className="rating">
          {vote && vote!==0 ? <p><i className="far fa-star"></i> {vote}</p> : null}
          {runtime && runtime!==0 ?  <p>{runtime} min</p> : null}
        </div>

        <div className="info">
          <p>{overview}</p>
          <span>Country: <span style={{marginLeft:'40px'}}>{productionCountry && productionCountry[0].name}</span></span>
          {date && <span>Release: <span style={{marginLeft:'43px'}}>{date}</span></span>}
          <span>Genre: {genres &&
            genres.map((genre) => <span key={genre.id}  style={{marginLeft:'54px'}} >{genre.name}</span>)}</span>
           {seasons && <span>Seasons:<span style={{marginLeft:'44px'}}>{seasons}</span></span>}
           {episodes && <span>Episodes:<span style={{marginLeft:'41px'}}>{episodes}</span></span>}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
