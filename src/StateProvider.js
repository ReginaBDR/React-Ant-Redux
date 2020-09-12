import React, { useState, createContext } from "react";

export const StateContext = createContext();

export const StateProvider = props => {
    const [data, setData] = useState([
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setData(data))
    ]);
  return (
     <StateContext.Provider value={[data, setData]} key={data.id} dataSource={data}>
        {props.children}
     </StateContext.Provider>
  );  
}