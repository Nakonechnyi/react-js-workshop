import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <div id="sidebar">

            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>PostDashboard</Link>
                    </li>
                    <li>
                        <Link to={'/create'}>PostForm</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}