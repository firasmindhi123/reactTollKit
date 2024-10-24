import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from './store/store'
import { IToDo, TodoFetch } from './slice/TodoSlice'

export const Todo = () => {
    const todo =useSelector<AppState>(y=>y.todo.data)as IToDo[]
     const d=useDispatch()
     useEffect(()=>{
        d(TodoFetch())
    },[])
    console.log(todo[12])
  return (
    <div>{todo.map((v)=>{
      return(<div>{v.title}</div>)
    })}</div>
  )
}

