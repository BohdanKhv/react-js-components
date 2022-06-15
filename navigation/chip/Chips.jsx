import { useRef, useEffect, useState } from 'react'
import { arrowIcon } from '../../../constants/icons'
import { IconButton } from '../../'
import './styles/Chips.css'

const Chips = ({children, fixed}) => {
    const [scrollLeft, setScrollLeft] = useState(0);
    const chipsRef = useRef(null);

    const onWheel = (e) => {
        if (e.deltaY > 0) {
            chipsRef.current.scrollLeft  += 100
            setScrollLeft(chipsRef.current.scrollLeft)
        } else {
            chipsRef.current.scrollLeft  -= 100
            setScrollLeft(chipsRef.current.scrollLeft)
        }
    }

    return (
        <div 
            className={`chips${fixed ? ' chips-fixed' : ''}`}
        >
            { scrollLeft !== 0 &&
            <div className="chip-prev">
                <IconButton
                    icon={arrowIcon}
                    color="secondary"
                    size="sm"
                    onClick={() => {
                        chipsRef.current.scrollLeft -= 100;
                        setScrollLeft(chipsRef.current.scrollLeft)
                    }}
                />
            </div>
            }
            <div 
                className="chips-flex"
                ref={chipsRef}
                onWheel={onWheel}
            >
                {children}
            </div>
            { chipsRef.current && scrollLeft < chipsRef.current.scrollWidth - chipsRef.current.clientWidth &&
                <div className="chip-next">
                    <IconButton
                        icon={arrowIcon}
                        color="secondary"
                        size="sm"
                        onClick={() => {
                            chipsRef.current.scrollLeft += 100;
                            setScrollLeft(chipsRef.current.scrollLeft)
                        }}
                    />
                </div>
            }
        </div>
    )
}

export default Chips