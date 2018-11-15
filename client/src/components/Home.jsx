import React, { Component } from 'react';
import { render } from 'react-dom';

import BlogCard from './BlogCard';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        };
    }

    async componentDidMount() {
        try {
            let res = await fetch('/api/blogs');
            let blogs = await res.json();
            console.log(blogs);
            this.setState({ blogs });
        } catch (e) {
            console.log(e);
        }
    }

     renderChirps() {
         return this.state.blogs.map(blog => {
             return <BlogCard key={blog.id} blog={blog} />
         })
     }

    render() {
         return (
             <div className="row">
                 {this.renderChirps()}
             </div>
         );
    }
};