import { useState } from 'react'
import { Drawer, DrawerItem, Nav } from '../../components'
import { arrowIcon, gridIcon, homeIcon } from '../../constants/icons'

const NavContainer = ({children}) => {
    const [isOpenDrawer, setIsOpenDrawer] = useState(window.innerWidth > 768);

    return (
        <div className="flex h-100">
            <div className={`${isOpenDrawer ? 'side-bar-width' : 'w-0'}${window.innerWidth < 768 ? ' pos-absolute' : ""}`}>
                <Drawer
                    setIsOpen={setIsOpenDrawer}
                    isOpen={isOpenDrawer}
                    icon={homeIcon}
                    label="Header"
                    secondary="Welcome to the home page"
                >
                    <DrawerItem 
                        label="Menu"
                        isTitle={true}
                        size="lg"
                    />
                    <DrawerItem 
                        label="Home"
                        icon={homeIcon}
                    />
                    <DrawerItem 
                        label="Drop list" 
                        icon={gridIcon}
                        droppable={arrowIcon}
                        isOpen={false}
                    >
                        <DrawerItem 
                            label={"All"}
                            to={`/link`}
                        />
                        <DrawerItem 
                            label={"Other"}
                            to={`/link`}
                        />
                        <DrawerItem 
                            label={"Other 2"}
                            to={`/link`}
                        />
                        <DrawerItem 
                            label={"Other 3"}
                            to={`/link`}
                        />
                        <DrawerItem 
                            label={"Title"}
                            isTitle
                        />
                        </DrawerItem>
                </Drawer>
            </div>
            <div className="flex-grow-1 w-100 w-min-0">
                <div className="flex flex-column">
                    <Nav
                        setIsOpenDrawer={setIsOpenDrawer}
                        isOpenDrawer={isOpenDrawer}
                    />
                    {children}
                </div>
            </div>
        </div>
    )
}

export default NavContainer