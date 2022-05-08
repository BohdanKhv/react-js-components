import { useState, useEffect, useRef } from 'react';
import './styles/Input.css';

const Input = ({type, name, label, value, onChange}) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.name !== name && inputRef.current.value.length === 0) {
                setIsFocused(false);
            }
        }
        
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [name]);

    return (
        <div
            className="input"
            onClick={() => {
                setIsFocused(true);
                inputRef.current.focus();
            }}
        >
            <input
                ref={inputRef}
                className={`${isFocused ? 'focused' : ''}`}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={label}
            />
            <div
                className={`input-label${isFocused ? ' focused' : ''}`}
            >
                {label}
            </div>
        </div>
    )
}

export default Input