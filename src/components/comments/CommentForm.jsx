import React, {Component} from 'react';

import withFormManager from './../../hocs/withFormManager';
import commentService from '../../services/commentService';
import commentModel from '../../models/commentModel';

class CommentsForm extends Component {
    constructor(props){
        super(props);
        const author = sessionStorage.getItem('username');
        console.log('author', author);

        this.state = {
            author: `${author}`
        }
    }

    render = () => {      
        return (
            <div className="submitArea">
                <h1>Post Comment</h1>
                <form id="createCommentForm" className="submitForm" onSubmit={this.props.handleSubmit}>
                    <label>Content:</label>
                    <input id="cmtContent" name="content" onChange={this.props.handleChange} value={this.props.content}/>
                    <input type="hidden" name="author" onChange={this.props.handleChange} value={this.state.author}/>
                    <input type="submit" className="btn btn-success" value="Post Comment"/>
                </form>
            </div>
        )
    }
}

export default withFormManager(CommentsForm, commentModel, commentService.create)