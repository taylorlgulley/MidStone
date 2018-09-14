import React, { Component } from 'react'
import AddQuestionModal from './AddQuestionModal'

export default class CategoryList extends Component {
    render() {

        return (
            <React.Fragment>
                <AddQuestionModal {...this.props}/>
                {
                    this.props.questions.filter(question => question.categoryId === parseInt(this.props.match.params.categoryId, 10)).map(question =>
                        <div key={question.id} className="card">
                            <div className="card-body">
                                <h3>{question.question}</h3>
                                <h3>{question.correct}</h3>
                                <h3>{question.wrong1}</h3>
                                <h3>{question.wrong2}</h3>
                                <h3>{question.wrong3}</h3>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    )
                }
            </React.Fragment>
        )
    }
}