import {  createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "./firebase.config";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const auth = getAuth(app);
    const [user,setUser] = useState()
    const [loading,setLoading] = useState()
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = useAxiosPublic();

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser = (name,photoURL) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
          })
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }
    useEffect(()=>{
           const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('observer',currentUser);
            setUser(currentUser);
            if(currentUser){
                    const userInfo = {email: currentUser.email}
                    axiosPublic.post('/jwt',userInfo)
                    .then(res => {
                        if(res.data.token){
                            localStorage.setItem('access-token',res.data.token)
                        }
                    })
            }else{
                    localStorage.removeItem('access-token')
            }
            setLoading(false)
           })
           return ()=>{
            return unSubscribe();
           }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        googleSignIn,
        signInUser,
        logOut,
        updateUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;