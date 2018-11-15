import React, { Component } from 'react';

class AddBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: 1,
            title: '',
            content: ''
        };
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        console.log("from state: ", this.state)
        try {
            let res = await fetch('/api/blogs', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state)
            });
            this.props.history.replace('/');
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <form className="border p-3">
                <div class="form-group">
                    <label>Title:</label>
                    <input class="form-control" placeholder="Title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                </div> 
                <div class="form-group">
                    <label >Your Content:</label>
                    <input class="form-control" placeholder="Content" value={this.state.content} onChange={(e) => this.setState({ content: e.target.value })} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Post</button>
            </form>
        );
    }
};

export default AddBlog;
   




