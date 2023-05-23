import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePostAction } from "../../store/actions/posts.action";
import { deletePostAsync } from "../API";

export function PostItem({id, imageUrl, title, author}) {
    const link = "/post/update/" + id;
    const dispatch = useDispatch();

    async function deletePost(id) {
        try {
            await deletePostAsync(id);
            dispatch(deletePostAction(id));
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="post-item" style={{ backgroundImage: `url(${imageUrl})` }} >
            <Link to={link}>
                <h2>{title}</h2>
                <p>{author}</p>
            </Link>
            <button 
                className="delete-button" 
                color={"black"}
                type={"button"} 
                onClick={(e) => {
                    e.stopPropagation();
                    deletePost(id);
            }}>X</button>
        </div>
    );
}