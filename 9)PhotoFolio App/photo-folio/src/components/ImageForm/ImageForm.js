import { useRef, useState } from "react";
import styles from "./ImageForm.module.css"

const ImageForm = ({addImage})=>{
    const titleRef = useRef("");
    const urlRef  = useRef("");


    const handleSubmit = (e)=>{
     e.preventDefault();
     addImage({title:titleRef.current.value,url:urlRef.current.value});
     titleRef.current.value="";
     urlRef.current.value="";
    }

    return (
       <div className={styles.imageForm_imageForm}>
        <span>Add image to testalbumxyz</span>
        <form onSubmit={handleSubmit}>
            <input required="" placeholder="Title" ref={titleRef}/>
            <input required="" placeholder="Image URL" ref={urlRef}/>
            <div className={styles.imageForm_actions}>
                <button type="button">Clear</button>
                <button type="submit">Add</button>
            </div>
        </form>
       </div>
    )
}

export default ImageForm;