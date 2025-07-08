import { db } from '../firebase/firebase';
import { collection, addDoc, getDocs, doc, setDoc, deleteDoc,updateDoc } from 'firebase/firestore';

async function createAlbumInDB(albumName) {

    //Adding a document with generated id
    //   const albumRef = await addDoc(collection(db, "albums"), album);
    //   return { id: albumRef.id, ...album }; // Return with id
    const albumRef = doc(collection(db, "albums")); // 👈 generate a new ID
    await setDoc(albumRef, {
        id: albumRef.id, // ✅ include ID in JSON
        name: albumName,
        createdAt: new Date(),
    });
    return albumRef.id;
}

async function getAlbum() {
    const snapshot = await getDocs(collection(db, "albums"));
    return snapshot.docs.map((doc) => (
        {
            id: doc.data().id,
            name: doc.data().name
        }
    ));
}




async function addImageToAlbum(albumId, imageUrl, title) {
  try {
    const imageData = {
      url: imageUrl,
      title: title,
      createdAt: new Date(),
    };

    // Save image in Firestore under albums/{albumId}/images
    const docRef = await addDoc(
      collection(db, "albums", albumId, "images"),
      imageData
    );
    return docRef.id; // return the Firestore-generated ID
  } catch (error) {
    console.error("Error adding image:", error);
    throw error;
  }
}


async function getImagesOfAlbum(albumId){
 const snapshot = await getDocs(
    collection(db, "albums", albumId, "images")
  );
  return snapshot.docs.map((doc) => ({
    id: doc.id, // Firestore document ID
    url:doc.data().url,
    title:doc.data().title
  }));
}

async function updateImage(albumId,image) {
  const imageRef = doc(db, "albums",albumId,"images", image.id);

  try {
    await updateDoc(imageRef, {
      url:image.url,
      title:image.title
    });
    //console.log("Image updated successfully!");
  } catch (err) {
    console.error("Error updating image:", err);
  }
}

async function removeImage(albumId,imageId) {
    const docRef = doc(db, "albums", albumId,"images",imageId);
    await deleteDoc(docRef);
}

export { createAlbumInDB, getAlbum,addImageToAlbum,getImagesOfAlbum, removeImage ,updateImage}
