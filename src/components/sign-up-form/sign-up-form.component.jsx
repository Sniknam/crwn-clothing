import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import {
  createAuthUserWithEmailAndPassword,
  creatuserDocumentFromAuth,
} from "../../routes/utils/firebase/firebase.utils";

import "./sign-up-form.styles.scss";

import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  const handleSubmitt = async (event) => {
    event.preventDefault();
    // confirm pass matches with confirm pass
    if (password !== confirmPassword) {
      alert("The password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);

      console.log("xx", setCurrentUser);

      await creatuserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user, emil aleardy in use");
      } else {
        // console.log("user created the error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name,value)
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an accoune?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmitt}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
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

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
