import React from 'react';
import "./Card.css";

const CardComponent = ({imgURL,path,title}) => {

    return (
     <div className="Card">
                <img src={`${imgURL}/${path}`} height="300px" width="220px" alt="card img"/>
                <p id="title">{title}</p>
              </div>
        ); 
}

export default CardComponent;
