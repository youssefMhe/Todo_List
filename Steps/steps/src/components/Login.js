import '../assets/css/Login.css';
import ReactDOM from "react-dom";
import logo from "../assets/image/logo_steps.jpg";
import email_logo from "../assets/image/email_logo.jpg";
import pass from "../assets/image/key_logo.jpg";
import React, {Component, useState, useRef, useEffect} from 'react';
import {useHistory} from "react-router-dom";


export default function Login() {
    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    const handleFormSubmit = (event) => {

        event.preventDefault();
        if (!email || !password) {
            setFlag(true);
            console.log("EMPTY");
        } else {
            setFlag(false);
            localStorage.setItem("hardikSubmissionEmail", JSON.stringify("test@test.com"));
            localStorage.setItem("hardikSubmissionPassword", JSON.stringify("test"));
            // .Set the user login
            console.log("Saved in Local Storage");
            setLogin(!login)

            let pass = localStorage.getItem('hardikSubmissionPassword').replace(/"/g, "");
            let mail = localStorage.getItem('hardikSubmissionEmail').replace(/"/g, "");
            // .replace(/"/g,"") ------> to remove the double quotes for the string

            if (!email || !password) {
                setFlag(true);
                console.log("EMPTY");
            } else if ((password === pass) && (email === mail)) {
                setFlag(true);
                history.push("/Todo_List");
                console.log("login");
            } else console.log('Invalid user')
        }
    }
    return (
        <div className="main">
            <div className="sub-main">
                <div>
                    <div className="imgs">
                        <div className="container-image">
                            <img src={logo} alt="profile" className="profile"/>
                        </div>
                    </div>
                    <div>
                        <h1>Login STEPS</h1>
                        <div>
                            <img src={email_logo} alt="email" className="email"/>
                            <input value={email} name="email" type="text" placeholder="Adresse email"
                                   className="name" onChange={(event) => setEmail(event.target.value)}/>
                        </div>
                        <div className="second-input">
                            <img src={pass} alt="pass" className="email"/>
                            <input  value={password} name="password" type="password" placeholder="Mot de passe"
                                    className="name" onChange={(event) => setPassword(event.target.value)}/>
                        </div>
                        <div className="login-button">
                            <button  className="button_login" onClick={handleFormSubmit}>Se connecter</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

