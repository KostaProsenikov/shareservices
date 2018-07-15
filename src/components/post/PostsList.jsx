import React, { Component } from 'react';

import requester from '../../infrastructure/requester';
import Post from './Post';
import '../../styles/post.css';

export default class PostsList extends Component {
    constructor(props) {
        super(props);

        this.deletePost = this.deletePost.bind(this);
        this.state = { posts: [], deletePost: this.deletePost  }
    }

    getPosts = () =>
        requester.get('appdata', 'posts', 'kinvey')
            .then(res => {
               this.setState({ posts: res, deletePost: this.deletePost  })
            });

    componentDidMount = () => this.getPosts();

    deletePost(event){
        // console.log('id', event.target.id);
        const id = event.target.id;
        requester.remove('appdata', 'posts/' + id, 'kinvey')
        .then(res => {
                this.getPosts();
            })
        .catch(console.log);
    }

    render = () => {
        console.log(this.state);
        return (
            <section id="viewCatalog">
                {this.state.posts.map((p, i) => <Post key={p._id} index={i} post={p} {...p} deletePost={this.deletePost} />)}
            </section>
        )
    }
}