import React,{useContext} from 'react';
import {Link, useHistory, useLocation} from "react-router-dom";
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import { initializeApp } from 'firebase/app';
import {userContext} from '../../App';
import firebaseConfig from '../../firebase.config';
import { getAuth,
            createUserWithEmailAndPassword,
            FacebookAuthProvider,
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
            console.log(user);
        }
    }

    //;';';';';';';';';';';;';'; Handle SignIn with email and Password''''''';;;;;;;;;;;;
    const handleSubmit = (event) => {
        if(user.email && user.password){
            console.log(user);
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed in 
                const User = userCredential.user;
                history.replace(from);
                console.log(User);
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
            console.log(User.email);
            setUser(newUser);
            history.replace(from);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // ...
            alert(email +"\n"+ errorMessage +"\n"+ errorCode);
        });
    }
    //;';';';';';';';';';';';';';'Handle SignIn with facebook ;';';';';'';';';';';
    const provider = new FacebookAuthProvider();
    const handleFbSignIn = () =>{
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // The signed-in user info.
            const User = result.user;
            console.log(User);

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.

            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            alert(email +"\n"+ errorMessage +"\n"+ errorCode);

            // ...
        });
    }
    return (
        <div className="login">
            <div className="underArea">
                <div className="wrapper">
                    <form onSubmit={handleSubmit} className="form">
                        <div className="header"><h3>Create an account</h3></div>
                        <input onBlur={handleBlur} required className="input" type="text" name="name" id="Sname" placeholder="Your Name" />
                        <input onBlur={handleBlur} required className="input" type="text" name="email" id="Semail" placeholder="Your email" />
                        <input onBlur={handleBlur} required className="input" type="password" name="password" id="Spassword" placeholder="Your password" />
                        <input onBlur={handleBlur} required className="input" type="password" name="confirmPassword" id="SCpassword" placeholder="Confirm password" />
                        <div className="checkbox">
                            <div className="labal-checkbox">
                                <input type="checkbox" id ="checkbox" name="checkbox" />
                                <label htmlFor="checkbox">Remember me</label>
                            </div>
                            <Link to="/signUp">Forgot password?</Link>
                        </div>
                        <input className="big-btn" type="submit" value="Create account" />
                        <div className="createAccount">
                            <span>Already have an account? <Link to="/login">Login</Link></span>
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
                    <button onClick={handleGoogleSingIn}  className="round-button">
                        <div className="btnImg"><img src={google} alt="facebook" /></div>
                        <div className="facebookBtnTag"><p>Continue with google</p></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;