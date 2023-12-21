import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "./style.css";
function SingleitemCard({title,prix,imgurl,description}) {
  return (
    <div className='card'> 
            <div className='cardtext'> 

    <Card style={{ width: '18rem' }}>  
      <Card.Body>
        <Card.Title><h2>{title}</h2></Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          {prix}
        </Card.Text>
        <Button variant="primary">Acheté</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='cardimg'>
            <img src={imgurl} alt='jjk'/>
        </div>
    </div>
  );
}

export default SingleitemCard;