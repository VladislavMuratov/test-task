import './input.css'

function Input({ text, placeholder, onChange, value, className }) {

    return (
        <div className='input-block'>
            <span className='input-name'>{text}</span>
            <input type="text" placeholder={placeholder} className={className} onChange={onChange} value={value} />
        </div>
    )
}

export default Input
