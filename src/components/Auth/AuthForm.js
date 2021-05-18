import { useState, useRef, useContext } from 'react';
import AuthContext from '../store/auth-context';
import classes from './AuthForm.module.css';
import { useHistory } from 'react-router-dom';

const AuthForm = () => {
   const history = useHistory();
   const emailInputRef = useRef();
   const passwordInputRef = useRef();

   const authContext = useContext(AuthContext);

   const [isLogin, setIsLogin] = useState(true);
   const [isLoading, setIsLoading] = useState(false);

   const switchAuthModeHandler = () => {
      setIsLogin((prevState) => !prevState);
   };

   const submitHandler = (event) => {
      event.preventDefault();


      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;

      setIsLoading(true);
      let url;
      if (isLogin) {
         // Add sign-in url here.
         url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBsdhIpFdhOx4VMYlHYpdMoa4hbUMMcEAA';
      } else {
         // sending sign-up url. It should be POST req with JSON data.
         url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBsdhIpFdhOx4VMYlHYpdMoa4hbUMMcEAA';
      }
      fetch(url,
         {
            method: 'POST',
            body: JSON.stringify({
               email: enteredEmail,
               password: enteredPassword,
               returnSecureToken: true
            }),
            headers: {
               'Content-type': 'application/json'
            },
         })
         .then((res) => {
            setIsLoading(false);
            if (res.ok) {
               // It will return the response payload which includes:
               // idToken, email, refreshToken, expiresIn, localId, registered.
               // Request body payload(sign in) is email, password, returnSecureToken. 
               return res.json();
            }
            // getting data comming back with response.
            else {
               // res.json() returns a promise.
               return res.json().then((data) => {
                  let errorMessage = 'Authentication failed!';
                  // Then we check we do have data and data have error property and
                  // and that in turn has message property.
                  if (data && data.error && data.error.message) {
                     errorMessage = data.error.message;
                  }
                  throw new Error(errorMessage);
               });
            }
         })
         .then(data => {
            // data.idToken we get from firebase.
            authContext.login(data.idToken);
            // here replace means that user cannot go back to login page
            history.replace('/');
            history.push('/expenses');
         })
         .catch(err => {
            alert(err.message);
         })
   }

   return (
      <section className={classes.auth}>
         <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
         <form onSubmit={submitHandler}>
            <div className={classes.control}>
               <label htmlFor='email'>Your Email</label>
               <input type='email' id='email' required ref={emailInputRef} />
            </div>
            <div className={classes.control}>
               <label htmlFor='password'>Your Password</label>
               <input type='password' id='password' required ref={passwordInputRef} />
            </div>
            <div className={classes.actions}>
               {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
               {isLoading && <p> Sending request......</p>}
               <button
                  type='button'
                  className={classes.toggle}
                  onClick={switchAuthModeHandler}
               >
                  {isLogin ? 'Create new account' : 'Login with existing account'}
               </button>
            </div>
         </form>
      </section>
   );
};

export default AuthForm;