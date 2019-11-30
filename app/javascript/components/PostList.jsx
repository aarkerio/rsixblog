import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostList extends Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentDidMount() {
    fetch('api/posts')
      .then(response => response.json())
      .then(data => {
        this.setState({posts: data});
      })
      .catch(error => console.log('error', error));
  }
  render() {
    return (
      <div>
        {this.state.posts.map((post) => {
          return(
            <div key={post.id}>
              <h2><Link to={`/posts/${post.id}`}>{post.title}</Link></h2>
              {post.content}
              <hr/>
            </div>
          );
        })}
        <Link to="/posts/new" className="btn btn-outline-primary">Create Post</Link>
      </div>
    );
  }
}

export default PostList;
