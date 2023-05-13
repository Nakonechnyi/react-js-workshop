import React from 'react';
import { useEffect } from 'react';
import { createPostAction, deletePostAction, fetchPostsAction } from '../../store/actions/posts.action.js';
import { createPostAsync, deletePostAsync } from '../API.js';
import {PostForm} from '../PostForm/PostForm.jsx';
import { useDispatch, useSelector } from 'react-redux';

export function PostDashboard() {

  const posts = useSelector((state) => state.posts.items);
  const dispatch = useDispatch();

  async function initPosts() {
    try {
      dispatch(fetchPostsAction());
    } catch (e) {
      console.log(e);
    }
  }

  useEffect( () => {
    initPosts();
  }, []);

  async function addPost (post) {
    try {
      const newPost = { id: posts.length + 1, ...post };
      const createdPost = await createPostAsync(newPost);
      dispatch(createPostAction(createdPost));
    } catch (e) {
      console.warn(e);
    }
  };

  async function deletePost(id) {
    try {
      await deletePostAsync(id);
      dispatch(deletePostAction(id));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="post-dashboard">
      <p>All Posts</p>
      <div className="post-list">
        {posts?.map((post) => (
          <div key={post.id} className="post-item" style={{ backgroundImage: `url(${post.imageUrl})` }}>
            <button className="delete-button" onClick={() => deletePost(post.id)} >X</button>
            <h2>{post.title}</h2>
            <p>{post.author}</p>
          </div>
        ))}
      </div>

      <PostForm onSubmit={addPost} />
    </div>
    );
  }
    
export default PostDashboard;