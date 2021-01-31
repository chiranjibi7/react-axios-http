import React, { Component } from "react";
import { axiosInstance } from "../../Axios";
import CardComponent from "../../Components/Card/Card";

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
  };

  getUserData = async () => {
    try {
      const userData = await axiosInstance.get("/users");
      this.setState({
        users: userData.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getUserData();
  }

  render() {
    const { users } = this.state;
    return (
      <div style={{display: 'flex', flexWrap:"wrap",justifyContent:"space-evenly",margin: '20px 0px'}}>
        {users.map(({ name, id, username, phone }) => {
          return (
            <CardComponent
              key={id}
              name={name}
              username={username}
              phone={phone}
            />
          );
        })}
      </div>
    );
  }
}

export default Users;
