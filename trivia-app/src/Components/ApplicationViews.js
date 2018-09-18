import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './login/Login'
import HomePage from './HomePage'
import CategoryList from './category/CategoryList'
import QuestionList from './questions/QuestionList'
import QuizList from './quiz/QuizList'
import QuizGroup from './quiz/QuizGroup'
import CustomQuizGroup from './quiz/CustomQuizGroup'
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

        const _state = {}

        let user = () => {
            if (localStorage.credentials) {
                return JSON.parse(localStorage.getItem("credentials"))
            }
            else {return JSON.parse(sessionStorage.getItem("credentials"))}
        }

        DataManager.getAllOfId("questions", user().id)
            .then(questions => _state.questions = questions)
            .then(() => DataManager.getAllOfId("categories", user().id))
            .then(categories => _state.categories = categories)
            .then(() => APIManager.getBooks())
            .then(allBookQuestions => _state.books = allBookQuestions.results)
            .then(() => APIManager.getSports())
            .then(allSportsQuestions => _state.sports = allSportsQuestions.results)
            .then(() => APIManager.getFilms())
            .then(allFilmsQuestions => _state.films = allFilmsQuestions.results)
            .then(() => APIManager.getVideoGames())
            .then(allVideoGamesQuestions => _state.videogames = allVideoGamesQuestions.results)
            .then(() => APIManager.getMythology())
            .then(allMythologyQuestions => _state.mythology = allMythologyQuestions.results)
            .then(() => APIManager.getAnimals())
            .then(allAnimalsQuestions => _state.animals = allAnimalsQuestions.results)
            .then(() => APIManager.getAnime())
            .then(allAnimeQuestions => _state.anime = allAnimeQuestions.results)
            .then(() => APIManager.getGeneralKnowledge())
            .then(allGeneralKnowledgeQuestions => _state.generalknowledge = allGeneralKnowledgeQuestions.results)
            .then(() => APIManager.getGeography())
            .then(allGeographyQuestions => _state.geography = allGeographyQuestions.results)
            .then(() => APIManager.getArt())
            .then(allArtQuestions => _state.Art = allArtQuestions.results)
            .then(() => {
                this.setState(_state)
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

    deleteCategory = id => DataManager.delete("categories", id)
    .then(() => DataManager.getAllOfId("questions", this.user().id))
    .then(allQuestions => this.setState({
        questions: allQuestions
        }))
    .then(() => DataManager.getAllOfId("categories", this.user().id))
    .then(allCategories => this.setState({
        categories: allCategories
    }))

    addQuestion = question => DataManager.post("questions", question)
    .then(() => DataManager.getAllOfId("questions", this.user().id))
    .then(allQuestions => this.setState({
    questions: allQuestions
    }))

    deleteQuestion = id => DataManager.delete("questions", id)
    .then(() => DataManager.getAllOfId("questions", this.user().id))
    .then(allQuestions => this.setState({
        questions: allQuestions
    }))
    
    editQuestion = (id, editedQuestion) => DataManager.patch("questions", id, editedQuestion)
    .then(() => DataManager.getAllOfId("questions", this.user().id))
    .then(allQuestions => this.setState({
        questions: allQuestions
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
                        return <CategoryList categories={this.state.categories} addCategory={this.addCategory} deleteCategory={this.deleteCategory} {...props}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/questionlist/:categoryId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <QuestionList questions={this.state.questions} addQuestion={this.addQuestion} deleteQuestion={this.deleteQuestion} editQuestion={this.editQuestion} {...props}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/customquiz/:categoryId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <CustomQuizGroup questions={this.state.questions} {...props}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/quiz" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <QuizList categories={this.state.categories} {...props}/>
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