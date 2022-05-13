import { Link, useLocation } from 'react-router-dom';
import { faqIcon, answeredIcon, askedIcon } from '../../constance/icons';
import './styles/Navbar.css';


const Navbar = ({ links }) => {
    const location = useLocation().pathname;

    return (
        <div className="navbar">
            {links.map((link, index) => (
                <Link
                    key={`navbar-${link.name+index}`}
                    to={`${link.path}`} 
                    className={`navbar-item${location === link.path ? ' active' : ''}`}
                >
                    { link.icon }
                    { link.name }
                    { link.count ? (
                        <p>{link ? link.count : 0}</p>
                    ) : null}
                </Link>
            ))}
        </div>
    )
}

export default Navbar