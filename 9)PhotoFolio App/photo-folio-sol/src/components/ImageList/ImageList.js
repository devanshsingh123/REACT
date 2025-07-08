import styles from "./ImageList.module.css";
import ImageForm from "../ImageForm/ImageForm";
import ModalCarousel from "../ModalCarousel/ModalCarousel"; // Import here
import back from "../../images/back.png";
import edit from "../../images/edit.png";
import trashbin from "../../images/trashbin.png";
import {
  addImageToAlbum,
  getImagesOfAlbum,
  removeImage,
  updateImage
} from "../../db/dbOps";

import { useState, useEffect } from "react";

const ImageList = ({ screenFlag, handleClick, albumId }) => {
  const [imageformFlag, setFlag] = useState(false);
  const [images, setImage] = useState([]);
  const [isHovered, setHovered] = useState(null);
  const [imageUpdate, setImageUpdate] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal carousel state
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setFlag(false);
    async function fetchData() {
      const images = await getImagesOfAlbum(albumId.id);
      setImage(images);
      setLoading(false);
    }
    fetchData();
  }, [albumId]);

  const addImageForm = (flag) => {
    setFlag(!flag);
  };

  const addImage = async (call, image, flag) => {
    let id = null;
    if (call === "INSERT") {
      id = await addImageToAlbum(albumId.id, image.url, image.title);
      setImage((prev) => [...prev, { id: id, ...image }]);
    } else if (call === "UPDATE") {
      await updateImage(albumId.id, image);
      setImage((prevImages) =>
        prevImages.map((img) =>
          img.id === image.id ? { ...img, ...image } : img
        )
      );
      setFlag(false);
    }
  };

  const handleEdit = (id, title, url) => {
    setImageUpdate({ id: id, title: title, url: url });
    setFlag(true);
  };

  const handleDelete = async (albumId, imageId) => {
    await removeImage(albumId, imageId);
    setImage((prev) => prev.filter((img) => img.id !== imageId));
  };

  // Modal handlers
  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      {imageformFlag && (
        <ImageForm
          addImage={addImage}
          imageUpdate={imageUpdate}
          album={albumId}
        />
      )}
      <div className={styles.imageList_top}>
        <span>
          <img
            src={back}
            alt="back"
            onClick={() => {
              handleClick(screenFlag);
            }}
          />
        </span>
        <h3>
          {images.length
            ? `${images.length} images found in the album.`
            : "No images found in the album."}
        </h3>
        <button
          className={imageformFlag ? styles.imageList_active : ""}
          onClick={() => {
            addImageForm(imageformFlag);
          }}
        >
          {imageformFlag ? "Cancel" : "Add Image"}{" "}
        </button>
      </div>
      <div className={styles.imageList_imageList}>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "30vh",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#a0a0f9",
              marginLeft: "100%"
            }}
          >
            Loading...
          </div>
        ) : (
          images.map((image, index) => (
            <div
              className={styles.imageList_image}
              key={image.id}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => openModal(index)} // 👈 open modal on click
            >
              <div
                className={`${styles.imageList_update} ${
                  isHovered === index ? styles.imageList_active : ""
                }`}
              >
                <img
                  src={edit}
                  alt="update"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit(image.id, image.title, image.url);
                  }}
                />
              </div>
              <div
                className={`${styles.imageList_delete} ${
                  isHovered === index ? styles.imageList_active : ""
                }`}
              >
                <img
                  src={trashbin}
                  alt="delete"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(albumId.id, image.id);
                  }}
                />
              </div>
              <img src={image.url} alt={image.title} />
              <span>{image.title}</span>
            </div>
          ))
        )}
      </div>

      {/* Render Modal Carousel */}
      {isModalOpen && (
        <ModalCarousel
          images={images}
          currentIndex={currentIndex}
          onClose={closeModal}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </div>
  );
};

export default ImageList;
