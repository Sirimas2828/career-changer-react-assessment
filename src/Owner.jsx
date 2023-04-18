import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Navbar';
import {useState} from 'react'
import { useEffect } from "react"
import Layout from './Layout'
import './style.css'


function Owner() {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1>Biw No.43 From Group J</h1>
          <img width= '470px' src="https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_960_720.jpg" />
          <h3>Short Biography: </h3>
          <p>
            Hello, I'm learner from Generation. Nice to meet you. I am a flower in this picture and React is a cat which try to eat me alive. LOL XD
          </p>
        </div>
      </>
    );
  }
  
  export default Owner;