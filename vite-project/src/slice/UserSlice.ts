import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../Interface/IUser';
import { IAction } from './slice';
export interface IUserReducerSlice{
    data:IUser[],
    isLoading:boolean,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    err:any

}

const initialState:IUserReducerSlice = {
   data:[],
   err:{},
   isLoading:false
}

const UserSlice = createSlice({
  name: "User",

  initialState,
  reducers: {
   UserRequest:(state:IUserReducerSlice)=>{

    state.isLoading=true
   },
   UserSuccess:(state:IUserReducerSlice,action:IAction<IUser[]>)=>{
     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
     state.isLoading =false,
     state.data =action.payload??[]
   },
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   UserError:(state:IUserReducerSlice,action:IAction<any>)=>{
    state.isLoading=false
    state.err=action.payload
   }
  }
});

export const {UserRequest,UserSuccess,UserError} = UserSlice.actions

export default UserSlice.reducer