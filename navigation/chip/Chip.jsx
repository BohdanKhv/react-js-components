import './styles/Chip.css'

const Chip = ({ label, onClick, active }) => {
    return (
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