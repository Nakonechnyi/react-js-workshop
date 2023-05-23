import React, { useState } from 'react';
import { useEffect } from 'react';
import { deletePostAction, fetchPostsAction } from '../../store/actions/posts.action.js';
import { deletePostAsync } from '../API.js';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation.jsx';
import { PostItem } from '../PostItem/PostItem.jsx';
import langContext from "../../Providers/langContext";

export function PostDashboard() {

  const posts = useSelector((state) => state.posts.items);
  const dispatch = useDispatch();
  const [lang, setLang] = useState('en');
  const langContextObj = {
      value: lang,
      setLang: setLang,
  }
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

  return (
    <div className="post-dashboard">
      <langContext.Provider value={langContextObj}>
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
      </langContext.Provider>
    </div>
    );
  }
    
export default PostDashboard;