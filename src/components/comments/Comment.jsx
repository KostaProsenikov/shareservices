import React, {Component} from 'react';
import commentService from '../../services/commentService';

export default class Comment extends Component {
    render = () => {
        console.log('Key', this.props.index)
        return (
            <article className="comment">
                <div className="comment-content">
                   {this.props.content}
                </div>
                {commentService.isOwner.isOwnerOrAdmin(this.props.comment) &&
                    <button 
                    data-comment-index={this.props.index} 
                    className="action btn btn-danger" 
                    onClick={this.props.remove}>
                        Delete
                    </button>
                }
            </article>
        )
    }
}