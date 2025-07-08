// ModalCarousel.js
import React from "react";
import styles from "./ModalCarousel.module.css";

const ModalCarousel = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✖
        </button>
        <div className={styles.carouselImageWrapper}>
          <button className={styles.prevBtn} onClick={onPrev}>
            ◀
          </button>
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].title}
            className={styles.carouselImage}
          />
          <button className={styles.nextBtn} onClick={onNext}>
            ▶
          </button>
        </div>
        <p className={styles.imageTitle}>{images[currentIndex].title}</p>
      </div>
    </div>
  );
};

export default ModalCarousel;
