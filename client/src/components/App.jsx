import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Home from './home';
import SingleBlog from './SingleBlog';
import AddBlog from './AddBlog';



class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Navbar />
                    <div className="container-fluid">
                        <Jumbotron />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/single/:id" component={SingleBlog} />
                            <Route exact path="/add-blog" component={AddBlog} />
                        </Switch>
                    </div>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;