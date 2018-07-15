import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import postService from '../../services/postService';

export default class Post extends Component {
    render = () => (
        <article className="post">
            <div className="col rank">
                <span>{this.props.index + 1}</span>
            </div>
            <div className="col thumbnail">
                <a href={this.props.url}>
                    <img alt="Image text alt" src={this.props.imageUrl} />
                </a>
            </div>
            <div className="post-content">
                <div className="title">
                    <a href={this.props.url}>
                        {this.props.title}
                    </a>
                </div>
                <div className="details">
                    <div className="info">
                        {postService.createdBeforeDays(this.props._kmd.ect)}
                    </div>
                    <div className="controls">
                    <ul>
                        <li className="action">
                            <Link to={'/catalog/details/' + this.props._id} className="btn btn-primary">Details</Link>
                        </li>
                        <li className="action">
                            <button to="/catalog" className="deletePost btn btn-primary">Edit</button>
                        </li>
                        <li className="action">
                        {   // user is owner of the post
                           (postService.isOwnerOrAdmin(this.props.post) === true)
                        &&
                        <button
                            onClick={this.props.deletePost} 
                            id={this.props._id}
                            className="deletePost btn btn-danger"
                            >Delete</button>
                        }
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </article>
    )
}