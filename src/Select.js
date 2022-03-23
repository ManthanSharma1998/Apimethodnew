import { useState ,useEffect} from "react";
import {Link}  from "react-router-dom";
import Navbar from './Navbar';
import Spinner from "./Spinner";
import axios from "axios"

function Select(props) {
const [Articles,setArticle]=useState([]);
const [loading, setloading] = useState(false)

useEffect( () =>  {
  fetchdataposts();
}, []);

// ====================================================Without Axios=============================================

// const fetchdataposts = ()=>{
//   let url="https://jsonplaceholder.typicode.com/posts";
//  let parseddata=axios.get(url)
//   setloading(true);
//   setArticle(parseddata) 
// }
const fetchdataposts = ()=>{
  axios.get("https://jsonplaceholder.typicode.com/posts")  
 .then((res)=>{
 console.log(res.data,"axios run=>");
 setArticle(res.data);
 setloading(true);
 })}
// const deletedep=(id)=>{
//   console.log("depratement id",id)
//   fetch((`https://jsonplaceholder.typicode.com/posts/${id}`), {
//   method: 'DELETE',
// }).then((result)=>{
//   result.json().then((resp)=>{
//     console.log({resp})
//     // fetchdataposts
//     // setArticle(resp)
//   })
//   })
// }
  // if(window.confirm("Are you Sure ?"))
  // {
  // fetch(`https://jsonplaceholder.typicode.com/posts`+depid,{
  // method:`DELETE`,
  // })}

  return (
      <>
    <Navbar/>
    {loading?loading:<Spinner/>}
    <div className="container">
      <div className="row my-2"> 
    {Articles.map((element)=>{
      return(
        <>   <div className="col-md-3"  >
              <div className="card">
                <strong>Id Numer---{element.id}</strong>
                 <div className="card-body">
                   <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">
             {element.body}
            </p>
            {/* <button type="button"onClick={()=>deletedep(element.id)} class="btn btn-primary">Primary</button> */}
            <Link  to={`posts/${element.id}`} className="btn btn-primary">
              Detailed
            </Link>
          </div>
        </div>
      </div>
      
     
        </>
      )
    })}
    </div> 
      </div>
    


      </>
  )
}

export default Select