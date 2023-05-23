import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { object, string } from 'yup';
import langContext from '../../Providers/langContext';
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
  
  let postSchema = object({
    title: string().required().max(10),
    author: string().required().min(2),
  })

  const lang = useContext(langContext);

  async function addPost (post) {
    try {
      const nextId = Math.max(posts.map(p => p.id)) + 1;
      const newPost = { id: nextId, ...post };
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

  async function handleSubmit(value) {
    // @value from Formik form
    if (postId) {
      updatePost( postId, {...value});
    } else {
      addPost(value);
      setTitle('');
      setBody('');
      setImageUrl('');
      setAuthor('');
    }
    navigate('/')
  };

  function validation(values) {
    const errors = {};

    if (!values.author.length) {
      errors.author = 'Required';
    }
    
    return errors;
  };

  const buttonName = postId ? 'Update' : 'Add Post';

  return (
    <div>
      <langContext.Provider value={'en'}>
        <Navigation/>
        <Formik
          initialValues={{
            title: title,
            body: body,
            imageUrl: imageUrl,
            author: author
          }}
          onSubmit={handleSubmit}
          enableReinitialize={true}
          // validate={validation}
          validationSchema={postSchema}
        >
          {
            (formik) => (
              <Form className='post-form'>
                <div>
                  <label htmlFor="title">Title:</label>
                  <Field
                    name="title"
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="body">Body:</label>
                  <Field
                    name="body"
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="imageUrl">Image:</label>
                  <Field
                    name="imageUrl"
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="author">Author:</label>
                  <Field
                    name="author"
                    type="text"
                  />
                  <ErrorMessage name="author" component="div" />
                </div>
                <button type="submit" disabled={formik.isSubmitting || !formik.dirty || !formik.isValid}>{buttonName}</button>
              </Form>
            )
          }
          
        </Formik>
      </langContext.Provider>
    </div>
  );
}

export default PostForm;