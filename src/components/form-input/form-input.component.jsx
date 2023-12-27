import './form-input.styles.scss'

const FormInput = ({ label, ...otherProps }) => { // otherProps is on sign-up component withch is type,lable,name and ...
    return(
    <div className="group">
         <input className="form-input"{...otherProps}/>
        {label && (
        <label className={`${otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
        >
            {label}
        </label>
        )}
       
     </div>
    );
}

//another way 
// should change the sign up component as well

// const FormInput = ({ label, inputOption }) => { // otherProps is on sign-up component withch is type,lable,name and ...
//     return(
//     <div className="group">
//          <input className="form-input"{...inputOption}/>
//         {label && (
//         <label className={`${inputOption.value.length ? 'shrink' : ''
//         } form-input-label`}
//         >
//             {label}
//         </label>
//         )}
       
//      </div>
//     );
// }



export default FormInput; 