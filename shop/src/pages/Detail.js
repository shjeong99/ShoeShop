/* eslint-disable */ //warning 없애기
import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
  background : ${ props => props.bg };
  color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
  padding : 10px;
`
let Box = styled.div`
  background : grey;
  padding : 20px;
`
// 기존 스타일 복사
let NewBtn = styled.button(YellowBtn) `
`

function Detail(props) {
  
  let {id} = useParams();
  console.log(id);

  let shoesOne = props.shoes.find((val) => val.id == id);
  console.log(shoesOne);

  return (
    <div className="container">
      <Box>
      <YellowBtn bg="blue">버튼</YellowBtn>
      <YellowBtn bg="orange">버튼</YellowBtn>
      </Box>
      <div className="row">
        <div className="col-md-6">
          <img
            src={"https://codingapple1.github.io/shop/shoes" + (shoesOne.id + 1) + ".jpg"}
            alt="detailImg"
            width="100%"
          />
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
