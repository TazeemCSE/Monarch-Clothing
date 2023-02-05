
import { initializeApp } from "firebase/app";
import {getAuth,signOut,
    onAuthStateChanged,
        signInWithRedirect,
        signInWithPopup,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        GoogleAuthProvider} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc,collection,writeBatch,query,getDocs} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA1iFQllonSNCaMOaG5qytAUEyrgiUhrdw",
  authDomain: "monarch-wear-db.firebaseapp.com",
  projectId: "monarch-wear-db",
  storageBucket: "monarch-wear-db.appspot.com",
  messagingSenderId: "684491621023",
  appId: "1:684491621023:web:d055dcbe8f51c2a07f18aa"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// So in order to use this Google authentication, we need to first initialize a provider using this Google  auth provider class that we received.
// So here you want to call new Google auth provider, which in turn will give you back this provider instance.
const provider=new GoogleAuthProvider();


provider.setCustomParameters({
    prompt:"select_account",
});


export  const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);

export const db=getFirestore();

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) => {
    const batch = writeBatch(db);
    const collectionRef = collection(db, collectionKey);
    
    objectsToAdd.forEach((object) => {
       const docRef = doc(collectionRef, object.title.toLowerCase());
       batch.set(docRef, object);
    });
  
    await batch.commit();
    console.log('done');
  };

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
  
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  
    return categoryMap;
  };

export const createUserDocumentFromAuth=async(userAuth, addtionalInfo={})=>{
    if(!userAuth) return;
    const userDocRef=doc(db,'users',userAuth.uid);
   
    const userSnapShot=await getDoc(userDocRef)
    console.log(userSnapShot)
  
    if(!userSnapShot.exists()){
        const {displayName,email}=userAuth;
        const createdAt=new Date();
        try {
            await setDoc(userDocRef,{
                displayName, email,createdAt,...addtionalInfo,
            })
        } catch (error) {
            console.log('error while creating the user ',error.message);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword=async(email,password) => {
    if(!email||!password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
}

export const signINAuthUserWithEmailAndPassword=async(email,password) => {
    if(!email||!password) return;
    return await signInWithEmailAndPassword(auth,email,password);
}

export const signOutUser=async()=>await signOut(auth);

export const onAuthStateChangedListner=(callback)=>onAuthStateChanged(auth,callback);