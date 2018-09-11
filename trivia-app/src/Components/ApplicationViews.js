import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './login/Login'
import HomePage from './HomePage'
import CategoryList from './category/CategoryList'
import QuizList from './quiz/QuizList'
import DataManager from '../modules/DataManager'
import APIManager from '../modules/APIManager'

export default class ApplicationViews extends Component {

    // Check if credentials are in local storage. this is for logging in.
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null

    state = {
        categories: [],
        questions: []
    }

    componentDidMount() {

        // Example code. Make this fit into how you have written yours.
        // Need to change the 1 into a way to grab the session or local storage user id
        DataManager.getAllOfId("categories", "1").then(allCategories => {
            this.setState({
                categories: allCategories
            })
        })
    }

    listBookQuestions = () => APIManager.getBooks()
        .then(books => console.log(books))


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
                        return <CategoryList categories={this.state.categories}{...props}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/quiz" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <QuizList listBookQuestions={this.listBookQuestions}{...props}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
            </React.Fragment>
        )
    }
}