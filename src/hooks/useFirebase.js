import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";


initializeAuthentication();

const useFirebase = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();

    /// login with email and password 

    const signInUsingLoginForm = (e) => {
        setIsLoading(true);
        e.preventDefault()
        if (password.length < 6) {
            setError('Password Must Contain 6 Character');
            return;
        };
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case ');
            return;
        };
        if (isLogin) {
            signInOldUser(email, password);
        }
        else {
            signUpNewUser(email, password);
        }
    };
    ////////  old user
    const signInOldUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    };
    ///////// new user
    const signUpNewUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                console.log(user);
                setError('');
                verifyEmail();
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    };
    /// toggle sign in 
    const toggleSignIn = e => {
        setIsLogin(e.target.checked);
    };
    // google sign in 
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    };

    ////////// log out 
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {
                console.log(error.message);
            })
            .finally(() => setIsLoading(false));
    };
    ///////// fire base observe in a state change
    useEffect(() => {
        setIsLoading(true);
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);
    //////
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then((result) => {
                console.log(result);
            })
            .catch(error => {
                console.log(error.message);
            })

    };
    /////////
    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                setPassword(result)
            })
            .catch(error => {
                console.log(error);
            })
    };
    /////////////////
    return { signInUsingLoginForm, signInUsingGoogle, logOut, setIsLoading, setError, user, isLoading, email, password, isLogin, error, setEmail, setPassword, toggleSignIn, resetPassword }
};

export default useFirebase;