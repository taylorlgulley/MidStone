import React, { Component } from 'react'
import AddQuestionModal from './AddQuestionModal'
import QuestionCard from './QuestionCard'

export default class CategoryList extends Component {
    render() {

        return (
            <React.Fragment>
                <div className="question-list">
                    <AddQuestionModal {...this.props}/>
                    {
                        this.props.questions.filter(question => question.categoryId === parseInt(this.props.match.params.categoryId, 10)).map(question =>
                            <QuestionCard key={question.id} question={question} {...this.props}/>
                        )
                    }
                </div>
            </React.Fragment>
        )
    }
}