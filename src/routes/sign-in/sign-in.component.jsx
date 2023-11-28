

import {signInWithGooglePopup,creatuserDocumentFromAuth,signInWithGoogleRedirect } from '../utils/firebase/firebase.utils'
const SignIn= ()=>{
    const logGoogleUser = async () =>{
        const {user}= await signInWithGooglePopup ()
        const userDocRef= await creatuserDocumentFromAuth(user)
       
    }
    const logGoogleUserRedirct = async () =>{
        const {user}= await signInWithGoogleRedirect ()
        const userDocRef= await creatuserDocumentFromAuth(user)
       
    }
    return (
        <div>
            <h1>sign in page</h1>
            <button onClick={logGoogleUser}>
                sign in with google
            </button>
            <button onClick={logGoogleUserRedirct}>
                sign in with google Redirect
            </button>
        </div>
    )
}

export default SignIn;