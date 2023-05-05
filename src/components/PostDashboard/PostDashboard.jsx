import React, { useState } from 'react';
import {PostForm} from '../PostForm/PostForm.jsx'

export function PostDashboard() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Post 1',
      description: 'Lorem ipsum dolor sit amet',
      imageUrl: 'https://picsum.photos/200',
      author: 'Bobby',
    },
    {
      id: 2,
      title: 'Post 2',
      description: 'Lorem ipsum dolor sit amet',
      imageUrl: 'https://picsum.photos/201',
      author: 'Bobby',
    },
    {
      id: 3,
      title: 'Post 3',
      description: 'Lorem ipsum dolor sit amet',
      imageUrl: 'https://picsum.photos/202',
      author: 'Bobby',
    },
    {
      id: 4,
      title: 'Post 4',
      description: 'Lorem ipsum dolor sit amet',
      imageUrl: 'https://picsum.photos/204',
      author: 'Bobby',
    },
    {
      id: 5,
      title: 'Post 5',
      description: 'Lorem ipsum dolor sit amet',
      imageUrl: 'https://picsum.photos/205',
      author: 'Bobby',
    },
    {
      id: 6,
      title: 'Post 6',
      description: 'Lorem ipsum dolor sit amet',
      imageUrl: 'https://picsum.photos/206',
      author: 'Bobby',
    },
    {
      id: 7,
      title: 'Post 7',
      description: 'Lorem ipsum dolor sit amet',
      imageUrl: 'https://picsum.photos/207',
      author: 'Bobby',
    },
    {
      id: 8,
      title: 'Post 8',
      description: 'Lorem ipsum dolor sit amet',
      imageUrl: 'https://picsum.photos/208',
      author: 'Bobby',
    },
    {
      id: 9,
      title: 'Post 9',
      description: 'Lorem ipsum dolor sit amet',
      imageUrl: 'https://picsum.photos/209',
      author: 'Bobby',
    }
  ]);

  const addPost = (post) => {
    const newPost = { id: posts.length + 1, ...post };
    setPosts([...posts, newPost]);
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <div className="post-dashboard">
      <p>All Posts</p>
      <div className="post-list">
        {posts.map((post) => (
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