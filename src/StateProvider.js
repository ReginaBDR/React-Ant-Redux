import React, { useState, createContext } from "react";

export const StateContext = createContext();

export const StateProvider = props => {
    const [info, setInfo] = useState([
        {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }
    ]);
  return (
     <StateContext.Provider value={[info, setInfo]} /* columns={columns} */ dataSource={info}>
        {props.children}
     </StateContext.Provider>
  );  
}