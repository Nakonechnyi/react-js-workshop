import React, { useState } from 'react';

export function PostForm(props) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ title, body, image, author });
    setTitle('');
    setBody('');
    setImage('');
    setAuthor('');
  };

  return (
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
        <label htmlFor="image">Image:</label>
        <textarea
          id="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
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
      <button type="submit">Add Post</button>
    </form>
  );
}

export default PostForm;