import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />

      {/* <div>
           <label>EMAIL</label>
           <input type="text" />
           <label>EMAIL</label>
           <input type="text" />
           </div> */}
    </div>
  );
};

export default Authentication;
