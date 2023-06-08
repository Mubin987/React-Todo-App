import { useState } from 'react'
import './App.css'
import Todo from './pages/todo1'
import Todo2 from './pages/todo2'
import Home from './pages/home'
import Footer from './components/footer'
import TodoProvider from './context/todo/TodoProvider'
import TodoProvider2 from './context/todo2/TodoProvider2'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />,
  },
  {
    path:"/todo1",
    element:<Todo />,
  }
  ,
  {
    path:"/todo2",
    element:<Todo2 />,
  }
])

function App() {

  return (
    <>
      <TodoProvider>
      <TodoProvider2>
      <RouterProvider router={router} />
      <Footer />
      </TodoProvider2>
      </TodoProvider>
    </>
  )
}

export default App
