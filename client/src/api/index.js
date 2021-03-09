import axios from 'axios';

const posts_url = 'http://localhost:5000/posts';//'https://blog-project7.herokuapp.com/posts';

export const fetchPosts = () => axios.get(posts_url);
export const createPost = (newPost) => axios.post(posts_url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${posts_url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${posts_url}/${id}`);
export const likePost = (id) => axios.patch(`${posts_url}/${id}/likePost`);
