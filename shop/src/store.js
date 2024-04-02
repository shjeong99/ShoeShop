import { configureStore, createSlice } from '@reduxjs/toolkit'


//state 하나를 slice라고 부름
let user = createSlice({
    name : 'user', //이름
    initialState: { name : 'kim', age : 20 } , //값
    reducers : {
      changeName(state){
        return { name : 'park', age : 20 } 
      },
      chan2(){

      }
    }
})

export let {changeName, chan2} = user.actions;

let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
})

let cartData = createSlice({
    name : 'cartData',
    initialState : [
      {id : 0, name : 'White and Black', count : 2},
      {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
      changeCnt(state){
        return state.conunt++;
      }
    }
})

export let {changeCnt} = cartData.actions;

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cartData : cartData.reducer
   }
}) 