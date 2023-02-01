import { async } from "@firebase/util";
import { useState } from "react";
import { signINAuthUserWithEmailAndPassword,signInWithGooglePopup,createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import './sign-in-form.style.scss';
import Button from "../button/button.component";

const defaultFormFeilds={
   email:'', password:'',
}
    const SignInForm=()=>{
        const [formFields,setFormFields] =useState(defaultFormFeilds);
        const {email,password}=formFields;
            console.log(formFields);
            
            const resertFormFields=()=>{
                setFormFields(defaultFormFeilds);
            }

            const signInWithgoogle=async()=>{
                const {user}=await signInWithGooglePopup();
               await createUserDocumentFromAuth(user)
            }
           
             const handleSubmit=async(event)=>{
                event.preventDefault();
                try {
                    const response=await signINAuthUserWithEmailAndPassword(email,password)
                    console.log(response)
                    resertFormFields();
                 } catch (error) {
                    if(error.code=='auth/wrong-password'){
                        alert('Wrong Password')
                    }else if(error.code=='auth/user-not-found'){
                        alert('No user associated with this email')
                    }
                     console.log(error)
                 }
                }
               
            
        const handleChange=(event)=>{
            const {name,value}=event.target;

            setFormFields({...formFields,[name]:value});
        };
       return(
        <div className="sign-up-container">
            <h2>Already have an Account?</h2>
            <span>Sing-in Here</span>
            <form onSubmit={handleSubmit}>
                
                
                    <FormInput label='Email' required type='email' onChange={handleChange} name='email' value={email} />
                
                    <FormInput label='Password' required type='password'onChange={handleChange} name='password' value={password} />
                    <div className="buttons-container">
                    <Button  type="submit">Sign-In</Button>
                    <Button type='botton' buttonType='google' onClick={signInWithgoogle  }>Google Sign-in</Button>
                    </div>
                    
             </form>
    </div>
       );
    }
    
    export default SignInForm;