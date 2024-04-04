import { createSlice } from '@reduxjs/toolkit'


//state 하나를 slice라고 부름
let user = createSlice({
    name : 'user', //이름
    initialState: { name : 'kim', age : 20 } , //값
    reducers : {
      changeName(state){
        state.name = 'park';
      },
      changeAge(state, actions){
        state.age += actions.payload;
      }
    }
})
export let {changeName, changeAge} = user.actions;
export default user;