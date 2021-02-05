import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {axiosInstance,API_KEY} from '../../config';

const Details = (props) => {

  const {mediaType, mediaId}= useParams();
  
    return (
       <div>
            hi
        </div>
    )
}

export default Details;
