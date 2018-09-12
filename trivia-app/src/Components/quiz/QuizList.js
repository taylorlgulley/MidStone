import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class QuizList extends Component {
    render() {

        return (
            <React.Fragment>
                <div key="books" className="card">
                    <div className="card-body">
                        <h3>Books</h3>
                        <Link className="nav-link" to={`/quiz/books`}>Take Quiz</Link>
                    </div>
                </div>
                <button onClick={this.props.listBookQuestions}>Is it working</button>
                <div key="sports" className="card">
                    <div className="card-body">
                        <h3>Sports</h3>
                        <Link className="nav-link" to={`/quiz/sports}`}>Take Quiz</Link>
                    </div>
                </div>
                <button onClick={this.props.listSportsQuestions}>Is it working?</button>
            </React.Fragment>
        )
    }
}