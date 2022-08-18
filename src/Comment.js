import React from 'react'
import {Link} from "react-router-dom";
import { useState ,useEffect} from "react";
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Spinner from './Spinner';
import axios from 'axios';
function Comment(props) {
    const [comment, setcomment] = useState([]);
    const [loading, setloading] = useState(false)
    // const {id} = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async ()=>{
        // let url1 =;
        // let data = await fetch(url1);
        // let parsedata = await data.json();
        // console.log("new arrray", parsedata);
        // setloading(true);
        // setcomment(parsedata);

 axios.get( `https://jsonplaceholder.typicode.com/posts/${id}/comments`)
 .then((res)=>{
   console.log("Comment axios run ",res.data);
   setcomment(res.data)
   setloading(true)
 })
 }

    


const dleleteitem=(id)=>{
  // console.log(i)
  
  axios.delete( `https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((comment)=>{
    console.log(comment)
    
  })
  // console.log("index of comment",i)
  // const filterarray=comment.filter((e1,index)=>index!==i)
  // console.log("delete comment",filterarray)
  // setcomment(filterarray)
}

  return (
      <>
  <Navbar/>
  {loading?loading:<Spinner/>}
    {comment.map((item) => {
        return (
          <>
            <div className="container">
              <div className="card text-center">
                <div className="card-header">Comments</div>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-email">{item.email}</p>
                  <p className="card-text">{item.body}</p>
                </div>
                <div className="d-flex justify-content-center">
               <button type="button" class="btn btn-primary mx-4"  onClick={dleleteitem}>Delete Comment </button>
                </div>
                <div className="card-footer text-muted">2 days ago</div>
              </div>
            </div>
          </>
        );
      })} 
  </>
  )
}

export default Comment