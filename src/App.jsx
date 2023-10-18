import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <ToastContainer />
     <RouterProvider router={router}/>
    </>
  )
}

export default App
