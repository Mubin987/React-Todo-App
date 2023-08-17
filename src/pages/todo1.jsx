import {Link} from "react-router-dom"
import { useState , useContext } from "react"
import Todocontext from "../context/todo/TodoContext"
import '../App.css'
import { BiEdit } from "react-icons/bi";
// import TodoProvider from "../context/todo/TodoProvider"
const Todo = () => {
    const [InputValue,setInputValue] = useState('')
    const [togglebtn,settogglebtn] = useState(false)
    const [indexlocal,setindexlocal] = useState(-1)
    const {Todos,setTodo} = useContext(Todocontext)
    const buttonStyle = {
        border:"0px",
        padding:"10px",
        margin:"0px"
    }
    const AddTodo = () => {
    //    var t = document.getElementById('todos')
    //    var node = document.createElement('div')
    //    node.textContent = InputValue
    if(InputValue!=''){
        setTodo([...Todos,InputValue])}
    //    t.appendChild(node)
        setInputValue('')
    }
    const HandleInput = (getval) => {
        setInputValue(getval.target.value)
        console.log(Todos)
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
    const EditTodo = (index) => {
        settogglebtn(true)
        setindexlocal(index)
    }
    const AddEditedTodo = () => {
        if(InputValue!=''){
            setTodo((prevtodos) => {
                const editedtodo = [...prevtodos]
                editedtodo[indexlocal] = InputValue
                return editedtodo
            })
        }
        setInputValue('')
        settogglebtn(false)
    }
    return(
        <div>
            <Link to='/' className="link-style">Goto Home</Link>
            <h1>Todo 1</h1>
            {
                togglebtn ? <input type="text" placeholder={`Edit to-do ${indexlocal + 1} here`}  onChange={HandleInput} value={InputValue} /> : <input type="text" placeholder="Add new to-do here" onChange={HandleInput} value={InputValue} />
            }
            
            {
                togglebtn ? <button onClick={AddEditedTodo}>Edit Todo</button> : <button onClick={AddTodo}>Add Todo</button>
            }
            <button onClick={RemoveTodo}>Remove Todo</button>
            {/* <button onClick={restore}>Restore list</button> */}
            <div id="todos">
                {Todos.map((item,index) => {return <p><pre>{item}   <button style={buttonStyle} onClick={() => EditTodo(index)}><BiEdit /></button></pre></p>;}) }
            </div>
        </div>
    )
}

export default Todo