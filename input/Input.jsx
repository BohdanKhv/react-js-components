import { useState, useEffect, useRef } from 'react';
import './styles/Input.css';

const Input = ({children, icon, type, name, label, value, onChange, bodyStyle, inputStyle, labelStyle, minLength, maxLength}) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.name !== name) {
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
            className={`input${isFocused ? ' focused' : ''}`}
            onClick={() => {
                setIsFocused(true);
                inputRef.current.focus();
            }}
            style={bodyStyle}
        >
            {children && (
                <div className={`input-pre${isFocused || value || ( inputRef.current && inputRef.current.value.length !== 0 ) ? ' focused' : ''}`}>
                    <p>
                        {children}
                    </p>
                </div>
            )}
            <input
                style={inputStyle}
                ref={inputRef}
                className={`${isFocused || value || ( inputRef.current && inputRef.current.value.length !== 0 ) ? 'focused' : ''}`}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={label}
                minLength={minLength}
                maxLength={maxLength}
            />
            <div
                style={labelStyle}
                className={`input-label${isFocused || value || ( inputRef.current && inputRef.current.value.length !== 0 ) ? ' focused' : ''}`}
            >
                {icon}
                {label}
            </div>
        </div>
    )
}

export default Input