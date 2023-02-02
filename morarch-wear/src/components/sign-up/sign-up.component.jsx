import { async } from "@firebase/util";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import './sign-up.style.scss';
import Button from "../button/button.component";


const defaultFormFeilds={
  displayName:'', email:'', password:'',conformPassword:'',
}
    const SignUpForm=()=>{
        const [formFields,setFormFields] =useState(defaultFormFeilds);
        const {displayName,email,password,conformPassword}=formFields;
      

            const resertFormFields=()=>{
                setFormFields(defaultFormFeilds);
            }
           
             const handleSubmit=async(event)=>{
                event.preventDefault();

                if(password!=conformPassword){
                    alert('Password doesnot match');
                    return;
                }
                try {
                    const {user}=await createAuthUserWithEmailAndPassword(email,password);
                   
                   await createUserDocumentFromAuth(user,{displayName});
                   resertFormFields();
                } catch (error) {
                    if(error.code=='auth/email-already-in-use'){
                        alert('Cannot create user, Email already in use')
                    }else{
                        console.log('Error during the creation of the User',error)
                    }
                  
                }
            }
        const handleChange=(event)=>{
            const {name,value}=event.target;

            setFormFields({...formFields,[name]:value});
        };
       return(
        <div className="sign-up-container">
            <h2>Don't have an Account?</h2>
            <span>Sing-up Here</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' required type='text' onChange={handleChange} name='displayName' value={displayName}/>
                
                    <FormInput label='Email' required type='email' onChange={handleChange} name='email' value={email} />
                
                    <FormInput label='Password' required type='password'onChange={handleChange} name='password' value={password} />
                
                    <FormInput label='Conform ' required type='password'onChange={handleChange} name='conformPassword' value={conformPassword} />
                    <Button  type="submit">Sign-up</Button>
             </form>
    </div>
       )
    }
    export default SignUpForm;