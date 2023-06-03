export default function NavBar () {
    return (
        <nav className="nav">
            <a 
                href = "/" className = "site-title">Site name
            </a>
            <ul>
                <li>
                    <a href = "/plan">Plan nutricional</a>
                </li>
                <li>
                    <a href = "/antropometry">Antropometría</a>
                </li>
                <li>
                    <a href = "/database">Base de Alimentos</a>
                </li>
            </ul>
        </nav>
    );
}

// function CustomEntry({href, children, ...props}){
//     const path = window.location.pathname;
//     return (
//         <li className={(path === href) ? "active" : ""}>
//             <a href = {href} {...props}>{children}</a>
//         </li>
//     );
// }