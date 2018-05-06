import {FETCH_POSTS, NEW_POST} from '../actions/types';

// defines the initial state of our application
const initialState = {
    // array of items
    items: [],
    // single item object
    item: {}
};

export default function(state = initialState, action) {
    // evaluates the action's type which is FETCH_POSTS
    switch (action.type) {
        case FETCH_POSTS:
        console.log('reducer');
        return {
            ...state, 
            items: action.payload
        }
        default:
            return state;
    }
}