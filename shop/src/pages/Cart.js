import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";

function Cart(props){

    let state = useSelector((state)=> state)
    let cartData = useSelector((state)=> state.cartData); //Redux store 가져와줌
    console.log(state);
    console.log(cartData);

    let dispatch = useDispatch();//store.js로 요청보내주는 함수
   
    return(
        <div>
            {state.user.name}의 장바구니
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartData.map((v ,idx) =>
                            <tr>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.count}</td>
                                <td><button onClick={() => {
                                    dispatch(changeName())
                                }}>+</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table> 
        </div> 
    );
}

export default Cart;