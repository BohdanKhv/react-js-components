import { Link } from 'react-router-dom'
import './styles/Drawer.css'

const Drawer = ({children, side, icon, label, secondary, isOpen, setIsOpen}) => {
    return (
        <div
            className={`drawer${side ? ` drawer-${side}`: ' drawer-left'}${isOpen ? ' drawer-open' : ' drawer-closed'}`}
        >
            <div>
                {(icon || label) &&
                    <div className="drawer-header">
                        {icon ? <Link to='/' className="drawer-header-icon">{icon}</Link> : null}
                        {label ? <div className="drawer-header-label">
                            {label} 
                            <div className="drawer-header-secondary">
                                {secondary}
                            </div>
                            </div> : null}
                    </div>
                }
                {children}
            </div>
        </div>
    )
}

export default Drawer