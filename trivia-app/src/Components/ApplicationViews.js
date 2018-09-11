import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './login/Login'
import HomePage from './HomePage'
import CategoryList from './category/CategoryList'

export default class ApplicationViews extends Component {

    // Check if credentials are in local storage. this is for logging in.
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null


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
                        return <CategoryList />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
            </React.Fragment>
        )
    }
}