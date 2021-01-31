import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const CardComponent = ({name,username,phone,id}) => {
    return (
        <div className="Card">
      <Card id="card">
        <CardBody>
          <CardTitle tag="h5"><i className="fas fa-user icon"></i>{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted subtitle">@{username}</CardSubtitle>
          <CardText><i className="fas fa-phone-alt icon"></i>{phone}</CardText>
          <Link to={`/users/${id}`}><Button color="info" id="btn">Details</Button></Link>
        </CardBody>
      </Card>
    </div>
    )
}

export default CardComponent;
