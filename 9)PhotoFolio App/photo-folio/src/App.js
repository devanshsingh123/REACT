import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import AlbumList from "./components/AlbumList/AlbumList";
import ImageList from "./components/ImageList/ImageList";


function App() {
  const [screenFlag, setFlag] = useState(false);
  const [clickedAlbum, setAlbum] = useState("");

  useEffect(() => {
    setFlag(false);
  }, [])

  const handleClick = (flag) => {
    setFlag(!flag);
  }

  const handleAlbumClick = (flag, id) => {
    setFlag(!flag);
    setAlbum(id)
  }

  return (
    <>
      <Navbar />
      <div className={styles.App_content}>
        {screenFlag ? <ImageList screenFlag={screenFlag} albumId={clickedAlbum} handleClick={handleClick} /> :
          <AlbumList screenFlag={screenFlag} handleAlbumClick={handleAlbumClick} />}
      </div>
    </>
  );
}

export default App;
