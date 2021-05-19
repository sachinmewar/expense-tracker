import { useRef, useContext } from 'react';
import AuthContext from '../store/auth-context';
import classes from './ProfileForm.module.css';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
   const history = useHistory();
   const newPasswordInputRef = useRef();
   const authContext = useContext(AuthContext);

   const submitHandler = (event) => {
      event.preventDefault();
      const enteredNewPassword = newPasswordInputRef.current.value;
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBsdhIpFdhOx4VMYlHYpdMoa4hbUMMcEAA',
         {
            method: 'POST',
            body: JSON.stringify({
               idToken: authContext.token,
               password: enteredNewPassword,
               returnSecureToken: false
            }),
            headers: {
               'Content-Type': 'application/json'
            }
         }).then(res => {
            history.replace('/');
         })
   };


   return (
      <form className={classes.form}>
         <div className={classes.control}>
            <label htmlFor='new-password'>New Password</label>
            <input type='password' id='new-password' minLength="6" ref={newPasswordInputRef} />
         </div>
         <div className={classes.action}>
            <button onClick={submitHandler}>Change Password</button>
         </div>
      </form>
   );
}

export default ProfileForm;
