import { NavLink } from "react-router-dom";

const navlinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
];

const Menu = () => {
    return (
        <>
            {navlinks.map((link) => (
                <NavLink key={link.path} to={link.path}>
                    {link.name}
                </NavLink>
            ))}
        </>
    )
};

export default Menu;
