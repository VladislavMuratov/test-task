import './button.css'

function Button({ text, typeOfButton, onClick }) {

    return (
        <>
            <button className={typeOfButton} onClick={onClick}>{text}</button>
        </>
    )
}

export default Button
