/* eslint-disable */ //warning 없애기
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import LogoImg from './img/bg.png'
import { useState } from 'react';
import data from './data.js';

function App() {

  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{ backgroundImage : 'url(' + LogoImg + ')'}}></div>

      <div className="container">
        <div className="row">
          {/* <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + "/shoes1.jpg"} width="80%"/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div> */}
          {
            shoes.map(function(val, idx){
              return(
                <ShoesList shoes={shoes[idx]} img={"https://codingapple1.github.io/shop/shoes" + (idx + 1) + ".jpg"}/>
              );
            })
          }
        </div>
      </div>

    </div>
  );
}

function ShoesList(props){
  return(
    <div className="col-md-4">
      <img src={props.img} width="80%"/>
        <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}원</p>
    </div>
  );
}

export default App;
