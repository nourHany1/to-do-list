import Header from "./components/todo/Header";
import TodosList from "./view/TodoList";
import "./assets/css/index.css"

function App() {
  return (
    <div className="App">
      <Header/>
      <TodosList/>
    </div>
  );
}

export default App;
