import { Link } from 'react-router-dom'
import './styles/Chip.css'

const Chip = ({ label, onClick, active, to }) => {
    return (
        to ? 
            <Link 
                className={`chip${active ? ' chip-active' : ''}`}
                to={to}
                onClick={onClick}
                title={label}
            >
                {label}
            </Link>
        :
            <div 
                className={`chip${active ? ' chip-active' : ''}`}
                onClick={onClick}
                title={label}
            >
                {label}
            </div>
    )
}

export default Chip