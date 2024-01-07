import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../../firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const goooleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, goooleProvider);
  };

  const handleEmailSIgnup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleUpdateProfile = (LoggedInUser, name, imgUrl) => {
    setLoading(true);
    return updateProfile(LoggedInUser, {
      displayName: name,
      photoURL: imgUrl,
    });
  };

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        axios.post("http://localhost:3001/jwt", { email: currentUser?.email }).then((data) => {
          const token = data.data.token;

          localStorage.setItem("access-token", token);
        });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return () => {
      unsubscibe();
    };
  });
  const AuthInfo = {
    user,
    handleGoogleLogin,
    handleEmailSIgnup,
    handleSignOut,
    handleLogin,
    handleUpdateProfile,
    loading,
  };
  return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
