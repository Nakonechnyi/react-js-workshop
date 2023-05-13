import { applyMiddleware, combineReducers, createStore } from 'redux';
import postsReducer from "./reducers/posts.reducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import { logger } from 'redux-logger/src';
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({posts: postsReducer});
export const store = createStore(
    rootReducer,
    composeWithDevTools(
    applyMiddleware(logger, thunkMiddleware)
))

export default store;