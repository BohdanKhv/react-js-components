import './styles/Chip.css'

const Chip = ({ label, onClick, active, to }) => {
    return (
        <a 
            className={`chip${active ? ' chip-active' : ''}`}
            href={to || undefined}
            onClick={onClick}
            title={label}
        >
            {label}
        </a>
    )
}

export default Chip