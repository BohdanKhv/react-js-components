import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { closeIcon } from '../../../constants/icons'
import { IconButton } from '../../'
import './styles/Drawer.css'

const Drawer = ({children, side, icon, label, secondary, isOpen, setIsOpen}) => {

    const handleResize = () => {
        setIsOpen(window.innerWidth > 768)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div
            className={`drawer${side ? ` drawer-${side}`: ' drawer-left'}${isOpen ? ' drawer-open' : ''}`}
        >
            <div>
                {(icon || label) &&
                    <div className="drawer-header">
                        {icon && <Link to='/' className="drawer-header-icon">{icon}</Link>}
                        {label && 
                        <div className="drawer-header-label">
                            {label} 
                            <div className="drawer-header-secondary">
                                {secondary}
                            </div>
                        </div>}
                        {(window.innerWidth < 768 && isOpen) &&
                            <div className="flex align-center">
                                <IconButton
                                    icon={closeIcon}
                                    color="secondary"
                                    size="sm"
                                    onClick={() => setIsOpen(false)}
                                />
                            </div>
                        }
                    </div>
                }
                {children}
            </div>
        </div>
    )
}

export default Drawer