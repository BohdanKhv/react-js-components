import './styles/Chip.css'

const Chip = ({ label, icon, onClick, active }) => {
    return (
        <div 
            className={`chip${active ? ' chip-active' : ''}`}
            onClick={onClick}
            title={label}
        >
            {icon && <div className="chip-icon">{icon}</div>}
            {label}
        </div>
    )
}

export default Chip