import { useState } from 'react'
import './styles/DrawerItem.css'

const DrawerItem = ({children, label, icon, to, isTitle, droppable }) => {
    const [open, setOpen] = useState(false)

    return (
        <>
        {!droppable ? 
            <a href={to || undefined} className={`drawer-item${icon ? ' drawer-has-icon' : ''}${isTitle ? ' drawer-item-title' : ''}`}>
                {icon ? <span className="drawer-item-icon">{icon}</span> : null}
                <div className="drawer-item-label">
                    {label}
                </div>
            </a>
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