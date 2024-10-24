import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispach, AppState } from './store/store'
import { IUser } from './Interface/IUser'
import { UserRequest,UserError, UserSuccess } from './slice/UserSlice'

export const User = () => {
    const user = useSelector<AppState>((y)=>y.user.data as IUser[])
    const dispach =useDispatch<AppDispach>()
    useEffect(()=>{
      dispach(UserRequest())
     fetch('https://jsonplaceholder.typicode.com/users').then((y)=>y.json()).then((res)=>{
      console.log(res)
      dispach(UserSuccess(res))
     }).catch((err)=>{
      dispach(UserError(err))
     })
    },[])
   console.log(user) 
  return (
    <div>User</div>
  )
}
