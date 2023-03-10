import { useState } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import  FormInput  from '../form-input/form-input.component.jsx'
import './sign-in-form.styles.scss'
import Button from '../button/button.component';

const defaultFormField = {
email: '',
password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormField);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormField);
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await signInAuthUserWithEmailAndPassword(email,password);
          console.log(response);
          resetFormFields();
        } catch (error) {
          switch (error.code) {
            case 'auth/wrong-password':
              alert('incorrect password for email');
              break;
            case 'auth/user-not-found':
              alert('no user associated with this email');
              break;
            default:
              console.log(error);
          }
        }
      };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='E-mail' type='email' onChange={handleChange} name='email' value={email}/>
                <FormInput label='Password' type='password' onChange={handleChange} name='password' value={password}/>
                <div className='buttons-container'>
                    <Button type='submit'>Sign in</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;