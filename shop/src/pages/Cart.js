import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeAge } from "../store/userSlice";
import { changeCnt, deleteList } from "../store.js"

function Cart(props){

    let state = useSelector((state)=> state)
    let cartData = useSelector((state)=> state.cartData); //Redux store 가져와줌

    let dispatch = useDispatch();//store.js로 요청보내주는 함수
   
    return(
        <div>
            {state.user.name} {state.user.age}의 장바구니
            <button onClick={()=>{
                 dispatch(changeAge(100));
            }}>버튼</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartData.map((v ,idx) =>
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.count}</td>
                                <td><button onClick={() => {
                                    dispatch(changeCnt(v.id))
                                }}>+</button></td>
                                <td><button onClick={()=>{
                                    dispatch(deleteList(v.id))
                                }}>-</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table> 
        </div> 
    );
}

export default Cart;