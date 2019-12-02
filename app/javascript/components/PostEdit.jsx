import React, { Component } from 'react';

class PostEdit extends Component {
  constructor() {
    super();
    this.state = { title: '', post: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    fetch(`/api/posts/${this.props.match.params.id}`)
      .then(response => response.json())
      .then((data) => {
        this.setState(data);
      })
      .catch(error => console.log('error', error));
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`api/posts/${this.props.match.params.id}`, {
        method: 'PATCH',
        body: JSON.stringify(this.state),
        headers: { 'Post-Type': 'application/json' }
      })
      .then(response => response.json())
      .then(data => {
        console.log("  ############  DATA PostEdit :  >>>> " + JSON.stringify(data));
        this.props.history.push(`/posts/${this.state.id}`);
      })
      .catch(error => console.log('error', error));
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCancel() {
    this.props.history.push(`/posts/${this.state.id}`);
  }

  render() {
    return (
      <div>
        <h1>Edit {this.state.title}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Post</label>
            <textarea name="post" rows="5" value={this.state.post} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-dark">Update</button>
            <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostEdit;