import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initFirebaseAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initFirebaseAuthentication;