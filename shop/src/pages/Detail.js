/* eslint-disable */ //warning 없애기
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import styled from "styled-components";

function Detail(props) {

  let [alertYN, setAlertYN] = useState(true); 
  let [count, setCount] = useState(0);
  
  let {id} = useParams();
  let shoesOne = props.shoes.find((val) => val.id == id);

  useEffect(()=>{ //mount, update시 코드 실행해주는 useEffect (근데 useEffect에 굳이 안넣어도 똑같음)
    //다른점. useEffect 안에 있는 코드는 html 렌더링 후에 동작함
    //side Effect 코드(함수의 핵심기능과 상관없는 부가기능) 보관함
    let timer = setTimeout(() => { setAlertYN(false); }, 2000); 

    return () => { //useEffect 동작 전에 실행됨
      clearTimeout(timer);
      console.log(1);
      //clean up function은 mount시 실행 안됨,
      //unmount시 실행됨
    }
  }, [count]); //[]를 넣으면 []안에 state가 변할때마다 실행됨.(mount될때, 혹은 []안 state가 update될때)
              // []안에 아무것도 없으면 mount될때만 실행됨.

  let [inpVal, setInpVal] = useState("");
  useEffect(()=>{
    setInpVal("");
  }, [inpVal]);
  return (
    <div className="container">
      {
        alertYN == true ? 
          <div className="alert alert-warning">
          2초이내 구매시 할인
          </div> 
          : null
      }
      {count}
      <button onClick={()=>{ setCount(count+1)}}>버튼</button>
      <div className="row">
        <div className="col-md-6">
          <img
            src={"https://codingapple1.github.io/shop/shoes" + (shoesOne.id + 1) + ".jpg"}
            alt="detailImg"
            width="100%"
          />
        </div>
        <div style={{textAlign:"center"}}>
          <input type="tel" style={{width:"100px", textAlign:"center"}} onChange={(e)=>{
            var inpVal = e.target.value;
            var replaceNotInt = /[^0-9]/gi; // 숫자가 아닌 정규식
            console.log(this);
            console.log()
            if (inpVal.match(replaceNotInt)) {
              alert("숫자만 입력 가능합니다");
              // val.replace(replaceNotInt, "");
              setInpVal("");
              e.target.value = "";
            }
          }}></input>
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoesOne.title}</h4>
          <p>{shoesOne.content}</p>
          <p>{shoesOne.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
