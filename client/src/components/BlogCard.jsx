import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
    return (
        <div className="col-md-12">
            <div className="card mb-2">
                <div className="card-header bg-dark text-white">
                    Blog ID: {props.blog.id}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.blog.title}</h5>
                    <p className="card-text">{props.blog.content}</p>
                    <Link to={`/single/${props.blog.id}`} className="btn btn-danger">Read More If You Dare...</Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;