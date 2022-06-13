import './styles/DrawerDrop.css'

const DrawerDrop = ({children, label, startIcon, endIcon}) => {
    return (
        <div className="drawer-drop">
            {startIcon ? <span className="drawer-drop-start-icon">{startIcon}</span> : null}{label}{endIcon ? <span className="drawer-drop-end-icon">{endIcon}</span> : null}
            <div className="drawer-drop-content">
                {children}
            </div>
        </div>
    )
}

export default DrawerDrop