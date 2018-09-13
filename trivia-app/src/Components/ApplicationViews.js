import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './login/Login'
import HomePage from './HomePage'
import CategoryList from './category/CategoryList'
import QuizList from './quiz/QuizList'
import QuizGroup from './quiz/QuizGroup'
import DataManager from '../modules/DataManager'
import APIManager from '../modules/APIManager'

export default class ApplicationViews extends Component {

    // Check if credentials are in local storage. this is for logging in.
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null

    state = {
        categories: [],
        questions: [],
        books: [],
        sports: [],
        films: [],
        videogames: [],
        mythology: [],
        animals: [],
        anime: [],
        generalknowledge: [],
        geography: [],
        art: []
    }

    componentDidMount() {

        let user = () => {
            if (localStorage.credentials) {
                return JSON.parse(localStorage.getItem("credentials"))
            }
            else {return JSON.parse(sessionStorage.getItem("credentials"))}
        }

        // Example code. Make this fit into how you have written yours.
        // Need to change the 1 into a way to grab the session or local storage user id
        DataManager.getAllOfId("categories", user().id).then(allCategories => {
            this.setState({
                categories: allCategories
            })
        })
        APIManager.getBooks().then(allBookQuestions => {
            this.setState({
                books: allBookQuestions.results
            })
        })
        APIManager.getSports().then(allSportsQuestions => {
            this.setState({
                sports: allSportsQuestions.results
            })
        })
        APIManager.getFilms().then(allFilmsQuestions => {
            this.setState({
                films: allFilmsQuestions.results
            })
        })
        APIManager.getVideoGames().then(allVideoGamesQuestions => {
            this.setState({
                videogames: allVideoGamesQuestions.results
            })
        })
        APIManager.getMythology().then(allMythologyQuestions => {
            this.setState({
                mythology: allMythologyQuestions.results
            })
        })
        APIManager.getAnimals().then(allAnimalsQuestions => {
            this.setState({
                animals: allAnimalsQuestions.results
            })
        })
        APIManager.getAnime().then(allAnimeQuestions => {
            this.setState({
                anime: allAnimeQuestions.results
            })
        })
        APIManager.getGeneralKnowledge().then(allGeneralKnowledgeQuestions => {
            this.setState({
                generalknowledge: allGeneralKnowledgeQuestions.results
            })
        })
        APIManager.getGeography().then(allGeographyQuestions => {
            this.setState({
                geography: allGeographyQuestions.results
            })
        })
        APIManager.getArt().then(allArtQuestions => {
            this.setState({
                art: allArtQuestions.results
            })
        })

    }
    
    user = () => {
        if (localStorage.credentials) {
            return JSON.parse(localStorage.getItem("credentials"))
        }
        else {return JSON.parse(sessionStorage.getItem("credentials"))}
    }

    addCategory = category => DataManager.post("categories", category)
    .then(() => DataManager.getAllOfId("categories", this.user().id))
    .then(allCategories => this.setState({
        categories: allCategories
    }))

    //Refactor later to have one route that changes for the default categories(maybe a .find for props to find the appropriate category)
    render() {
        return (
            <React.Fragment>
                <Route path="/login" component={Login} />
                <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <HomePage />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/home" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <HomePage />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/categories" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <CategoryList categories={this.state.categories} addCategory={this.addCategory} {...props}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/quiz" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <QuizList {...props}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/quiz/books" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <QuizGroup quiz={this.state.books} {...props}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/quiz/sports" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <QuizGroup quiz={this.state.sports} {...props}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/quiz/films" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <QuizGroup quiz={this.state.films} {...props}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/quiz/videogames" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <QuizGroup quiz={this.state.videogames} {...props}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/quiz/mythology" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <QuizGroup quiz={this.state.mythology} {...props}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/quiz/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <QuizGroup quiz={this.state.animals} {...props}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/quiz/anime" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <QuizGroup quiz={this.state.anime} {...props}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/quiz/generalknowledge" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <QuizGroup quiz={this.state.generalknowledge} {...props}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/quiz/geography" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <QuizGroup quiz={this.state.geography} {...props}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/quiz/art" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <QuizGroup quiz={this.state.art} {...props}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
            </React.Fragment>
        )
    }
}