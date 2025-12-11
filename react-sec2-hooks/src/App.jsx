import { useEffect, useState } from "react";
import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     setCount(count + 1);
//   }

//   setInterval(increaseCount, 1000);

//   return <div>
//     <div>Count: {count} </div>
//   </div>
// }

// function App() {
//   const [count, setCount] = useState(1);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount(prev => prev + 1);
//     }, 1000);

//     return () => clearInterval(id);   // cleanup logic.
//   }, [])  // this effect will run on mount, because the array is empty

//   function increaseCount() {
//     setCount(currentValue => currentValue + 1);
//   }

//   function decreaseCount () {
//     setCount(currentValue => currentValue - 1);
//   }

//   useEffect(() => {
//     console.log("the count has been updated " + count);
//   }, [count])  // this means any time count changes, run this useEffect

//   return <div>
//     {count}
//   </div>
// }

// export default App



// function App() {
//   const [currentTab, setCurrentTab] = useState("feed");

//   useEffect(() => {
//     console.log("send req. to backend to get data for tab " + currentTab)
//   }, [currentTab])

//   return (
//     <div>
//       <button
//         onClick={function () {
//           setCurrentTab("feed");
//         }}
//         style={{ color: currentTab == "feed" ? "red" : "black" }}
//       >
//         Feed
//       </button>

//       <button
//         onClick={() => setCurrentTab("notification")}
//         style={{ color: currentTab == "notification" ? "green" : "black" }}
//       >
//         Notifications
//       </button>

//       <button
//         onClick={() => setCurrentTab("messages")}
//         style={{ color: currentTab == "messages" ? "pink" : "black" }}
//       >
//         messages
//       </button>

//       <button
//         onClick={() => setCurrentTab("jobs")}
//         style={{ color: currentTab == "jobs" ? "violet" : "black" }}
//       >
//         Jobs
//       </button>
//     </div>
//   );
// }

// export default App;





function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log("send req. to backend to get data for Todo " + currentTab);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
    .then(async res => {
      const json = await res.json();
      setTabData(json);
      setLoading(false)
    })
  }, [currentTab])

  return (
    <div>

      <button
        onClick={function () {
          setCurrentTab(1);
        }}
        style={{ color: currentTab == 1 ? "red" : "black" }}
      >
        Todo #1
      </button>

      <button
        onClick={() => setCurrentTab(2)}
        style={{ color: currentTab == 2 ? "green" : "black" }}
      >
        Todo #2
      </button>

      <button
        onClick={() => setCurrentTab(3)}
        style={{ color: currentTab == 3 ? "pink" : "black" }}
      >
        Todo #3
      </button>

      <button
        onClick={() => setCurrentTab(4)}
        style={{ color: currentTab == 4 ? "violet" : "black" }}
      >
        Todo #4
      </button>

      {loading ? "Loading" : tabData.title}
    </div>
  );
}

export default App;
