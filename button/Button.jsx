import './styles/Button.css';

const Button = ({
    children,
    onClick,
    startIcon,
    endIcon,
    variant,
    size,
    color,
    disabled,
    loading,
}) => {

    return (
        <button
            className={`btn${variant ? ` btn-${variant}` : ''}${size ? ` btn-${size}` : ''}${color ? ` btn-${color}` : ''}${disabled ? ' btn-disabled' : ''}${loading ? ' btn-loading' : ''}`}
            onClick={onClick ? onClick : null}
            disabled={disabled}
        >
            { loading ? 
                'Loading...'
            :
                <>
                    {startIcon && <span className="btn-start-icon">{startIcon}</span>}
                    {children}
                    {endIcon && <span className="btn-end-icon">{endIcon}</span>}
                </>
            }

        </button>
    )
}

export default Button