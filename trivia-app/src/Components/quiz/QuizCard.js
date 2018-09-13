import React, { Component } from 'react'
import { Button, Card, CardBody, CardTitle, CardText} from 'reactstrap';
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
        const question = {
            question: he.decode(this.props.quizQuestion.question),
            answer: he.decode(this.props.quizQuestion.correct_answer),
            wrong1: he.decode(this.props.quizQuestion.incorrect_answers[0]),
            wrong2: he.decode(this.props.quizQuestion.incorrect_answers[1]),
            wrong3: he.decode(this.props.quizQuestion.incorrect_answers[2])
        }
        this.setState({returnedQuestion: question})
    }
    //Use didComponentUpdate or shouldComponent Update to make the options not rerandomize on flip
    // shouldComponentUpdate(prevState) {
    //     // Typical usage (don't forget to compare props):
    //     if (this.state.returnedQuestion !== prevState.returnedQuestion) {
    //         console.log("hey")
    //     }
    //   }

    randomOption = () => {
        let options = [this.state.returnedQuestion.answer, this.state.returnedQuestion.wrong1, this.state.returnedQuestion.wrong2, this.state.returnedQuestion.wrong3]
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
        return <CardBody>
                    <CardText>A. {option1}</CardText>
                    <CardText>B. {option2}</CardText>
                    <CardText>C. {option3}</CardText>
                    <CardText>D. {option4}</CardText>
               </CardBody>
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
                                {this.randomOption()}
                                <Button onClick={this.flipCard}>Answer</Button>
                            </CardBody>
                        </Card>
                    </div>
                }
            </React.Fragment>
        )
    }
}