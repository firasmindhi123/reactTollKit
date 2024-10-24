import { configureStore } from "@reduxjs/toolkit";
import co from '../slice/slice';
import User from '../slice/UserSlice'
import Todo from '../slice/TodoSlice'

const store =configureStore({
    reducer:{
        counter: co,
        user:User,
        todo:Todo
    }
})
export type AppState =ReturnType<typeof store.getState>
export type AppDispach =typeof store.dispatch
export default store