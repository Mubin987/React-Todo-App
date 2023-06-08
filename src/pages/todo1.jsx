import {Link} from "react-router-dom"
import { useState , useContext } from "react"
import Todocontext from "../context/todo/TodoContext"
import '../App.css'
// import TodoProvider from "../context/todo/TodoProvider"
const Todo = () => {
    const [InputValue,setInputValue] = useState('')
    const {Todos,setTodo} = useContext(Todocontext)
    const AddTodo = () => {
    //    var t = document.getElementById('todos')
    //    var node = document.createElement('div')
    //    node.textContent = InputValue
        setTodo([...Todos,InputValue])
    //    t.appendChild(node)
        setInputValue('')
    }
    const HandleInput = (getval) => {
        setInputValue(getval.target.value)
    }
    // const restore = () => {
    //     return (Todos.map((item) => {
    //       return <p key={item}>{item}</p>;
    //     }))
    // }
    const RemoveTodo = () => {
        setTodo((prevTodos) => {
          const updatedTodos = [...prevTodos];
          updatedTodos.pop();
          return updatedTodos;
        });
      };
    return(
        <div>
            <Link to='/' className="link-style">Goto Home</Link>
            <h1>Todo 1</h1>
            <input type="text" onChange={HandleInput} value={InputValue} />
            <button onClick={AddTodo}>Add Todo</button>
            <button onClick={RemoveTodo}>Remove Todo</button>
            {/* <button onClick={restore}>Restore list</button> */}
            <div id="todos">
                {Todos.map((item) => {return <p>{item}</p>;}) }
            </div>
        </div>
    )
}

export default Todo