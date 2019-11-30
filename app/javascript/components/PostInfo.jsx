import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostInfo extends Component {
  constructor() {
    super();
    this.state = { post: {} };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    fetch(`/api/posts/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => {
          this.setState({post: data});
      })
      .catch(error => console.log('error', error));
  }

  handleDelete() {
    fetch(`api/posts/${this.props.match.params.id}`, {method: 'DELETE'})
      .then(() => {
        this.props.history.push("/posts");
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div>
        <h2>{this.state.post.id}: {this.state.post.title}</h2>
        <p>{this.state.post.post}</p>
        <p>
          <Link to={`/posts/${this.state.post.id}/edit`} className="btn btn-outline-dark">Edit</Link>
          <button onClick={this.handleDelete} className="btn btn-outline-dark">Delete</button>
          <Link to="/posts" className="btn btn-outline-dark">Close</Link>
        </p>
        <hr/>
      </div>
    );
  }
}

export default PostInfo;
