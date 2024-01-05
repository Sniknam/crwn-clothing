import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  creatuserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../routes/utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

import Button from "../button/button.component";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  //   console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await creatuserDocumentFromAuth(user);
  };

  const handleSubmitt = async (event) => {
    event.preventDefault();
    // confirm pass matches with confirm pass

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-login-credentials") {
        alert("incorrect password or email");
      }
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name,value)
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an accoune?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmitt}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        {/* antother way */}
        {/* inputOptionm example */}
        {/* 
                <FormInput 
                label='Confirm Password'
                inputOption={
                type:'password' ,
                required ,
                onChange:handleChange ,
                name:'confirmPassword',  
                value:confirmPassword,
                }
                /> */}
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
