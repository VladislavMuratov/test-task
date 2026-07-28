import './tag.css'

function Tag({ isActive, content, onClick }) {
    // const [tags, setTags] = useState([{ price: price, isActive: false }])
    const className = `tag ${isActive ? 'active' : ''}`;
    return (
        <>
            <span className={className} onClick={onClick}>{content}</span >
        </>
    )
}

export default Tag
