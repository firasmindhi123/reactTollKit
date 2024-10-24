import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit'
import { IAction } from './slice'
export interface IToDo
{
    userId: number
    id: number
    title: string
    completed: boolean
}


export interface TodoReducer{
    isLoading:boolean,
    data:IToDo[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    err:any
}
export const TodoFetch = createAsyncThunk(
    'todo/fetch',
    async()=>{
    const Response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const data= await  Response.json()
    return data
    }
)
const initialState:TodoReducer = {
  isLoading:false,
  data:[],
  err:{}

}


const TodoSlice = createSlice({
  name: 'Todo ',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(TodoFetch.pending,(state)=>{
        state.isLoading=true;
        state.err=null
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    builder.addCase(TodoFetch.rejected,(state,action:IAction<any>)=>{
        state.isLoading =false;
        state.err=action.payload

    })
    builder.addCase(TodoFetch.fulfilled,(state,action:IAction<IToDo[]>)=>{
        state.isLoading=false;
        state.err = null;
        state.data=action.payload??[]
    })

  }
});

export default TodoSlice.reducer