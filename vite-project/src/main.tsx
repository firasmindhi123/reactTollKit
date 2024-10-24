import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import { User } from './User.tsx'
import { Todo } from './Todo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Provider store={store}>
     <Todo/>
     
   </Provider>
  </StrictMode>,
)
