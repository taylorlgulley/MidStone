import React, { Component } from 'react'
import CustomQuizCard from './CustomQuizCard'

export default class CustomQuizGroup extends Component {

    render() {

        return (
            <React.Fragment>
                <section className="customQuiz">
                    {
                        this.props.questions.filter(question => question.categoryId === parseInt(this.props.match.params.categoryId, 10)).map(question =>
                            <div>
                                <CustomQuizCard key={question.id} question={question} {...this.props}/>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}