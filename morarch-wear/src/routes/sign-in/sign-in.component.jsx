import { signInWithGooglePopup ,createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up.component";
const SignIn=()=>{
    // What we're going to do is we are just going to create a log Google user, which is an asynchronous function.Because remember, whenever you make a call to some database, this is going to be asynchronous.So we want to get the value here.By awaiting calling or signing with Google pop up.And then we just want to console.log the response.
    const logGoogleUser=async()=>{
        const {user}=await signInWithGooglePopup();
      
        const userDocRef= await createUserDocumentFromAuth(user)
    }
    return(
        <div>
            <h1>i am Sign-in</h1>
            <button onClick={logGoogleUser}>SignIn with Google</button>
            <SignUpForm/>
        </div>
    );
}
export default SignIn;