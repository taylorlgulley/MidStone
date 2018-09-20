import React, { Component } from 'react'
import AddCategoryModal from './AddCategoryModal'
import { Link } from 'react-router-dom'
import './Category.css'

export default class CategoryList extends Component {
    render() {

        return (
            <React.Fragment>
                <AddCategoryModal {...this.props}/>
                {
                    this.props.categories.map(category =>
                        <div key={category.id} className="category">
                            <div className="card-body">
                                <Link className="nav-link path" to={`/questionlist/${category.id}`}>{category.name}</Link>
                                <button onClick={() => this.props.deleteCategory(category.id)}>Delete Category</button>
                            </div>
                        </div>
                    )
                }
            </React.Fragment>
        )
    }
}