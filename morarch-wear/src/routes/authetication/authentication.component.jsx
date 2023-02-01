import './authentication.style.scss';
import SignUpForm from "../../components/sign-up/sign-up.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
const Authentication=()=>{
    // What we're going to do is we are just going to create a log Google user, which is an asynchronous function.Because remember, whenever you make a call to some database, this is going to be asynchronous.So we want to get the value here.By awaiting calling or signing with Google pop up.And then we just want to console.log the response.
   
    return(
        <div className='authentication-container'>
           <SignInForm/>
            <SignUpForm/>
        </div>
    );
}
export default Authentication;