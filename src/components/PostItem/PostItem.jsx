import { Link } from "react-router-dom";

export function PostItem({id, imageUrl, title, author}) {
    const link = "/post/update/" + id;
    return (
        <Link to={link} className="post-item" style={{ backgroundImage: `url(${imageUrl})` }}>
            <button className="delete-button" onClick={() => deletePost(post.id)} >X</button>
            <h2>{title}</h2>
            <p>{author}</p>
        </Link>
    );
}