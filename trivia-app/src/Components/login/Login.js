import React, { Component } from "react"
import DataManager from "../../modules/DataManager"
import { Button, Label, Form, FormGroup, Input, CardTitle} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'


export default class Login extends Component {


    state = {
        email: "",
        username: "",
        password: "",
        remember: false
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {


        e.preventDefault()

        let existingUser = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password

        }

        //Check if the values are already used in database
        DataManager.getAll("users").then((result) => {
            let userObject = result.find(item => {
                return existingUser.username === item.username && existingUser.email === item.email && existingUser.password === item.password
            })
            if (!userObject) {
                alert("UserName or Email is incorrect")
            } else if (this.state.remember) {
                localStorage.setItem(
                    "credentials",
                    JSON.stringify({
                        email: this.state.email,
                        username: this.state.username,
                        id: userObject.id
                    })
                )
                window.location.href = "http://localhost:3000/"
            } else {
                /*
                    For now, just store the email and password that
                    the customer enters into local storage.
                */
                sessionStorage.setItem(
                    "credentials",
                    JSON.stringify({
                        email: this.state.email,
                        username: this.state.username,
                        id: userObject.id
                    })
                )

                window.location.href = "http://localhost:3000/"
            }
        })
    }

    registerUser = (e) => {

        e.preventDefault()

        let newUser = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password

        }
        //Check if the values are already used in database
        DataManager.getAll("users").then((result) => {
            let userName = result.find(item => {
                return newUser.username === item.username
            })
            let userEmail = result.find(item => {
                return newUser.email === item.email
            })
            if (userName) {
                alert("UserName already taken")
            } else if (userEmail) {
                alert("Email is already taken")
            } else {
                //Post to API
                DataManager.post("users", newUser).then(() => {
                    //Clear the Form Fields
                    alert("You are now registered!")
                    //Put HTML Representation on the DOM
                })
            }
        })
    }

    changeRememberMe = () => {

        if (this.state.remember) {
            this.setState({ remember: false })
        } else {
            this.setState({ remember: true })
        }
    }

    render() {
        return (
                <Form className="login" onSubmit={this.handleLogin}>
                    <FormGroup>
                        <CardTitle className="h3 mb-3 font-weight-normal text-white">Please Log In</CardTitle>
                        <Label className="text-white" htmlFor="inputEmail">
                            Email address
                        </Label>
                        <Input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="Email address"
                            required="" autoFocus="" /><br />
                        <Label className="text-white" htmlFor="inputUsername">
                            Username
                        </Label>
                        <Input onChange={this.handleFieldChange} type="username"
                            id="username"
                            placeholder="Username"
                            required="" /><br />
                        <Label className="text-white" htmlFor="inputPassword">
                            Password
                        </Label>
                        <Input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" /><br />
                    </FormGroup>
                    <FormGroup className="buttons">
                        <Label className="text-white" check>
                            <Input onClick={this.changeRememberMe} type="checkbox" />{' '}
                                Remember Me
                        </Label>
                        <Button color="info" type="submit" onClick={(e) => this.registerUser(e)}>
                            Register
                        </Button>
                        <Button color="info" type="submit" onClick={this.handleLogin}>
                            Login
                        </Button>
                    </FormGroup>
                </Form>
        )
    }
}