import { useState } from "react"

const defaultFormField ={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
}

const SignUpForm= () =>{
    const [formFields,setFormFields]=useState(defaultFormField)
    const {displayName,email,password,confirmPassword}=formFields

    console.log(setFormFields)

    const handleChange=(event)=>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});

    }

    return(
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={()=>{}}>
                <lable>Display Name</lable>
                <input type='text' required onChange={handleChange} name='displayName'  value={displayName}/>

                <lable>Email</lable>
                <input type='email' required  onChange={handleChange} name='email' value={email}/>

                <lable>Password</lable>
                <input type='password' required  onChange={handleChange} name='password' value={password}/>  

                <lable>Confirm Password</lable>
                <input type='password' required  onChange={handleChange } name='confirmPassword' value={confirmPassword}/>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
        
    )
   
}
 export default SignUpForm