import React, { Component } from 'react'
import { Button, Card, CardBody, CardTitle, CardText, Input, Label} from 'reactstrap';

export default class QuestionCard extends Component {

    state = {
        edit: false,
        question: null
    }

    // Update state whenever an input field is edited
    handleFieldChange = (whichOne, evt) => {
        const editedQuestion = this.props.question;
        const stateToChange = whichOne
        editedQuestion[stateToChange] = evt.target.value
        this.setState({ editedQuestion })
    }

    user = () => {
        if (localStorage.credentials) {
            return JSON.parse(localStorage.getItem("credentials"))
        }
        else {return JSON.parse(sessionStorage.getItem("credentials"))}
    }

    // changes state for edit to true
    editMode = () => {
        this.setState({ edit: true, question: this.props.question })
    }

    constructEditedQuestion = evt => {
        evt.preventDefault()
        const editedQuestion = {
            categoryId: parseInt(this.props.match.params.categoryId, 10),
            userId: this.user().id,
            question: this.state.question.question,
            correct: this.state.question.correct,
            wrong1: this.state.question.wrong1,
            wrong2: this.state.question.wrong2,
            wrong3: this.state.question.wrong3,
            id: this.state.question.id
        }

        // Create the animal and redirect user to animal list
        this.props.editQuestion(this.state.question.id, editedQuestion);
        this.setState({ edit: false });
    }

    render() {

        return (
            <React.Fragment>
                {(this.state.edit) ? 
                    <Card>
                        <CardBody>
                            <Label>Question</Label>
                            <Input type="text" required={true}
                                className="form-control"
                                onChange={(evt) => { this.handleFieldChange("question", evt) }}
                                id="question"
                                value={this.state.question.question} />
                            <Label>Correct Answer</Label>
                            <Input type="text" required={true}
                                className="form-control"
                                onChange={(evt) => { this.handleFieldChange("correct", evt) }}
                                id="correct"
                                value={this.state.question.correct} />
                            <Label>Wrong Answer #1</Label>
                            <Input type="text" required={true}
                                className="form-control"
                                onChange={(evt) => { this.handleFieldChange("wrong1", evt) }}
                                id="wrong1"
                                value={this.state.question.wrong1} />
                            <Label>Wrong Answer #2</Label>
                            <Input type="text" required={true}
                                className="form-control"
                                onChange={(evt) => { this.handleFieldChange("wrong2", evt) }}
                                id="wrong2"
                                value={this.state.question.wrong2} />
                            <Label>Wrong Answer #3</Label>
                            <Input type="text" required={true}
                                className="form-control"
                                onChange={(evt) => { this.handleFieldChange("wrong3", evt) }}
                                id="wrong3"
                                value={this.state.question.wrong3} />
                            <Button onClick={this.constructEditedQuestion}>Save Edited Question</Button>
                        </CardBody>
                    </Card>
                :
                    <Card>
                        <CardBody>
                            <CardTitle>{this.props.question.question}</CardTitle>
                            <CardText>{this.props.question.correct}</CardText>
                            <CardText>{this.props.question.wrong1}</CardText>
                            <CardText>{this.props.question.wrong2}</CardText>
                            <CardText>{this.props.question.wrong3}</CardText>
                            <Button onClick={() => this.props.deleteQuestion(this.props.question.id)}>Delete Question</Button>
                            <Button onClick={this.editMode}>Edit Question</Button>
                        </CardBody>
                    </Card>
                }
            </React.Fragment>
        )
    }
}