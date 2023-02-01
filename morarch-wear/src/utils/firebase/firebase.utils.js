
import { initializeApp } from "firebase/app";
import {getAuth,
        signInWithRedirect,
        signInWithPopup,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        GoogleAuthProvider} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';


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

// Then we will want to do is we want to call set custom parameters.
// So these custom parameters will take some kind of configuration object and with it we can tell differentways that we want this Google auth provider to behave.
// So generally speaking, the main one that we want is really just prompt.
// Which will be select underscore account.
// So what this means is that every time somebody interacts with our provider, we want to always force
// them to select an account.
provider.setCustomParameters({
    prompt:"select_account",
});

// The other thing we need to do is we need to export our authentication, which as I mentioned, we needto create the instance and then we also need to export out.
// Now this sign in with pop up.
// So here I want to call it sign in with Google Pop Up.
// And this is going to be equal to a anonymous function that's going to return.
// So remember, no squiggly brackets.
// We want a return sign in with pop up.
// And what we want to pass to this is off and the provider.
// So the provider instance that we created as well as the auth instance that we generated, we want to
// pass both of these into sign in with pop up.
export  const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);

// Now here you might be wondering why is auth just a function invocation without the new keyword, whereas google auth provider is one.So Google Auth Provider is essentially a class that we get from Firebase Authentication and this is
// connected to Google auth itself.We will auth has many different implementations.This is just Firebase Authentication Zone.So this is a class and sometimes you want to generate multiple of these different providers because
// you might have different provider instances doing different things.For example, as we see with sign in with pop up provider, you pass it a provider maybe for a sign in with redirect, you pass a different provider. These providers are kind of just instructions for this instance of provider, but you can have multiple different providers authentication.
// On the other hand, there's a singleton of meaning that the way your application authenticates and the rules for authentication and the authentication that communicates with Firebase, this should always
// be the same one for every application.Why would you have different authentication services for one application?
// That doesn't make sense, right?
// Once you authenticate for this website as a whole, it should be held on to for the duration of the
// lifecycle of this application.
// You would not ever really need more than one authentication, whereas you might need multiple providers because you might have different buttons that trigger different forms of even Google sign in with popup.Maybe some of them prompt you to select an account, some of them don't.You can imagine that there are different cases and use cases for these too.



// So in order for us to actually use this, what we need to do is we need to go back to our applicationand we need to go to Google console.Now, what you want to do is you want to go to this authentication tab on the left ear and then in the top here, you want to go to sign in method.What we want to do is we want to click the Google because we want to provide the ability to now sign in with Google.We don't need to worry about any of these other settings for now.We'll talk about this domain one when it becomes important.For now, all you need to know is that local host is authorized by default, meaning that this is a list of whatever domains that we allow our application to use.Google Sign in.Now we're currently testing on local hosts, so this is by default enabled.That's all we need.We don't touch that up here, though.
// We need to enable this sign in and then for the project support email.
// Just choose the email that you want to be the one that forwards all the support emails for in terms
// of this authentication in this list.So here, this is my account and then you just hit save.And that's all it takes.Now, you should be able to access.It's enabled. So let's go back to our application.

// So let's go into our sign in component.

export const db=getFirestore();
export const createUserDocumentFromAuth=async(userAuth, addtionalInfo={})=>{
    const userDocRef=doc(db,'users',userAuth.uid);
    console.log(userDocRef);
    const userSnapShot=await getDoc(userDocRef)
    console.log(userSnapShot)
    console.log(userSnapShot.exists())
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