import React from 'react';
import './Card.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const CardComponent = ({name,username,phone}) => {
    return (
        <div className="Card">
      <Card id="card">
        <CardBody>
          <CardTitle tag="h5"><i className="fas fa-user icon"></i>{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted subtitle">@{username}</CardSubtitle>
          <CardText><i className="fas fa-phone-alt icon"></i>{phone}</CardText>
          <Button color="info" id="btn">Details</Button>
        </CardBody>
      </Card>
    </div>
    )
}

export default CardComponent;
