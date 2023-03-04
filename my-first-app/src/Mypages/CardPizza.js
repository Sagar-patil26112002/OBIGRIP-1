import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import store from '../Connect/store';


export const CardPizza = (value) => {
    const {data} = value
    const [obj1,fnObj]=React.useState({});
    console.log(obj1)

    let name=obj1
        store.dispatch({
            type:'',
            name
            
        })
    

  return (
    <div>
         <Container className='containercss'>
         <Row className='rowcss'>
            {data.map((val,i)=>{
                const {title,image,price,rating} = val;
                return  <Col>
                    <Card className='classcss' style={{ width: '18rem'}}>
                        <Card.Img className='imagesize' variant="top" src={image}/>
                        <Card.Body>
                            <Card.Title >{title}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Most Buy item</ListGroup.Item>
                            <ListGroup.Item>Price: {price}</ListGroup.Item>
                            <ListGroup.Item>Rating: {rating}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body className='buycss'>
                            <Card.Link onClick={()=>{fnObj(val)}} className='buynamecss' href="#/buy">BUY</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            })}
            </Row>
        </Container>
    </div>
  )
}