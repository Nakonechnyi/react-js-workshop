import { ADD_POSTS, CREATE_POST, DELETE_POST } from "../actions/posts.action";

const initialState = {
    items: [],
    filters: [],
}

export default function postsReducer(state = initialState, {type, payload}) {
    switch (type) {
        case CREATE_POST:
            return { ...state, items: [...state.items, payload] };
            
        case ADD_POSTS:
            return { ...state, items: [...state.items, ...payload] };

        case DELETE_POST:
            return { ...state, items: state.items.filter((post) => post.id !== payload)};

        default:
            return state;
    }
}