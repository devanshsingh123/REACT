import { useRef } from "react"
import styles from "./AlbumForm.module.css"

const AlbumForm = ({ createAlbum }) => {
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        createAlbum(inputRef.current.value);
        inputRef.current.value="";
    }

    const handleClear =()=>{
        inputRef.current.value="";
    }

    return (
        <div className={styles.albumForm_albumForm}>
            <span>Create an album</span>
            <form onSubmit={handleSubmit}>
                <input required="" placeholder="Album Name" ref={inputRef} />
                <button type="button" onClick={handleClear}>Clear</button>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default AlbumForm;