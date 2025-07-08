import { useRef, useLayoutEffect } from "react";
import styles from "./ImageForm.module.css"

const ImageForm = ({ addImage, album, imageUpdate }) => {
    const titleRef = useRef(null);
    const urlRef = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (imageUpdate.length > 0) {
            addImage('UPDATE', { id: imageUpdate.id, title: titleRef.current.value, url: urlRef.current.value });
            titleRef.current.value = "";
            urlRef.current.value = "";
        }
        else {
            addImage('INSERT', { title: titleRef.current.value, url: urlRef.current.value });
            titleRef.current.value = "";
            urlRef.current.value = "";
        }
    }

    useLayoutEffect(() => {
        if (imageUpdate.length > 0 && titleRef.current && urlRef.current) {
            titleRef.current.value = imageUpdate.title;
            urlRef.current.value = imageUpdate.url;
        }
    }, [imageUpdate])

    const handleClear = () => {
        titleRef.current.value = "";
        urlRef.current.value = "";
    }

    return (
        <div className={styles.imageForm_imageForm}>
            <span>Add image to {album.name}</span>
            <form onSubmit={handleSubmit}>
                <input required="" placeholder="Title" ref={titleRef} />
                <input required="" placeholder="Image URL" ref={urlRef} />
                <div className={styles.imageForm_actions}>
                    <button type="button" onClick={handleClear}>Clear</button>
                    <button type="submit">{imageUpdate.length > 0 ? "Update" : "Add"}</button>
                </div>
            </form>
        </div>
    )
}

export default ImageForm;