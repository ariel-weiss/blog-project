import * as ACTIONS from '../constants/actionTypes';

export default (posts = [], action) => {
    switch (action.type) {
        case ACTIONS.FETCH_ALL:
            return action.payload;
        case ACTIONS.CREATE:
            return [...posts, action.payload];
        case ACTIONS.UPDATE:
        case ACTIONS.LIKE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case ACTIONS.DELETE:
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
}