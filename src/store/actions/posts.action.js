import { getPostsAsync } from "../../components/API";

export const CREATE_POST = '[Post] add Post';
export const UPDATE_POST = '[Post] update Post';
export const ADD_POSTS = '[Post] add Posts';
export const DELETE_POST = '[Post] delete Post';

export function createPostAction(payload) {
    return {
        type: CREATE_POST,
        payload,
    }
}

export function addPostsAction(payload) {
    return {
        type: ADD_POSTS,
        payload,
    }
}

export function updatePostAction(payload) {
    return {
        type: UPDATE_POST,
        payload,
    }
}

export function deletePostAction(payload) {
    return {
        type: DELETE_POST,
        payload,
    }
}

export function fetchPostsAction() {
    return async function(dispatch) {
        try {
          const posts = await getPostsAsync();
          dispatch(addPostsAction(posts));
        } catch (e) {
          throw new Error(e.message);
        }
      }
}