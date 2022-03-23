import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from "./About";
import Select from "./Select"
import Comment from "./Comment";
import React from 'react'

function App() {

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Select />} />
      <Route path="/posts/:id" element={<About  />} />
      <Route path="/posts/:id/comment" element={<Comment/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;