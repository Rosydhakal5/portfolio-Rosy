import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../assets/image/img.jpeg';
import { Image } from 'react-bootstrap';

const Home = () => {
  return (
    <>
    <Container className='mt-5 d-flex align-items-center'>
      <Row >
        <Col>
        <h1> Hi, I'm Rosy👋</h1>
        <h4> Frontend web developer</h4>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Unde illum voluptate, velit veniam impedit natus ratione similique quia ad cum quis, 
            aliquid ex magnam pariatur quibusdam et optio earum distinctio.</p>
        </Col>
        <Col xs={4} sm={4}>
        <Image src={img} alt= "Rosy's Picture" width={200} height={200}roundedCircle />
        </Col>
      </Row>
    </Container>
    
    </>
    
  )
}

export default Home