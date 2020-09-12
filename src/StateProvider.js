import React, { useState, useEffect, createContext } from "react";

export const StateContext = createContext();

export const StateProvider = props => {
    const [data, setData] = useState([])
      
    useEffect(() => {
      getData()
    }, [])
      
    const getData = async () => {
      await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data))
    }
  
  return (
     <StateContext.Provider value={[data, setData]} dataSource={data}>
        {props.children}
     </StateContext.Provider>
  );  
}