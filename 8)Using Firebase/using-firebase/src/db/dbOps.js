import { db } from './firebaseinit';
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore';

async function createBlog(blog){

    //Adding a document with generated id
  const docRef = await addDoc(collection(db, "blogs"), blog);
  return { id: docRef.id, ...blog }; // Return with id
}

async function getBlogs(){
    const snapshot = await getDocs(collection(db, "blogs"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

async function removeBlog(id) {
  const docRef = doc(db,"blogs",id);
  await deleteDoc(docRef);
}

export {createBlog,getBlogs,removeBlog}
