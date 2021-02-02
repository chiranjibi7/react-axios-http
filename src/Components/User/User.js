import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosInstance } from "../../Axios";
import "./User.css";
import {Link} from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const User = () => {
  const { id } = useParams();
  const history = useHistory();

  const  [user, setUser] = useState( {
    address: {
      city: "",
      geo: { lat: "", lng: "" },
      street: "",
      suite: "",
      zipcode: "",
    },
    company: {
      bs: "",
      catchPhrase: "",
      name: "",
    },
    email: "",
    id: 1,
    name: "",
    phone: "",
    username: "",
    website: "",
  }
  );

  const [isLoading, setLoading]= useState(false);

  useEffect(() => {
      setLoading(true);
      fetchUserDetail();
  }, []);

  const fetchUserDetail = async () => {
    try {
      const userDetail = await axiosInstance.get(`/users/${id}`);
      setUser(userDetail.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
}

const backRouteHandler=()=>{
  history.goBack();
}

const getFirstAndSecondLetters=(user)=>{
  const firstLetter= user.name.charAt(0);
  const spaceIndex= user.name.indexOf(" ");
  const secondLetterIndex=spaceIndex+1;
  const secondLetter= user.name.charAt(secondLetterIndex);
  const letters= firstLetter.concat(secondLetter);
  return letters;
}

  return (
    isLoading 
    ? <Spinner/>
    :
    <React.Fragment>
    <div className="User">
      <div className="Upper">
        <div className="avatar">
            <p>{getFirstAndSecondLetters(user)}</p>
        </div>
        <div className="info">
          <h3 id="name">{user.name}</h3>
          <p id="username">@{user.username}</p>
        </div>
      </div>

      <div className="details">
          <p><i class="fas fa-id-badge">:</i> <span>{user.id}</span></p>
          <p><i class="fas fa-envelope-square">:</i> <span>{user.email}</span></p>
          <p><i class="fas fa-phone-square-alt">:</i> <span>{user.phone}</span></p>
          <p><i class="fab fa-edge-legacy">:</i> <span>{user.website}</span></p>
      </div>

      <div>
        <h5 className="company-address-header">Address</h5>
        <div className="address">
          <p><span className="address-name">City:</span> <span>{user.address.city}</span></p>
          <p><span className="address-name">Street:</span> <span>{user.address.street}</span></p>
          <p><span className="address-name">Suite:</span> <span>{user.address.suite}</span></p>
          <p><span className="address-name">Zipcode:</span> <span>{user.address.zipcode}</span></p>
        </div>
      </div>

      <div>
        <h5 className="company-address-header">Company</h5>
        <div className="company">
          <p><span className="company-name">Name:</span> <span>{user.company.name}</span></p>
          <p><span className="company-name">Phrase:</span> <span>{user.company.catchPhrase}</span></p>
          <p><span className="company-name">Bs:</span> <span>{user.company.bs}</span></p> 
        </div>
      </div>
    </div>

    <div className="btnGroup">
      <Link onClick={backRouteHandler}>Back</Link>
      <Link to={`/posts/${id}`}>See post by this user</Link>
    </div>
    </React.Fragment>
  );
};

export default User;
