
import {signInWithGooglePopup  } from '../utils/firebase/firebase.utils'
const SignIn= ()=>{
    const logGoogleUser = async () =>{
        const responce= await signInWithGooglePopup ()

        console.log(responce)
    }
    return (
        <div>
            <h1>sign in page</h1>
            <button onClick={logGoogleUser}>
                sign in with google
            </button>
        </div>
    )
}

export default SignIn;