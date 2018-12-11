import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {

    state = {
        randomCategory: {}
    }

    componentDidMount() {
        let categoryArray = ["books", "sports", "films", "videogames", "mythology", "animals", "anime", "generalknowledge", "geography", "art"]
        let num = Math.floor(Math.random() * categoryArray.length)
        let category = categoryArray[num]
        this.setState({randomCategory: category})
    }

    logout = () => {
        if (sessionStorage.getItem("credentials") !== null) {
            sessionStorage.clear()
        } else if (localStorage.getItem("credentials") !== null) {
            localStorage.clear()
        }
    }

    randomQuiz = () => {
        let categoryArray = ["books", "sports", "films", "videogames", "mythology", "animals", "anime", "generalknowledge", "geography", "art"]
        let num = Math.floor(Math.random() * categoryArray.length)
        let category = categoryArray[num]
        this.setState({randomCategory: category})
    }

    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/categories">Your Categories</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/quiz">Trivia Decks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`/quiz/${this.state.randomCategory}`} onClick={this.randomQuiz}>Take Random Quiz</Link>
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