import React, { Component } from 'react'
import { Button, Card, CardBody, CardTitle, CardText} from 'reactstrap';

export default class QuizCard extends Component {

    state = {
        flip: false,
        returnedQuestion: {}
    }

    // changes state for flip to true
    flipCard = () => {
        if (this.state.flip) {
            this.setState({ flip: false })
        } else {
            this.setState({ flip: true })
        }
    }

    componentDidMount() {
        let options = [this.props.question.correct, this.props.question.wrong1, this.props.question.wrong2, this.props.question.wrong3]
        let num1 = Math.floor(Math.random() * options.length)
        let option1 = options[num1]
        options.splice(num1, 1)
        let num2 = Math.floor(Math.random() * options.length)
        let option2 = options[num2]
        options.splice(num2, 1)
        let num3 = Math.floor(Math.random() * options.length)
        let option3 = options[num3]
        options.splice(num3, 1)
        let num4 = Math.floor(Math.random() * options.length)
        let option4 = options[num4]
        options.splice(num4, 1)

        const question = {
            question: this.props.question.question,
            answer: this.props.question.correct,
            option1: option1,
            option2: option2,
            option3: option3,
            option4: option4
        }
        this.setState({returnedQuestion: question})
    }

    render() {

        return (
            <React.Fragment>
                {(this.state.flip) ? 
                    <div>
                        <Card>
                            <CardBody>
                                <CardTitle>The Answer is:</CardTitle>
                                <CardText>{this.state.returnedQuestion.answer}</CardText>
                                <Button onClick={this.flipCard}>Question</Button>
                            </CardBody>
                        </Card>
                    </div>
                :
                    <div>
                        <Card>
                            <CardBody>
                                <CardTitle>Question</CardTitle>
                                <CardText>{this.state.returnedQuestion.question}</CardText>
                                <CardBody>
                                    <CardText>A. {this.state.returnedQuestion.option1}</CardText>
                                    <CardText>B. {this.state.returnedQuestion.option2}</CardText>
                                    <CardText>C. {this.state.returnedQuestion.option3}</CardText>
                                    <CardText>D. {this.state.returnedQuestion.option4}</CardText>
                                </CardBody>
                                <Button onClick={this.flipCard}>Answer</Button>
                            </CardBody>
                        </Card>
                    </div>
                }
            </React.Fragment>
        )
    }
}