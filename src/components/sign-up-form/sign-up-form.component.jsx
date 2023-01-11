import { EmailAuthCredential } from 'firebase/auth';
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import  FormInput  from '../form-input/form-input.component.jsx'
import './sign-up-form.styles.scss'
import Button from '../button/button.component';

const defaultFormField = {
displayName: '',
email: '',
password: '',
confirmPassword: '',
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormField);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('password not matching');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        }catch(error) {
            console.log('user creation error: ', error);
        }   
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display name' type='text' required onChange={handleChange} name='displayName' value={displayName}/>
                <FormInput label='E-mail' type='email' onChange={handleChange} name='email' value={email}/>
                <FormInput label='Password' type='password' onChange={handleChange} name='password' value={password}/>
                <FormInput label='Confirm password' type='password' onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                <Button type='submit'>Sign in</Button>
            </form>
        </div>
    )
}

export default SignUpForm;