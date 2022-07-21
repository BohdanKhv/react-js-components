import { useEffect } from 'react';
import "./styles/Menu.css"

const Menu = ({ children, open, setOpen }) => {

    const openMenuOnClick = (e) => {
        if(open) {
            if (e.target.classList.contains('menu') || e.target.classList.contains('menu-item') || e.target.classList.contains('menu-btn')) {
                
            } else {
                setOpen(false);
            }
        }
    }


    useEffect(() => {
        window.addEventListener('click', openMenuOnClick);

        return () => {
            window.removeEventListener('click', openMenuOnClick);
        }
    }, [open]);

    return (
        <div className={`menu${open ? ' menu-open' : ' menu-hidden'}`}>
            {children}
        </div>
    )
}

export default Menu


{/* <Menu open={openMenu} setOpen={setOpenMenu}>
<div className="menu-item border-bottom" onClick={() => {dispatch(setTheme(theme === "light" ? 'dark' : 'light'))}}><span className="menu-item-icon">{theme === "light" ? sunIcon : moonIcon}</span>Theme</div>
<div className="menu-item"><span className="menu-item-icon">{loginIcon}</span>Login</div>
<div className="menu-item"><span className="menu-item-icon">{registerIcon}</span>Register</div>
</Menu> */}