import styles from "./AlbumList.module.css"
import AlbumForm from "../AlbumForm/AlbumForm"
import { useEffect, useState } from "react"
import photos from "../../images/photos.png"
import { createAlbumInDB, getAlbum } from "../../db/dbOps"


const AlbumList = ({ screenFlag, handleAlbumClick }) => {

    const [albumformFlag, setFlag] = useState(false);
    const [loading, setLoading] = useState(true);

    const [albums, setAlbum] = useState([]);

    useEffect(() => {
        setFlag(false);
        async function fetchAlbum() {
            const data = await getAlbum();
            setAlbum(data)
            setLoading(false);
        }
        fetchAlbum();
    }, [])



    const handleAddAlbum = (flag) => {
        //console.log(flag)
        setFlag(!flag);
    }

    const createAlbum = async (name) => {
        const albumId = await createAlbumInDB(name);
        //console.log(albumId);
        setAlbum(prev => [...prev, { id: albumId, name: name }]);
    }

    return (
        <div>
            {albumformFlag && <AlbumForm createAlbum={createAlbum} />}
            <div className={styles.albumsList_top}>
                <h3>Your albums</h3>
                <button onClick={() => { handleAddAlbum(albumformFlag) }} className={albumformFlag ? styles.albumsList_active : ""}>{!albumformFlag ? "Add album" : "Cancel"}</button>
            </div>
            <div className={styles.albumsList}>
                {loading ? <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "30vh", // fill full screen height
                        fontSize: "1.5rem", // larger text
                        fontWeight: "bold",
                        color: "#a0a0f9", // soft blue
                        marginLeft: "100%"
                    }}
                >
                    Loading...
                </div> : albums.map((album, i) => (
                    <div className={styles.albumsList_album} key={i} onClick={() => { handleAlbumClick(screenFlag, album.id, album.name) }}>
                        <img src={photos} alt={album.name} />
                        <span>{album.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AlbumList;