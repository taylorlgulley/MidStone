import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {

    logout = () => {
        if (sessionStorage.getItem("credentials") !== null) {
            sessionStorage.clear()
        } else if (localStorage.getItem("credentials") !== null) {
            localStorage.clear()
        } else {
            console.log("Hey you aren't logged in")
        }
    }

    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/categories">Categories</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/quiz">Take Quiz</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login" onClick={this.logout}>Logout</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar