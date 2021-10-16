import React, { useContext } from 'react';
import './Login.css';
import {Link, useLocation, useHistory} from "react-router-dom";
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import {userContext} from './../../App';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebase.config';
import { getAuth,
    signInWithEmailAndPassword,
    FacebookAuthProvider , 
    signInWithPopup, 
    GoogleAuthProvider 
} from "firebase/auth";
const Login = () => {
    const history = useHistory();
    const location = useLocation();
    // eslint-disable-next-line
    const app = initializeApp(firebaseConfig);
    const [user, setUser] = useContext(userContext);
    let { from } = location.state || { from: { pathname: "/" } };

    const handleBlur = (event) =>{
        let isFormValid = true;
        if(event.target.name === 'email'){
            isFormValid = /^\S+@\S+\.\S+$/.test(event.target.value);
        }
        if(event.target.name === 'password'){
            isFormValid = (event.target.value.length > 6);
        }
        if(isFormValid){
            const newUser = {...user};
            newUser[event.target.name] = event.target.value;
            setUser(newUser);
        }

    }
    const handleSubmit = (event) => {
        if(user.email && user.password){
            const auth = getAuth();
            signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                const User = userCredential.user;
                const newUser = {...user};
                newUser.name = User.name;
                newUser.email= User.email;
                setUser(newUser);
                history.replace(from);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode + "\n" + errorMessage);
            });
        }
        event.preventDefault();
    }
    //;';';';';';';';';';';';';';'Handle SignIn with google ;';';';';'';';';';';
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSingIn = () =>{

        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const User = result.user;
            const newUser = {...user}
            newUser.email = User.email;
            newUser.name = User.name;
            setUser(newUser);
            history.replace(from);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            alert(email +"\n"+ errorMessage +"\n"+ errorCode);
        });
    }
    //;';';';';';';';';';';';';';'Handle SignIn with google ;';';';';'';';';';';
    const facebookProvider = new FacebookAuthProvider();
    const handleFbSignIn = () =>{
        const auth = getAuth();
        signInWithPopup(auth, facebookProvider)
        .then((result) => {
            // The signed-in user info.
            const User = result.user;
            console.log(User.email);

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            alert(email +"\n"+ errorMessage +"\n"+ errorCode);
            
        });
    }
    return (
        <div className="login">
            <div className="underArea">
                <div className="wrapper">
                    <form onSubmit={handleSubmit} className="form">
                        <div className="header"><h3>Login</h3></div>
                        <input onBlur={handleBlur} className="input" type="text" name="email" id="Lemail" placeholder="Your email" />
                        <input onBlur={handleBlur} className="input" type="password" name="password" id="Lpassword" placeholder="Your password" />
                        <div className="checkbox">
                            <div className="labal-checkbox">
                                <input type="checkbox" id ="checkbox" name="checkbox" />
                                <label htmlFor="checkbox">Remember me</label>
                            </div>
                            <Link to="/">Forgot password?</Link>
                        </div>
                        <input className="big-btn" type="submit" value="Login" />
                        <div className="createAccount">
                            <span>Don't have an account? <Link to="/signUp">Create an account</Link></span>
                        </div>
                    </form>
                </div>
                <div className="wrapper-bottom">
                    <div className="lines">
                        <div className="line"></div>
                        <h4>or</h4>
                        <div className="line"></div>
                    </div>
                    <button onClick={handleFbSignIn} className="round-button">
                        <div className="btnImg"><img src={facebook} alt="facebook" /></div>
                        <div className="facebookBtnTag"><p>Continue with facebook</p></div>
                    </button>
                    <button onClick={handleGoogleSingIn} className="round-button">
                        <div className="btnImg"><img src={google} alt="facebook" /></div>
                        <div className="facebookBtnTag"><p>Continue with google</p></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;