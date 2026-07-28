import './tag.css'

function Tag({ isActive, price, text }) {
    // const [tags, setTags] = useState([{ price: price, isActive: false }])
    return (
        <>
            <span className={isActive}>{price}<span> {text}</span></span >
        </>
    )
}

export default Tag
