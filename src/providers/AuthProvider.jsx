import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //Sign in with google
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    };
    //Sign in with Email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    //Sign up with Email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    //Update Name and Photo url
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    // Sign Out 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            setLoading(false);
            // console.log(loggedUser);         
            
        });

        return () => {
            unsubscribe();
        };
    }, []);
    const authInfo = {
        user,
        loading,
        googleSignIn,
        createUser,
        updateUser,
        signIn,
        logOut,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
