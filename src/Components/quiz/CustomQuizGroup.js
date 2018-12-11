import React, { Component } from 'react'
import CustomQuizCard from './CustomQuizCard'
import './Card.css'

export default class CustomQuizGroup extends Component {

    render() {

        return (
            <React.Fragment>
                <section className="customQuiz">
                    {
                        this.props.questions.filter(question => question.categoryId === parseInt(this.props.match.params.categoryId, 10)).map(question =>
                                <CustomQuizCard key={question.id} question={question} {...this.props}/>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}