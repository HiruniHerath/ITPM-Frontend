import React , {useState} from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from '../components/nav'
import Modal from 'react-bootstrap/Modal';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


export default function Pet_profile() {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
            <Nav></Nav>
            <Row>
                <Col><h5 style={{ paddingLeft: "20px", paddingRight: "20px"  , paddingTop:"20px"}}>  <svg width="38" height="52" viewBox="0 0 55 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43.7086 17.5744C42.0928 17.8459 40.9602 30.2228 42.3897 32.047C43.8191 33.8714 47.4031 37.1325 52.4605 34.5784C57.5172 32.0244 52.3941 16.1148 43.7086 17.5744Z" fill="black" />
                    <path d="M11.3015 17.5548C12.9174 17.8263 14.05 30.2032 12.6207 32.0274C11.1915 33.8518 7.60727 37.1132 2.55013 34.5589C-2.50712 32.0051 2.61613 16.0955 11.3015 17.5548Z" fill="black" />
                    <path d="M30.5838 4.75534C28.968 5.02685 27.8353 17.4035 29.2644 19.2279C30.6935 21.0522 34.1021 23.1196 39.1592 20.5657C44.2163 18.0118 39.2692 3.29591 30.5838 4.75534Z" fill="black" />
                    <path d="M24.7421 4.73579C26.3579 5.00731 27.4905 17.3841 26.0614 19.2085C24.6321 21.0326 21.2238 23.1002 16.1666 20.5463C11.1094 17.9924 16.0566 3.27648 24.7421 4.73579Z" fill="black" />
                    <path d="M27.5 23.5483C31.35 23.5605 36.5424 28.2407 38.9296 31.2436C41.3168 34.2465 46.0838 39.5965 44.9465 47.7959C44.44 51.4478 40.0631 54.5153 37.5834 54.5153C35.1037 54.5153 29.5639 53.1806 27.8251 53.1806C26.0863 53.1806 20.0674 54.9526 18.0062 54.4463C15.9449 53.94 11.3323 52.4311 10.3779 45.9018C9.4234 39.3725 14.4825 33.9792 17.3298 30.5521C22.55 24.2685 27.5 23.5483 27.5 23.5483Z" fill="black" />
                </svg>Pet Profiles</h5>
                  </Col>
                <Col style={{paddingTop:"40px" }}>
                <Row style={{paddingLeft: "300px"}}>
                    
                    <Col><Form.Control  style={{width:"200px"}} type="email" placeholder="search" /></Col>
                     
                    <Col><Button variant="outline-dark" href="/createpostWild">Create a Pet profiles</Button></Col>
                
                
                
                </Row>
                
                
                </Col>

            </Row>
<br></br>
            <Row xs={1} md={4} className="g-4" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/1/lost-animals-series-nr2-zoltan-toth.jpg" />
            <Card.Body>
              
           <h5>Pet details--</h5>
           <br></br>
              <Row><Col><h6>Profile</h6>
       
                       
                        <div>Breed : labrador</div>
                        <div>Name : labrador</div>
                    
                         
              
              
              
              </Col>
              <Col><h6>Vaccination</h6>
                     
                      
                        <div> Date : Test</div>
                        <div> Time : Test</div>
                        <div>Vetno :071XXXXX</div>
                       </Col>
             </Row>

             <Row><Col><Button variant="outline-dark"  >Delete</Button></Col>
                        <Col>   <Button variant="outline-dark" onClick={handleShow} >Edit Post</Button></Col></Row>
           
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Post</Modal.Title>
            </Modal.Header>
            <Modal.Body><Form >
              <span className="error-message" style={{ color: "blue" }}></span>
              <br />
              <div >
                <Row>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >last Location : </Form.Label>
                    <Form.Control type="text"
                      placeholder=" Enter last Location .." />
                  </Form.Group>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label >Date : </Form.Label>
                      <Form.Control type="text"
                      placeholder=" Enter Date .." />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label >Time  : </Form.Label>
                      <Form.Control type="text"
                        placeholder=" Enter Time .." />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Contact details : </Form.Label>
                    <Form.Control type="text"
                      placeholder=" Enter Contact details .." />
                  </Form.Group>
                </Row>
              </div>
            </Form></Modal.Body>
            <Modal.Footer>
              <div style={{ paddingLeft: "40%" }}>
                <Button type="submit" variant="outline-dark" onClick={handleClose} style={{ width: "120px" }}> Save </Button>{' '} {' '}<Button variant="outline-dark" style={{ width: "120px" }} > Clear </Button>
              </div>
            </Modal.Footer>
          </Modal>

            <br></br>
            <div style={{paddingTop:"120px"}}></div>
            <div style={{ height: "60px", backgroundColor: "#003A1B"  }}></div>


        </div>
    );
};
