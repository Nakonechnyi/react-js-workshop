import { ADD_POSTS, CREATE_POST, DELETE_POST, UPDATE_POST } from "../actions/posts.action";

const initialState = {
    items: [],
    filters: [],
}

export default function postsReducer(state = initialState, {type, payload}) {
    switch (type) {
        case CREATE_POST:
            return { ...state, items: [...state.items, payload] };

        case UPDATE_POST:
            return { ...state, items: state.items.map((post) => {
                if (post.id === payload.id) {
                    return payload;
                } else {
                    return post;
                }})
            };

        case ADD_POSTS:
            return { ...state, items: [...payload] };

        case DELETE_POST:
            return { ...state, items: state.items.filter((post) => post.id !== payload)};

        default:
            return state;
    }
}