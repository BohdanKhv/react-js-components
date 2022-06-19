import { Link } from 'react-router-dom'
import './styles/BottomNavigationAction.css'


const BottomNavigationAction = ({
    icon,
    label,
    to,
    active,
}) => {
    return (
        <Link
            className={`bottom-navigation-action ${active ? ' bottom-navigation-action-active' : ''}`}
            to={to}
        >
            {icon &&
                <div className="bottom-navigation-action-icon">
                    {icon}
                </div>
            }
            <div className="bottom-navigation-action-label">
                {label}
            </div>
        </Link>
    )
}

export default BottomNavigationAction