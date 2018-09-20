import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class AddCategoryModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: ""
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

    constructNewCategory = evt => {
        evt.preventDefault()
        const newCategory = {
            name: this.state.name,
            userId: this.user().id
        }
        // Create the task and redirect user to mainview
        this.props.addCategory(newCategory).then(() => this.toggle())
    }

    render() {
        return (
            <div>
                <Button className="addButton" color="info" onClick={this.toggle}>Add Category</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="categoryName">Category Name</Label>
                                <Input type="text" name="category" id="name" placeholder="James Bond" onChange={this.handleFieldChange} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.constructNewCategory}>Save Category</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default AddCategoryModal;