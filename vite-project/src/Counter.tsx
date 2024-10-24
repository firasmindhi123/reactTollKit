import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispach, AppState } from './store/store'
import { decreaseCounter, increaseCounter } from './slice/slice'


export const Counter = () => {
    const dispach =useDispatch<AppDispach>()
    const counter = useSelector<AppState>((d)=>d.counter.counter) as number
    const inc=()=>{
        dispach(increaseCounter())
    }
    const dec=()=>{
        dispach(decreaseCounter())
    }
    
  return (
    <div>
        {counter}
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        </div>
  )
}




