import React, { Component } from "react";
import { axiosInstance } from "../../Axios";
import CardComponent from "../../Components/Card/Card";
import './Users.css';
import Spinner from "../../Components/Spinner/Spinner";
import ErrorAlert from '../../Components/ErrorAlert/ErrorAlert';

class Users extends Component {
  state = {
    users: [
      {
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
      },
    ],
    isLoading: false,
  };

  getUserData = async () => {
    try {
      const userData = await axiosInstance.get("/users");
        this.setState({
          users: userData.data,
          isLoading: false,
        });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getUserData();
  }

  render() {
    const { users, isLoading } = this.state;

    const displayUsers = ( isLoading 
      ? <Spinner/>
      : users.map(({ name, id, username, phone }) => {
        return (
          <CardComponent
            key={id}
            name={name}
            username={username}
            phone={phone}
            id={id}
          />
        );
      }));

    return (
      <div className="Users">
        {displayUsers}
      </div>
    );
  }
}

export default Users;
