import React from 'react';
import "./Home.css";

const Home = () => {
    const heading= "{JSON} Placeholder";
    return (
        <div className="Home">
             <h1 className="head">{heading}</h1>
             <p className="body">Free fake API for testing and prototyping.</p>
             <p className="body">Powered by JSON Server + LowDB</p>
       
        </div>
      
    )
}

export default Home;
