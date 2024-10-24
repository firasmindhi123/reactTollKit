import { createSlice } from '@reduxjs/toolkit'
export interface Icounter{
    counter:number
}
export interface IAction<t>{
    type:string
    payload?:t
}
   
const initialState:Icounter = {
    counter:0
}

const slice = createSlice({
  name:"counter",
  initialState,
  reducers: {
    increaseCounter: (state:Icounter,action:IAction)=>{
        state.counter=state.counter+1
    },
    decreaseCounter: (state:Icounter,action:IAction)=>{
        state.counter=state.counter-1
    }

  }
});

export const {increaseCounter,decreaseCounter} = slice.actions

export default slice.reducer