import React, { Component } from 'react'
import AddCategoryModal from './AddCategoryModal'
import { Link } from 'react-router-dom'

export default class CategoryList extends Component {
    render() {

        return (
            <React.Fragment>
                <AddCategoryModal {...this.props}/>
                {
                    this.props.categories.map(category =>
                        <div key={category.id} className="card">
                            <div className="card-body">
                                <Link className="nav-link" to={`/categories/${category.id}`}>{category.name}</Link>
                            </div>
                        </div>
                    )
                }
            </React.Fragment>
        )
    }
}