


import { useEffect, useState } from "react";
import Navbar from "./Navbar";
// import Comment from `./Comment`;
import { Link  , useParams} from "react-router-dom";
import Spinner from "./Spinner";
function About() {
  const {id} = useParams();
  const [newarray, setnewarray] = useState([])
  const [loading, setloading] = useState(false)
  useEffect(async ()=>{
    let url =`https://jsonplaceholder.typicode.com/posts/${id}`
    let data= await fetch(url);
    let parseddata= await data.json();
    const newdata=[parseddata];
    // console.log("dvfdvdsvdv",newdata);
    setnewarray(newdata)
    setloading(true);
    console.log(parseddata)
  },[])
  return (
    <>      
    <Navbar />
            {loading?loading:<Spinner/>}
            {newarray.map((item)=>{
              return(
                <>
                <div className="container ">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text"> {item.body}</p>
              </div>
            </div>
            <Link type="button" to={`/posts/${id}/comment`}> See All Comment </Link>
             </div>
                </>
              )
            })}
            
    </>
  );
}

export default About;
