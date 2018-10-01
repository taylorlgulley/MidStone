import React, { Component } from 'react'
import AddQuestionModal from './AddQuestionModal'
import QuestionCard from './QuestionCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Question.css'

export default class CategoryList extends Component {
    render() {

        return (
            <React.Fragment>
                <div className="question-list">
                    <AddQuestionModal {...this.props}/>
                    <div className="row flex-wrap justify-content-around question-section">
                        {
                            this.props.questions.filter(question => question.categoryId === parseInt(this.props.match.params.categoryId, 10)).map(question =>
                                <QuestionCard className="card" key={question.id} question={question} {...this.props}/>
                            )
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}