
import { useState } from "react"
import { createAuthUserWithEmailAndPassword,creatuserDocumentFromAuth } from "../../routes/utils/firebase/firebase.utils"

const defaultFormField ={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
}

const SignUpForm= () =>{
    const [formFields,setFormFields]=useState(defaultFormField)
    const {displayName,email,password,confirmPassword}=formFields

    console.log(formFields)

    const resetFormFields=()=>{
        setFormFields(defaultFormField)
    }

    const handleSubmitt = async(event)=>{
        event.preventDefault();
        // confirm pass matches with confirm pass
        if(password !== confirmPassword){
            alert ('The password do not match')
            return;
        }
   
        try{
            const {user}= await createAuthUserWithEmailAndPassword(email,password)
            await creatuserDocumentFromAuth (user ,{displayName})
            resetFormFields();


        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert ('cannot create user, emil aleardy in use')
            }else{
                console.log("user created the error",error)
            }

        }

    }

    const handleChange=(event)=>{
        const {name,value} = event.target;
        // console.log(name,value)
        setFormFields({...formFields,[name]:value});

    }

    return(
        <div>
            <h1>xx Sign up with your email and password</h1>
            <form onSubmit={handleSubmitt}>
                <label>Display Name</label>
                <input type='text' required onChange={handleChange} name='displayName'  value={displayName}/>

                <label>Email</label>
                <input type='email' required  onChange={handleChange} name='email' value={email}/>

                <label>Password</label>
                <input type='password' required  onChange={handleChange} name='password' value={password}/>  

                <label>Confirm Password</label>
                <input type='password' required  onChange={handleChange } name='confirmPassword' value={confirmPassword}/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
        
    )
   
}
 export default SignUpForm