import React, { useState} from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import './sign-in.styles.scss';

const SignIn = () => {

    const [userCredentials, setCredentials] = useState({email: '', password: ''})
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        try{
            await auth.signInWithEmailAndPassword(email,password);
            setCredentials({email: '', password: ''});
        } catch(error) {
            console.log(error);
        }
    }

    const handleChange = e => {
        const { value , name } = e.target;

        setCredentials({...userCredentials, [name]: value});
    }

  
    return(
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span className="title">Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name='email' 
                       type='email'
                       handleChange={handleChange} 
                       value={email} 
                       label='email'
                       required />
                <FormInput name='password' 
                        type='password' 
                        handleChange={handleChange}
                        value={password} 
                        label='password'
                        required />
                <div className="buttons">
                    <CustomButton type='submit'> SIGN IN </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> SIGN IN WITH GOOGLE </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;