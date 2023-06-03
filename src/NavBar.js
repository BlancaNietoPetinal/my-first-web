import { Link, useMatch, useResolvedPath } from "react-router-dom"; // replaces anchor tags

export default function NavBar () {
    return (
        <nav className="nav">
            <Link to = "/" className = "site-title">Site name
            </Link>
            <ul>
                <CustomEntry to = "/plan">Plan nutricional</CustomEntry>
                <CustomEntry to = "/antropometry">Antropometría</CustomEntry>
                <CustomEntry to = "/database">Base de Alimentos</CustomEntry>
                <CustomEntry to = "/login">Log In!</CustomEntry>
            </ul>
        </nav>
    );
}

function CustomEntry({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to = {to} {...props}>{children}</Link>
        </li>
    );
}