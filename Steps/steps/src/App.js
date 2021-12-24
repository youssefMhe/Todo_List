import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./components/Login";
import TodoList from "./components/TodoList";

export default function  App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Login/>
                    </Route>
                    <Route exact path="/Todo_List">
                        <TodoList/>
                    </Route>
                </Switch>
            </div>
        </Router>
);
}


