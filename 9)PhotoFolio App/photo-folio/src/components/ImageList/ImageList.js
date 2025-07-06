import styles from "./ImageList.module.css"
import ImageForm from "../ImageForm/ImageForm";
import back from "../../images/back.png"
import edit from "../../images/edit.png"
import trashbin from "../../images/trashbin.png"
import { addImageToAlbum, getImagesOfAlbum } from "../../db/dbOps";

import { useState, useEffect } from "react";

const ImageList = ({ screenFlag, handleClick, albumId }) => {
    const [imageformFlag, setFlag] = useState(false);
    const [images, setImage] = useState([]);

    useEffect(() => {
        setFlag(false);
        console.log(albumId);
        async function fetchData() {
            const images = await getImagesOfAlbum(albumId);
            setImage(images);
        }
        fetchData();
    }, [albumId])


    const addImageForm = (flag) => {
        setFlag(!flag)
    }

    const addImage = (image) => {
        const id = addImageToAlbum(albumId, image.url, image.title)
        setImage(prev => [...prev, { id: id, ...image }])
    }



    return (
        <div>
            {imageformFlag && <ImageForm addImage={addImage} />}
            <div className={styles.imageList_top}>
                <span>
                    <img src={back} alt="back" onClick={() => { handleClick(screenFlag) }} />
                </span>
                <h3>{images.length ? `${images.length} images found in the album.` : "No images found in the album."}</h3>
                <button className={imageformFlag ? styles.imageList_active : ""} onClick={() => { addImageForm(imageformFlag) }}>{imageformFlag ? "Cancel" : "Add Image"} </button>
            </div>
            <div className={styles.imageList_imageList}>
                {images.map((image, index) => (
                    <div className={styles.imageList_image} key={index}>
                        <div className={styles.imageList_update} false>
                            <img src={edit} alt="update" />
                        </div>
                        <div className={styles.imageList_delete} false>
                            <img src={trashbin} alt="delete" />
                        </div>
                        <img src={image.url} alt="test" />
                        <span>{image.title}</span>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ImageList;