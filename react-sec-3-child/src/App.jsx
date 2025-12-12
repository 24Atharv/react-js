import "./App.css";

function App() {
  const todos = [
    {
      title: "Go to gym",
      done: true,
    },
    {
      title: "Eat food",
      done: false,
    },
  ];

  // const todosComponents = todos.map((todo) => (
  //   <>
  //     <Todo key={1} title={todo.title} done={todo.done}></Todo>
  //   </>
  // ));

  // return <div>
  //   {todosComponents}
  // </div>;

  return <div>
    {[
      <Todo key={1} title={"GO to gym"} done={false}/>,
      <Todo key={2} title={"Eat food"} done={false}/>
    ]}
  </div>
}
function Todo({ title, done }) {
  return (
    <div>
      {title} - {done ? "Done" : "Not done"}
    </div>
  );
}

export default App;
