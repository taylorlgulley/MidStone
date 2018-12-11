import React, { Component } from 'react'
import AddCategoryModal from './AddCategoryModal'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
import edit from '../../images/edit.png'
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
                                <h2>{category.name}</h2>
                                <h4>
                                    <Link className="nav-link path" to={`/questionlist/${category.id}`}><img className="edit-image" alt="edit-icon" src={edit}/> Add Questions</Link>
                                </h4>
                                <Button onClick={() => this.props.deleteCategory(category.id)}>Delete Category</Button>
                            </div>
                        </div>
                    )
                }
            </React.Fragment>
        )
    }
}