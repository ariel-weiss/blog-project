import axios from 'axios';

const posts_url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(posts_url);
