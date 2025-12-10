// import { useState } from 'react'
// import './App.css'

import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const count1 = 0;
//   count1 = count1 + 1;

//   function onClickHandler() {
//     console.log("hi");
//     count = count + 1;
//     setCount(count + 1);
//   }

//   return <div>
//     <button onClick={onClickHandler}>Counter {count}</button>
//   </div>
// }

// export default App



function App () {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Hit the gym regularly",
      done: false
  }
]);

function addTodo () {
  let newArray = [];
  for(let i=0; i < todos.length; i++) {
    newArray.push(todos[i]);
  }
  newArray.push({
    title: "Eat food",
    description: "eat food",
    done: true
  })
  setTodos(newArray)
}

  return <div>
    <button onClick={addTodo}>Add todo</button>
    {JSON.stringify(todos)}
  </div>
}

export default App;
