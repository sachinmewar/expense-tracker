import AuthContext from '../store/auth-context';
import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import { useContext, useState } from 'react';

const UserProfile = () => {

   const [emailAdd, setemailAdd] = useState();
   const authContext = useContext(AuthContext)
   if (authContext.isLoggedIn) {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBsdhIpFdhOx4VMYlHYpdMoa4hbUMMcEAA',
         {
            method: 'POST',
            body: JSON.stringify({
               idToken: authContext.token,
            }),
            headers: {
               'Content-Type': 'application/json'
            }
         })
         .then((res) => {
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
            setemailAdd(data.users[0].email);
         })
         .catch(err => {
            alert(err.message);
         })
   }
   return (
      <section className={classes.profile}>
         <h2> User Profile </h2>
         <p> Email Address : {emailAdd} </p>
         <ProfileForm />
      </section>
   );
};

export default UserProfile;
