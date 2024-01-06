import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../../../firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const goooleProvider = new GoogleAuthProvider();
  console.log(user);
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, goooleProvider);
  };

  const handleEmailSIgnup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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
  };
  return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
