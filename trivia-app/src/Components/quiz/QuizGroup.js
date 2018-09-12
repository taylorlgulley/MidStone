import React, { Component } from 'react'
import QuizCard from './QuizCard'

export default class QuizGroup extends Component {

    render() {

        return (
            <React.Fragment>
                <section className="books">
                    {
                        this.props.books.map((book, i) => 
                                <QuizCard key={i} book={book} {...this.props} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}