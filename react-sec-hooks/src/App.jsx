import { useState } from "react";
import "./App.css";

// function App() {
  // let isVisible = false;

  // const toggleMessage = () => {
  //  let isVisible = !isVisible;
  // }

  // const [visible, setIsvible] = useState(false);

  // return (
  //   <div>
  //     <div>
  //       <PostComponent />
  //     </div>
  //     <br />
  //     <div>
  //       <PostComponent />
  //     </div>
  //     < br />
  //     <div>
  //       <PostComponent />
  //     </div>
  //   </div>
  // );
// }

// function PostComponent() {
//   return (
//     <div
//       style={{
//         width: 100,
//         height: 100,
//         backgroundColor: "white",
//         color: "black",
//         borderRadius: 3,
//       }}
//     >
//       Hi there
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";
import { PostComponent } from "./Post";

function App() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.title}
    image={post.image}
    description={post.description}
  />)

  function addPost() {
    setPosts([...posts, {
      name: "harkirat",
      subtitle: "10000 followers",
      time: "2m ago",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "What to know how to win big? Check out how these folks won $6000 in bounties."
    }])
  }

  return (
    <div style={{background: "#dfe6e9", height: "100vh", }}>
      <button onClick={addPost}>Add post</button>
      <div style={{display: "flex", justifyContent: "center" }}>
        <div>
          {postComponents}
        </div>
      </div>
    </div>
  )
}

export default App

