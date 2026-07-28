import './input.css'

function Input({ text, placeholder, onChange, value }) {

    return (
        <div className='input-block'>
            <span className='input-name'>{text}</span>
            <input type="text" placeholder={placeholder} className='input' onChange={onChange} value={value} />
        </div>
    )
}

export default Input
