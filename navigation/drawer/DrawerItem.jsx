import { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/DrawerItem.css'

const DrawerItem = ({children, label, icon, to, isTitle, droppable, isOpen }) => {
    const [open, setOpen] = useState(isOpen ? isOpen : false)

    const closeDrawer = () => {
        if (document.querySelector('.close-drawer')) document.querySelector('.close-drawer').click();
    }

    return (
        <>
        {!droppable ? 
            isTitle ?
                <div 
                to={to || '/'} 
                className={`drawer-item${icon ? ' drawer-has-icon' : ''} drawer-item-title`}
                >
                    {icon ? <span className="drawer-item-icon">{icon}</span> : null}
                    <div className="drawer-item-label">
                        {label}
                    </div>
                </div>
            :
                <Link 
                    to={to || '/'} 
                    className={`drawer-item${icon ? ' drawer-has-icon' : ''}`}
                    onClick={closeDrawer}
                >
                    {icon ? <span className="drawer-item-icon">{icon}</span> : null}
                    <div className="drawer-item-label">
                        {label}
                    </div>
                </Link>
        :
            <div className={open ? 'drawer-item-open' : undefined }>
                <div 
                    className={`drawer-item drawer-droppable-item${icon ? ' drawer-has-icon' : ''}${isTitle ? ' drawer-item-title' : ''}`}
                    onClick={() => setOpen(!open)}
                >
                    {icon ? <span className="drawer-item-icon">{icon}</span> : null}
                    <div className="drawer-item-label">
                        {label}
                    </div>
                    <div className="drawer-item-drop">{droppable}</div> 
                </div>
                {open ?
                    <div className="drawer-item-children">
                        {children}
                    </div>
                : null}
            </div>
        }
        </>
    )
}

export default DrawerItem