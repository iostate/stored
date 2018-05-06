
import {FETCH_POSTS, NEW_POST} from '../actions/types';

// each type that we import has to be exported as well
// this is a middleware function
// allows us to make asynchronous requests

export const fetchPosts = () => dispatch => {
  // dispatch is kinda like the resolve in a promise

  // was logging because i wanted to find out if 
  // this method was being called before another error
  // console.log('fetching');
    fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => dispatch({
              type: FETCH_POSTS,
              payload: posts
            }));
}