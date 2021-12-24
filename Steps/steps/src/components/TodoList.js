import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import '../assets/css/TodoList.css';
import logo from "../assets/image/logo_steps.jpg";
import {useHistory} from "react-router-dom";


export default function TodoList() {
    const [todos, setTodos] = useState([]);
    let history = useHistory();


    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(...todos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removedArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        history.push("/");
        console.log("logout");
    }

    return (

        <>
            <div className="logout-div">
                <button onClick={handleFormSubmit} className="button_logout">Déconnecter</button>
            </div>

            <h1>Liste des taches</h1>
            <div className="imgs">
                <div className="container-image">
                    <img src={logo} alt="profile" className="profile"/>
                </div>
            </div>

            <TodoForm onSubmit={addTodo}/>
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </>
    );
}

