import './App.css';

import {useState, useEffect} from "react";
import {BsTrash, BsBookmark, BsBookmarkCheckFill} from "react-icons/bs";

const API = "http://localhost:5000"

function App() {
    const [title, setTile] = useState("")
    const [time, setTime] = useState("")
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(false)

    const handlerSubmit = (e) => {
        e.preventDefault();
        setTile("")
    }

    return (
        <div className="App">
            <div className="todo-header"><h1>React Todo</h1></div>
            <div className="form-todo">
                <h2>Insira a sua próxima tarefa: </h2>
                <form onSubmit={handlerSubmit}>
                    <div className="form-control">
                        <label htmlFor="title"> O que vc vai fazer ?</label>
                        <input type="text" name="title" placeholder="Titulo da tarefa"
                               onChange={(e) => setTile(e.target.value)}
                               value={title || ""}
                               required/>
                    </div>
                    <input type="submit" value="Enviar"/>
                </form>
            </div>
            <div className="list-todo">
                <h2>Lista de tarefas</h2>
                {todos.length == 0 && <p> Não há tarefas</p>}
            </div>
        </div>
    );
}

export default App;
