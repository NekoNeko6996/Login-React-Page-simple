import { Link } from "react-router-dom";

import '../../css/LoginNavigation.css'

export default function LoginNavigation() {
    return (
        <div id="logNavigationBar">
            <Link to={`/home`} className="logNavigation-link">Home</Link>
            <Link to={`/Contact`} className="logNavigation-link">Contact</Link>
            <Link to={`/About`} className="logNavigation-link">About</Link>

            <Link to={`/login`} className="logNavigation-link" id="logNav-Login">Login</Link>
            <Link to={`/register`} className="logNavigation-link" id="logNav-register">Register</Link>
        </div>
    )
}