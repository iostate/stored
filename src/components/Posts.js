import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
    componentWillMount() {
      this.props.fetchPosts();
    }
  render() {
    // no longer have posts inside the component's state
    // make sure to call from props.. 
    // posts variable comes from postReducer
      const postItems = this.props.posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
         ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}
Posts.propTypes = {
  fetchPosts: propTypes.func.isRequired,
  posts: propTypes.array.isRequired
};
const mapStateToProps = state => ({
  posts: state.posts.items
});


// instead of export default Posts we are going to use
// export default connect
// export default Posts <!--no longer in use-->
// make sure to pass in the current state as first argument
export default connect(mapStateToProps, { fetchPosts })(Posts);