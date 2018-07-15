import React, {Component, Fragment} from 'react';
import PostsList from './../post/PostsList';

export default class CatalogContainer extends Component {
    render = () => {
        return (
            <Fragment>
                <PostsList />
            </Fragment>
        )
    }
}