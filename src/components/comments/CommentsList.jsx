import React, {Component} from 'react'
import Comment from './Comment';

import '../../styles/comments.css';

export default class CommentsList extends Component {
    render = () => {
        const comments = this.props.comments.map((c, i) => {
            // console.log('sds', i, c);
            return <Comment key={i} index={i} {...c} comment={c} remove={this.props.remove} />;
        });
            
        return (
            <div id="allComments" className="comments">
            <h3>All comments</h3>
                {comments}
            </div>
        )
    }
}