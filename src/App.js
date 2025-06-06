/* eslint-disable no-undef */
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import ChatInterface from "./ChatPage/ChatInterface"
import ChatInterface2 from './ChatPage/ChatInterface2.jsx';
import ChatInterface3 from './ChatPage/ChatInterface3.jsx';
import ChatInterface4 from './ChatPage/ChatInterface4.jsx';
import  HomePage  from './Components/Home-Page/components/HomePage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/ChatInterface2',
      element: <ChatInterface2 />,
    },
    {
      path: '/ChatInterface',
      element: <ChatInterface />,
    },
    {
      path: '/mesothelioma-cb3',
      element: <ChatInterface3 />,
    },
    {
      path: '/mesothelioma-cb4',
      element: <ChatInterface4 />,
    }
 
    
  ]);


  return (
    <RouterProvider router={router} />
  );
}

export default App;
