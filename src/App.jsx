import React,{useState,useEffect} from 'react';
import axios from 'axios';

import './App.css';

function App(){
  console.log("function starts...")
  const[genAdvice,setGenAdvice] = useState('')
const [id,setId] = useState(1)

  const fetchAdvice = () => {
    setId(id+1)
         axios.get(`https://api.adviceslip.com/advice/${id}`)
          .then((response) => {
             const { advice } = response.data.slip;
             setGenAdvice({ advice });
           })
         .catch((error) => {
           console.log(error);
          });
       }
  
  useEffect(()=>{

fetchAdvice()
  },[])
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{genAdvice.advice}</h1>
          <button className="button" onClick={fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  

}
export default App;