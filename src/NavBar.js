export default function NavBar () {
    return (
        <nav className="nav">
            <a 
                href = "/" className = "site-title">Site name
            </a>
            <ul>
                    <CustomEntry href = "/plan">Plan nutricional</CustomEntry>
                    <CustomEntry href = "/antropometry">Antropometría</CustomEntry>
                    <CustomEntry href = "/database">Base de Alimentos</CustomEntry>
            </ul>
        </nav>
    );
}

function CustomEntry({href, children, ...props}){
    const path = window.location.pathname;
    return (
        <li className={(path === href) ? "active" : ""}>
            <a href = {href} {...props}>{children}</a>
        </li>
    );
}