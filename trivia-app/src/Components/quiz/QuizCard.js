import React, { Component } from 'react'
import { Button, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import he from 'he'

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
                {(this.state.flip) ? 
                    <div className="col-centered">
                        <Card color="dark" style={{margin: "10px 10px 10px 10px", height:"300px", width:"600px"}}>
                            <CardBody className="answer-center">
                                <CardTitle className="text-white">The Answer is:</CardTitle>
                                <CardText className="text-white">{this.state.returnedQuestion.answer}</CardText>
                                <Button color="info" onClick={this.flipCard}>Question</Button>
                            </CardBody>
                        </Card>
                    </div>
                :
                    <div className="col-centered">
                        <Card color="dark" style={{margin: "10px 10px 10px 10px", height:"300px", width:"600px"}}>
                            <CardBody>
                                <CardTitle className="text-white">Question</CardTitle>
                                <CardText className="text-white">{this.state.returnedQuestion.question}</CardText>
                                <CardBody className="d-flex align-content-between flex-wrap">
                                    <CardText className="w-50 text-white">A. {this.state.returnedQuestion.option1}</CardText>
                                    <CardText className="w-50 text-white">B. {this.state.returnedQuestion.option2}</CardText>
                                    <CardText className="w-50 text-white">C. {this.state.returnedQuestion.option3}</CardText>
                                    <CardText className="w-50 text-white">D. {this.state.returnedQuestion.option4}</CardText>
                                </CardBody>
                                <Button color="info" onClick={this.flipCard}>Answer</Button>
                            </CardBody>
                        </Card>
                    </div>
                }
            </React.Fragment>
        )
    }
}