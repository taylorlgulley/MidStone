import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class AddCategoryModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            question: "",
            correct: "",
            wrong1: "",
            wrong2: "",
            wrong3: ""
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    user = () => {
        if (localStorage.credentials) {
            return JSON.parse(localStorage.getItem("credentials"))
        }
        else {return JSON.parse(sessionStorage.getItem("credentials"))}
    }

    constructNewQuestion = evt => {
        //check how to get the categoryId from the url
        evt.preventDefault()
        const newQuestion = {
            categoryId: parseInt(this.props.match.params.categoryId, 10),
            userId: this.user().id,
            question: this.state.question,
            correct: this.state.correct,
            wrong1: this.state.wrong1,
            wrong2: this.state.wrong2,
            wrong3: this.state.wrong3
        }
        // Create the task and redirect user to mainview
        this.props.addQuestion(newQuestion).then(() => this.toggle())
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Add Question</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="questionContent">Question</Label>
                                <Input type="text" name="question" id="question" placeholder="What was James Bond's codename?" onChange={this.handleFieldChange} />
                                <Label for="correctOption">Correct Answer</Label>
                                <Input type="text" name="correct" id="correct" placeholder="007" onChange={this.handleFieldChange} />
                                <Label for="wrongOption1">Wrong Answer #1</Label>
                                <Input type="text" name="wrong1" id="wrong1" placeholder="006" onChange={this.handleFieldChange} />
                                <Label for="wrongOption2">Wrong Answer #2</Label>
                                <Input type="text" name="wrong2" id="wrong2" placeholder="008" onChange={this.handleFieldChange} />
                                <Label for="wrongOption3">Wrong Answer #3</Label>
                                <Input type="text" name="wrong3" id="wrong3" placeholder="009" onChange={this.handleFieldChange} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.constructNewQuestion}>Save Question</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default AddCategoryModal;