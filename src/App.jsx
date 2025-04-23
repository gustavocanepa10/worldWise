import {BrowserRouter, Route, Routes} from "react-router"
import  {Product} from "./pages/Product";
import {Pricing} from "./pages/Pricing";
import {NotFound} from "./pages/NotFound";
import {AppLayout} from "./pages/AppLayout";
import  {ExampleContext}  from "./context/exampleContext";
import { useState } from "react";
import React from "react";
import {Homepage} from "./pages/Homepage";
import { Login } from "./pages/Login";

function App() {



  const [number, setNumber] = useState(0)
  return (



    <BrowserRouter>
    <ExampleContext.Provider value={{number, setNumber}}>
    <Routes>

      
      <Route path="/" element = {<Homepage />} />

      <Route path="products" element = {<Product/>} />

      <Route path="price" element = {<Pricing/>} />

      <Route  path="*" element = {<NotFound/>}   />

      <Route  path="/app" element = {<AppLayout/>}  />
      <Route path="/login" element = {<Login/>} />


      

      
     

      



    </Routes>
    </ExampleContext.Provider>

  </BrowserRouter>


  )
}

export default App;
