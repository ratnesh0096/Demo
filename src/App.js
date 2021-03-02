import React, { useState } from "react";
import Tweet from "./Tweet";
function App(){
  const [count, setCount]=useState(0);
  const [isRed, setRed]=useState(false);
  const [users, setUsers]=useState([
    {name: "Jhon", message:"Khalisee is my Aunt"},
    {name: "Khalisee", message:"I love to get fucked"},
    {name: "Khal Drogo", message:"I got a big dick"}
  ]);
  const increment=()=>{
    setCount(count+1);
    setRed(!isRed);
  }
  return (
    <div className="app">
      {/* <h1 className={isRed ? "red" : ""}>Magic Colour</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */}
      {
        users.map(user=>(
          <Tweet name={user.name} message={user.message} />
        ))
      }
    </div>
  );
}
export default App;