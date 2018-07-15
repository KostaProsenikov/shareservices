import React, {Component} from 'react';
import requester from '../../infrastructure/requester';

export default class CreatePost extends Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            url: '',
            imageUrl: '',
            description: ''
        }
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('submit', this.state);
        const postData = this.state;
        const username = sessionStorage.getItem('username');
        postData.author = username;
        requester.post('appdata', 'posts', 'kinvey', postData)
            .then(res => {
               this.props.history.push('/catalog');
            });
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log('ev', this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" onChange={this.onChange} name="title" placeholder='Title' id="title" className="form-control" />
                </div>
                <div className="form-group">
                <label htmlFor="url">URL</label>
                <input type="text" onChange={this.onChange} name="url" placeholder='URL'  id="url" className="form-control" />
                </div>
                <div className="form-group">
                <label htmlFor="url">Image URL</label>
                <input type="text" onChange={this.onChange} name="imageUrl" placeholder='Image URL'  id="imageUrl" className="form-control" />
                </div>
                <div className="form-group">
                <label htmlFor="url">Description</label>
                <input type="text" onChange={this.onChange} name="description" placeholder='Description'  id="description" className="form-control" />
                </div>
                <input type="submit" value="Submit" className="btn btn-primary"/>
                </form>
            </div>
        )
    }
}