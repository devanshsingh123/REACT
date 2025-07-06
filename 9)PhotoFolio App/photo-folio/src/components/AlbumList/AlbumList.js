import styles from "./AlbumList.module.css"
import AlbumForm from "../AlbumForm/AlbumForm"
import { useEffect, useState } from "react"
import photos from "../../images/photos.png"
import { createAlbumInDB,getAlbum } from "../../db/dbOps"


const AlbumList = ({screenFlag,handleAlbumClick}) => {

    const [albumformFlag, setFlag] = useState(false);
    const [imageListFlag,setImage] = useState(false)

    const [albums, setAlbum] = useState([]);

    useEffect(() => {
        setFlag(false);
        const a = [{ name: "album 1" }, { name: "album 2" }, { name: "album 3" }]
        async function fetchAlbum() {
        const data = await getAlbum();
        setAlbum(data)
        }
        fetchAlbum();
    }, [])

   

    const handleAddAlbum = (flag) => {
        console.log(flag)
        setFlag(!flag);
    }

    const createAlbum =async  (name) =>{
     const albumId = await createAlbumInDB(name);
     console.log(albumId);  
     setAlbum(prev=>[...prev,{id:albumId,name:name}]);
    }

    return (
        <div>
            {albumformFlag && <AlbumForm createAlbum={createAlbum}/>}
            <div className={styles.albumsList_top}>
                <h3>Your albums</h3>
                <button onClick={() => { handleAddAlbum(albumformFlag) }} className={albumformFlag ? styles.albumsList_active : ""}>{!albumformFlag ? "Add album" : "Cancel"}</button>
            </div>
            <div className={styles.albumsList}>
            {albums.map((album, i) => (
                <div className={styles.albumsList_album} key={i} onClick={()=>{handleAlbumClick(screenFlag,album.id)}}>
                    <img src={photos} alt={album.name} />
                    <span>{album.name}</span>
                </div>
            ))}
            </div>
        </div>
    )
}

export default AlbumList;