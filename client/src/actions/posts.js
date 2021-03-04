import * as api from '../api';
import * as ACTIONS from '../constants/actionTypes';

// Action creators:
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: ACTIONS.FETCH_ALL, payload: data });
    } catch (error) {
        console.error(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: ACTIONS.CREATE, payload: data });
    } catch (error) {
        console.error(error);
    }
}
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: ACTIONS.UPDATE, payload: data });
    } catch (error) {
        console.error(error);
    }
}
export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: ACTIONS.DELETE , payload: id });
    } catch (error) {
        console.error(error);
    }
}
export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: ACTIONS.LIKE, payload: data });
    } catch (error) {
        console.error(error);
    }
}