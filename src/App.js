import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './styles/site.css';
import './App.css';
import Header from './components/common/Header';
import HomeContainer from './components/home/HomeContainer';
import Notification from './components/common/Notification';
import CatalogContainer from './components/post/CatalogContainer';
import Logout from './components/user/Logout';
import { withUserAuthorization } from './hocs/withAuthorization';
import PostDetailsContainer from './components/post/PostDetailsContainer';
import Nav from './components/common/Nav';
import CreatePost from './components/post/CreatePost';

class App extends Component {
    render() {
        return (
            <div className="App">
                <main className="content">
                    <Nav />
                    <Header />
                    <Notification />
                    <Route path='/' exact component={HomeContainer} />
                    <Route path='/catalog/create-post/' component={withUserAuthorization(CreatePost)} />
                    <Route path='/catalog' exact component={withUserAuthorization(CatalogContainer)} />
                    <Route path='/logout' component={Logout} />
                    <Route path='/catalog/details/:id' component={PostDetailsContainer} />
                </main>
            </div>
        );
    }
}

export default App;
