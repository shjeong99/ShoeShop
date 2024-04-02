/* eslint-disable */ //warning 없애기
import "./App.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import LogoImg from "./img/bg.png";
import { createContext, useEffect, useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail.js";
import Event from "./pages/Event.js";
import axios from "axios";
import Cart from "./pages/Cart.js";

let Context1 = createContext();
export {Context1};

function App() {
  let [shoes, setShoes] = useState(data);
  let [stock, setStock] = useState([10, 11, 12]); //재고

  let navigate = useNavigate();
  let [moreCnt, setMoreCnt] = useState(0); //더보기 버튼 클릭 횟수

  useEffect(()=>{
  }, [shoes])

  return (
    <div className="App"> 
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
            {/* <Link to="/" className="navTab">
              메인
            </Link>
            <Link to="/detail" className="navTab">
              상세페이지
            </Link> */}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + LogoImg + ")" }}
              ></div>
              <div className="container">
                <div className="row">
                  {/* <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + "/shoes1.jpg"} width="80%"/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div> */}
                  {shoes ? shoes.map(function (val, idx) {
                    return (
                      <Card
                        shoes={shoes[idx]}
                        img={
                          "https://codingapple1.github.io/shop/shoes" +
                          (idx + 1) +
                          ".jpg"
                        }
                        key={idx}
                      />
                    );
                  }) : null}
                </div>
                <div style={{background : '#808080a1', display:'none'}} id="loadingBar">로딩중입니다.. </div>
                <button onClick={(e)=>{
                  document.getElementById('loadingBar').style.display = '';
                  if(moreCnt >= 2){
                    document.getElementById('loadingBar').style.display = 'none';
                    e.target.style.display ='none';
                  }else{
                    let url = '';
                    if(moreCnt == 0){ //0
                      url = 'https://codingapple1.github.io/shop/data2.json';
                    }else{ //1
                      url = 'https://codingapple1.github.io/shop/data3.json';
                    }
                    axios.get(url)
                    .then((res)=>{ //성공
                      document.getElementById('loadingBar').style.display = 'none';
                      let data = res.data;
                      let tempShoes = [...shoes];
                      let newArr = tempShoes.concat(data);
                      setShoes(newArr);
                      moreCnt++;
                      setMoreCnt(moreCnt);
                    })
                    .catch((res)=>{ //실패
                      document.getElementById('loadingBar').style.display = 'none';
                    })
                  }
                  }}>더보기</button>
              </div>
            </>
          }
        />
        {/* url 파라미터. 여러개 가능 */}
        <Route path="/detail/:id" element={
          <Context1.Provider value={{ stock, shoes }}>
            <Detail shoes={shoes}/>
          </Context1.Provider>
        } />

        <Route path="/cart" element={ <Cart/> } /> 

        {/* nested routes */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>

         {/* nested routes */}
         <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<dive>생일기념 쿠폰받기</dive>}></Route>
         </Route>

        <Route path="*" element={<div>없는 페이지</div>} />
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card(props) {
  let navigate = useNavigate();
  return (
    <div className="col-md-4">
      <img src={props.img} width="80%" onClick={() => { var num= props.shoes.id; navigate("/detail/" + num) }}/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}원</p>
    </div>
  );
}

export default App;
