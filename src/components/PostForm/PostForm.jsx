import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createPostAction } from '../../store/actions/posts.action';
import { createPostAsync, getPostAsync, updatePostAsync } from '../API';
import { Navigation } from '../Navigation/Navigation';

export function PostForm(props) {
  const { postId } = useParams(); 
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [author, setAuthor] = useState('');

  const posts = useSelector((state) => state.posts.items);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  async function addPost (post) {
    try {
      const newPost = { id: posts.length + 1, ...post };
      const createdPost = await createPostAsync(newPost);
      dispatch(createPostAction(createdPost));
    } catch (e) {
      console.warn(e);
    }
  };

  async function updatePost (id, post) {
    try {
      const updatedPost = await updatePostAsync(id, post);
      dispatch(updatePostAction(updatedPost));
    } catch (e) {
      console.warn(e);
    }
  };

  const loadData = async () => {
    const post = await getPostAsync(postId);
    setTitle(post.title);
    setBody(post.body);
    setImageUrl(post.imageUrl);
    setAuthor(post.author);
  }

  useEffect( () => {
    if (postId) {
      loadData();
    } 
  }, [postId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (postId) {
      updatePost( postId, { title, body, imageUrl, author });
    } else {
      addPost({ title, body, imageUrl, author });
      setTitle('');
      setBody('');
      setImageUrl('');
      setAuthor('');
    }
    navigate('/')
  };

  const buttonName = postId ? 'Update' : 'Add Post';

  return (
    <div>
      <Navigation/>
      <form onSubmit={handleSubmit} className='post-form'>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image:</label>
          <textarea
            id="imageUrl"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <textarea
            id="author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <button type="submit">{buttonName}</button>
      </form>
    </div>
  );
}

export default PostForm;