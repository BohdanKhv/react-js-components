import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { closeIcon } from '../../../constants/icons'
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
                        {window.innerWidth < 768 ? 
                            <div className="drawer-header-icon" onClick={() => setIsOpen(false)}>
                                {closeIcon}
                            </div>
                        :
                            icon ? <Link to='/' className="drawer-header-icon">{icon}</Link> : null
                        }
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