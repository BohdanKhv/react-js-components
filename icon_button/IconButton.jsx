import './styles/IconButton.css';

const IconButton = ({
    icon,
    onClick,
    size,
    color,
    disabled,
}) => {

    return (
        <button
            className={`icon-btn${size ? ` icon-btn-${size}` : ''}${color ? ` icon-btn-${color}` : ''}${disabled ? ' icon-btn-disabled' : ''}`}
            onClick={onClick ? onClick : null}
            disabled={disabled}
        >
            {icon}
        </button>
    )
}

export default IconButton