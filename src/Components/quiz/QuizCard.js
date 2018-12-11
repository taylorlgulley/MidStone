import React, { Component } from 'react'
import { Button, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'
import click from '../../images/click.png'
import he from 'he'

export default class QuizCard extends Component {

    state = {
        returnedQuestion: {}
    }

    componentDidMount() {
        let options = [he.decode(this.props.quizQuestion.correct_answer), he.decode(this.props.quizQuestion.incorrect_answers[0]), he.decode(this.props.quizQuestion.incorrect_answers[1]), he.decode(this.props.quizQuestion.incorrect_answers[2])]
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
            question: he.decode(this.props.quizQuestion.question),
            answer: he.decode(this.props.quizQuestion.correct_answer),
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
                <div className="card-container">
                    <div className="questionCard">
                        <Card className="front" color="dark">
                            <CardBody>
                                <CardTitle className="text-white">Question</CardTitle>
                                <CardText className="text-white">{this.state.returnedQuestion.question}</CardText>
                                <CardBody className="d-flex align-content-between flex-wrap">
                                    <CardText className="w-50 text-white">A. {this.state.returnedQuestion.option1}</CardText>
                                    <CardText className="w-50 text-white">B. {this.state.returnedQuestion.option2}</CardText>
                                    <CardText className="w-50 text-white">C. {this.state.returnedQuestion.option3}</CardText>
                                    <CardText className="w-50 text-white">D. {this.state.returnedQuestion.option4}</CardText>
                                </CardBody>
                                <Button color="info"><img className="click-image" alt="click-icon" src={click}/> Answer</Button>
                            </CardBody>
                        </Card>
                        <Card className="back" color="dark">
                            <CardBody className="answer-center">
                                <CardTitle className="text-white">The Answer is:</CardTitle>
                                <CardText className="text-white">{this.state.returnedQuestion.answer}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}