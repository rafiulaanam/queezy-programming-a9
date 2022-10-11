import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Topic.css'
const Topic = ({topic}) => {
    const {name,logo,id} =topic;
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img className='img' variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Link to={`/quiz/${id}`}><Button variant="primary" >Start Quiz</Button></Link>
      </Card.Body>
    </Card>
    );
};

export default Topic;