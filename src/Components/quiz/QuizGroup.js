import React, { Component } from 'react'
import QuizCard from './QuizCard'
import './Card.css'

export default class QuizGroup extends Component {

    render() {

        return (
            <React.Fragment>
                <section className="quiz">
                    {
                        this.props.quiz.map((question, i) => 
                                <QuizCard key={i} quizQuestion={question} {...this.props} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}