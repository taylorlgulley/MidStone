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
                                <CardText>A. {this.state.returnedQuestion.answer}</CardText>
                                <CardText>B. {this.state.returnedQuestion.wrong1}</CardText>
                                <CardText>C. {this.state.returnedQuestion.wrong2}</CardText>
                                <CardText>D. {this.state.returnedQuestion.wrong3}</CardText>
                                <Button onClick={this.flipCard}>Answer</Button>
                            </CardBody>
                        </Card>
                    </div>
                }
            </React.Fragment>
        )
    }
}