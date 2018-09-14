import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class QuizList extends Component {
    render() {

        return (
            <React.Fragment>
                <div>
                    <h3>Default Categories</h3>
                    <div key="books" className="card">
                        <div className="card-body">
                            <h3>Books</h3>
                            <Link className="nav-link" to={`/quiz/books`}>Take Quiz</Link>
                        </div>
                    </div>
                    <div key="sports" className="card">
                        <div className="card-body">
                            <h3>Sports</h3>
                            <Link className="nav-link" to={`/quiz/sports`}>Take Quiz</Link>
                        </div>
                    </div>
                    <div key="films" className="card">
                        <div className="card-body">
                            <h3>Films</h3>
                            <Link className="nav-link" to={`/quiz/films`}>Take Quiz</Link>
                        </div>
                    </div>
                    <div key="videogames" className="card">
                        <div className="card-body">
                            <h3>Video Games</h3>
                            <Link className="nav-link" to={`/quiz/videogames`}>Take Quiz</Link>
                        </div>
                    </div>
                    <div key="mythology" className="card">
                        <div className="card-body">
                            <h3>Mythology</h3>
                            <Link className="nav-link" to={`/quiz/mythology`}>Take Quiz</Link>
                        </div>
                    </div>
                    <div key="animals" className="card">
                        <div className="card-body">
                            <h3>Animals</h3>
                            <Link className="nav-link" to={`/quiz/animals`}>Take Quiz</Link>
                        </div>
                    </div>
                    <div key="anime" className="card">
                        <div className="card-body">
                            <h3>Anime</h3>
                            <Link className="nav-link" to={`/quiz/anime`}>Take Quiz</Link>
                        </div>
                    </div>
                    <div key="generalknowledge" className="card">
                        <div className="card-body">
                            <h3>General Knowledge</h3>
                            <Link className="nav-link" to={`/quiz/generalknowledge`}>Take Quiz</Link>
                        </div>
                    </div>
                    <div key="geography" className="card">
                        <div className="card-body">
                            <h3>Geography</h3>
                            <Link className="nav-link" to={`/quiz/geography`}>Take Quiz</Link>
                        </div>
                    </div>
                    <div key="art" className="card">
                        <div className="card-body">
                            <h3>Art</h3>
                            <Link className="nav-link" to={`/quiz/art`}>Take Quiz</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Your Categories</h3>
                    {
                        this.props.categories.map(category =>
                            <div key={category.id} className="card">
                                <div className="card-body">
                                    <h3>{category.name}</h3>
                                    <Link className="nav-link" to={`/customquiz/${category.id}`}>Take Quiz</Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </React.Fragment>
        )
    }
}