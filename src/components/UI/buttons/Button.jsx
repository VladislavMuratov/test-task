import './button.css'

function Button({ text, typeOfButton }) {

    return (
        <>
            <button className={typeOfButton}>{text}</button>
        </>
    )
}

export default Button
