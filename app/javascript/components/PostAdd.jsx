import React, { Component } from 'react';

class PostAdd extends Component {
  constructor() {
    super();
    this.state = { post_title: '', post_post: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {'Content-Type': 'application/json' }
      })
      .then(response => response.json())
      .then(data => {
        this.props.history.push(`/posts/${data.id}`);
      })
      .catch(error => console.log('error', error));
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleCancel() {
    this.props.history.push("/posts");
  }

  render() {
    return (
      <div>
        <h1>Create New Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" size="80" name="post[title]" id="post_title" value={this.state.post_title} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Post</label>
            <textarea name="post[post]" id="post_post" rows="25" cols="130" value={this.state.post_post} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-dark">Create</button>
            <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostAdd;
