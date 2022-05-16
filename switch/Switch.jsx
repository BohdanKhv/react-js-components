import './styles/Switch.css';

const Switch = ({onChange, isDisabled}) => {
    return (
        <div class="switch">
            <label>
                <input type="checkbox" onChange={onChange} isdisabled={isDisabled}/>
                <span class="slider round"></span>
            </label>
        </div>
    )
}

export default Switch