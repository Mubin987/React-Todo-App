import {Link} from "react-router-dom"
import { useState , useContext } from "react"
import Todocontext2 from "../context/todo2/TodoContext2"
import '../App.css'
import { BiEdit } from "react-icons/bi";
const Todo = () => {
    const [InputValue,setInputValue] = useState('')
    const [togglebtn,settogglebtn] = useState(false)
    const [indexlocal,setindexlocal] = useState(-1)
    const {Todos2,setTodo2} = useContext(Todocontext2)
    const buttonStyle = {
        border:"0px",
        padding:"10px",
        margin:"0px"
    }
    const AddTodo = () => {
    if(InputValue!=''){
        setTodo2([...Todos2,InputValue])}
        setInputValue('')
    }
    const HandleInput = (getval) => {
        setInputValue(getval.target.value)
        console.log(Todos2)
    }
    const RemoveTodo = () => {
        setTodo2((prevTodos) => {
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
            setTodo2((prevtodos) => {
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
            <h1>Todo 2</h1>
            {
                togglebtn ? <input type="text" placeholder={`Edit to-do ${indexlocal + 1} here`}  onChange={HandleInput} value={InputValue} /> : <input type="text" placeholder="Add new to-do here" onChange={HandleInput} value={InputValue} />
            }
            
            {
                togglebtn ? <button onClick={AddEditedTodo}>Edit Todo</button> : <button onClick={AddTodo}>Add Todo</button>
            }
            <button onClick={RemoveTodo}>Remove Todo</button>
            <div id="todos">
                {Todos2.map((item,index) => {return <p><pre>{item}   <button style={buttonStyle} onClick={() => EditTodo(index)}><BiEdit /></button></pre></p>;}) }
            </div>
        </div>
    )
}

export default Todo