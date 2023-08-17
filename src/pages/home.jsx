import {Link} from "react-router-dom"
import '../App.css'
const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            <Link to='/todo1' className="link-style"><button>Open To-do list 1</button></Link>
            <Link to='/todo2' className="link-style"><button>Open To-do list 2</button></Link>
        </div>
    )
}

export default Home