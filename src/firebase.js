import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDW5896I_muMQHCtf9NHj420KC-7vum2vw",
  authDomain: "netflix-clone-4e1ca.firebaseapp.com",
  projectId: "netflix-clone-4e1ca",
  storageBucket: "netflix-clone-4e1ca.appspot.com",
  messagingSenderId: "1077357817997",
  appId: "1:1077357817997:web:6327a3998e9ab2914af2c4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const userSignUp = async (name, email, password) => {
  try {
    // Create user with email & password
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Save user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      name,
      authProvider:'local',
      email,
      uid: user.uid,
    });
    console.log("User signed up:", user);
  } catch (error) {
    console.error("Signup Error:", error.message);
    alert(error)
  }
};

const login = async(email,password)=> {
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error);
        alert(error)
    }
}

const logOut = async ()=>{
    try {
       await signOut(auth)
    } catch (error) {
        console.log(error);
        
    }
}

export { auth, db, userSignUp, login, logOut };
