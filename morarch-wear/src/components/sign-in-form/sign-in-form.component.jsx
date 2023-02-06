import { async } from "@firebase/util";
import { useState } from "react";
import { signINAuthUserWithEmailAndPassword,signInWithGooglePopup,createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import './sign-in-form.style.jsx';
import Button from "../button/button.component";
import { UserContext } from "../../context/context.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.style.jsx";

const defaultFormFeilds={
   email:'', password:'',
}
    const SignInForm=()=>{
        const [formFields,setFormFields] =useState(defaultFormFeilds);
        const {email,password}=formFields;
        
            
            const resertFormFields=()=>{
                setFormFields(defaultFormFeilds);
            }

            const signInWithGoogle=async()=>{
                await signInWithGooglePopup();
                
            
            }
           
             const handleSubmit=async(event)=>{
                event.preventDefault();
                try {
                    const {user}=await signINAuthUserWithEmailAndPassword(email,password)
                 
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
        <SignInContainer>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label='Email'
            type='email'
            required
            onChange={handleChange}
            name='email'
            value={email}
          />
  
          <FormInput
            label='Password'
            type='password'
            required
            onChange={handleChange}
            name='password'
            value={password}
          />
          <ButtonsContainer>
            <Button type='submit'>Sign In</Button>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.google}
              type='button'
              onClick={signInWithGoogle}
            >
              Google-Sign In
            </Button>
          </ButtonsContainer>
        </form>
      </SignInContainer>
       );
    }
    
    export default SignInForm;