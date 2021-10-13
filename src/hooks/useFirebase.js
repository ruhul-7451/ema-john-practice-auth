import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebaseAuthentication from "../Firebase/firebase.init";

initFirebaseAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    /* Set logout */
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    /* Specical Observer */
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, []);

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;