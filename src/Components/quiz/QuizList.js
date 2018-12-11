import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardBody, CardTitle} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './QuizList.css'
import TriviaBrain from '../../images/Trivia-Brain-Logo.png'
import books from '../../images/books.jpeg'
import sports from '../../images/sports.jpeg'
import films from '../../images/films.jpg'
import videogames from '../../images/videogames.jpeg'
import mythology from '../../images/mythology.jpeg'
import animals from '../../images/animals.jpeg'
import anime from '../../images/anime.jpeg'
import generalknowledge from '../../images/generalknowledge.jpeg'
import geography from '../../images/geography.jpeg'
import art from '../../images/art.jpeg'

export default class QuizList extends Component {
    render() {

        return (
            <React.Fragment>
                <div className="row">
                    <div className="defaultCategories col">
                        <h3>Default Categories</h3>
                        <div className="row flex-wrap justify-content-between">
                            <div key="books">
                                <Card>
                                    <CardImg className="card-image" src={books} alt="Trivia Brain Logo" />
                                    <CardBody>
                                        <CardTitle>Books</CardTitle>
                                        <button className="quiz-button">
                                            <Link className="nav-link path" to={`/quiz/books`}>Take Quiz</Link>
                                        </button>
                                    </CardBody>
                                </Card>
                            </div>
                            <div key="sports">
                                <Card>
                                    <CardImg className="card-image" src={sports} alt="Trivia Brain Logo" />
                                    <CardBody>
                                        <CardTitle>Sports</CardTitle>
                                        <button className="quiz-button">
                                            <Link className="nav-link path" to={`/quiz/sports`}>Take Quiz</Link>
                                        </button>
                                    </CardBody>
                                </Card>
                            </div>
                            <div key="films">
                                <Card>
                                    <CardImg className="card-image" src={films} alt="Trivia Brain Logo" />
                                    <CardBody>
                                        <CardTitle>Films</CardTitle>
                                        <button className="quiz-button">
                                            <Link className="nav-link path" to={`/quiz/films`}>Take Quiz</Link>
                                        </button>
                                    </CardBody>
                                </Card>
                            </div>
                            <div key="videogames">
                                <Card>
                                    <CardImg className="card-image" src={videogames} alt="Trivia Brain Logo" />
                                    <CardBody>
                                        <CardTitle>Video Games</CardTitle>
                                        <button className="quiz-button">
                                            <Link className="nav-link path" to={`/quiz/videogames`}>Take Quiz</Link>
                                        </button>
                                    </CardBody>
                                </Card>
                            </div>
                            <div key="mythology">
                                <Card>
                                    <CardImg className="card-image" src={mythology} alt="Trivia Brain Logo" />
                                    <CardBody>
                                        <CardTitle>Mythology</CardTitle>
                                        <button className="quiz-button">
                                            <Link className="nav-link path" to={`/quiz/mythology`}>Take Quiz</Link>
                                        </button>
                                    </CardBody>
                                </Card>
                            </div>
                            <div key="animals">
                                <Card>
                                    <CardImg className="card-image" src={animals} alt="Trivia Brain Logo" />
                                    <CardBody>
                                        <CardTitle>Animals</CardTitle>
                                        <button className="quiz-button">
                                            <Link className="nav-link path" to={`/quiz/animals`}>Take Quiz</Link>
                                        </button>
                                    </CardBody>
                                </Card>
                            </div>
                            <div key="anime">
                                <Card>
                                    <CardImg className="card-image" src={anime} alt="Trivia Brain Logo" />
                                    <CardBody>
                                        <CardTitle>Anime</CardTitle>
                                        <button className="quiz-button">
                                            <Link className="nav-link path" to={`/quiz/anime`}>Take Quiz</Link>
                                        </button>
                                    </CardBody>
                                </Card>
                            </div>
                            <div key="generalknowledge">
                                <Card>
                                    <CardImg className="card-image" src={generalknowledge} alt="Trivia Brain Logo" />
                                    <CardBody>
                                        <CardTitle>General Knowledge</CardTitle>
                                        <button className="quiz-button">
                                            <Link className="nav-link path" to={`/quiz/generalknowledge`}>Take Quiz</Link>
                                        </button>
                                    </CardBody>
                                </Card>
                            </div>
                            <div key="geography">
                                <Card>
                                    <CardImg className="card-image" src={geography} alt="Trivia Brain Logo" />
                                    <CardBody>
                                        <CardTitle>Geography</CardTitle>
                                        <button className="quiz-button">
                                            <Link className="nav-link path" to={`/quiz/geography`}>Take Quiz</Link>
                                        </button>
                                    </CardBody>
                                </Card>
                            </div>
                            <div key="art">
                                <Card>
                                    <CardImg className="card-image" src={art} alt="Trivia Brain Logo" />
                                    <CardBody>
                                        <CardTitle>Art</CardTitle>
                                        <button className="quiz-button">
                                            <Link className="nav-link path" to={`/quiz/art`}>Take Quiz</Link>
                                        </button>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="yourCategories col">
                        <h3>Your Categories</h3>
                        <div className="row flex-wrap justify-content-between">
                        {
                            this.props.categories.map(category =>
                                <div key={category.id}>
                                    <Card>
                                        <CardImg className="card-image" src={TriviaBrain} alt="Trivia Brain Logo" />
                                        <CardBody>
                                            <CardTitle>{category.name}</CardTitle>
                                            <button className="quiz-button">
                                                <Link className="nav-link custom-path" to={`/customquiz/${category.id}`}>Take Quiz</Link>
                                            </button>
                                        </CardBody>
                                    </Card>
                                </div>
                            )
                        }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}