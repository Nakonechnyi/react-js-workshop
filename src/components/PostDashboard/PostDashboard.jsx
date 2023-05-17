import React from 'react';
import { useEffect } from 'react';
import { createPostAction, deletePostAction, fetchPostsAction } from '../../store/actions/posts.action.js';
import { createPostAsync, deletePostAsync } from '../API.js';
import {PostForm} from '../PostForm/PostForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation.jsx';
import { PostItem } from '../PostItem/PostItem.jsx';

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
      <Navigation/>
      <p>All Posts</p>
      <div className="post-list">
        {posts?.map((post) => <PostItem
         key={post.id}
         id={post.id}
         imageUrl={post.imageUrl}
         title={post.title}
         author={post.author}
         />
        )}
      </div>
    </div>
    );
  }
    
export default PostDashboard;