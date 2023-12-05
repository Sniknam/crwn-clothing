

import {signInWithGooglePopup,creatuserDocumentFromAuth,signInWithGoogleRedirect } from '../utils/firebase/firebase.utils'
 import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

 const SignIn= ()=>{
     const logGoogleUser = async () =>{
        const {user}= await signInWithGooglePopup ()
        const userDocRef= await creatuserDocumentFromAuth(user)
       
    }
    
    return (
        <div>
            <h1>sign in page</h1>
            <button onClick={logGoogleUser}>
                sign in with google
            </button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn;