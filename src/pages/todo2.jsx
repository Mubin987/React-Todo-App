import {Link} from "react-router-dom"
import { useState , useContext } from "react"
import Todocontext2 from "../context/todo2/TodoContext2"
import '../App.css'
// import TodoProvider from "../context/todo/TodoProvider"
const Todo2 = () => {
    const [InputValue,setInputValue] = useState('')
    const {Todos2,setTodo2} = useContext(Todocontext2)
    const AddTodo = () => {
    //    var t = document.getElementById('todos')
    //    var node = document.createElement('div')
    //    node.textContent = InputValue
        setTodo2([...Todos2,InputValue])
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
        setTodo2((prevTodos) => {
          const updatedTodos = [...prevTodos];
          updatedTodos.pop();
          return updatedTodos;
        });
      };
    return(
        <div>
            <Link to='/' className="link-style">Goto Home</Link>
            <h1>Todo 2</h1>
            <input type="text" onChange={HandleInput} value={InputValue} />
            <button onClick={AddTodo}>Add Todo</button>
            <button onClick={RemoveTodo}>Remove Todo</button>
            {/* <button onClick={restore}>Restore list</button> */}
            <div id="todos">
                {Todos2.map((item) => {return <p>{item}</p>;}) }
            </div>
        </div>
    )
}

export default Todo2