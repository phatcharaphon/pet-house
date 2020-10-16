import { createContext, useEffect, useState } from "react";
import firebase from "../lib/firebase.prod";

export const FirebaseContext = createContext(null);

export default function FirebaseProvider({ children }) {
  const [user, setUser] = useState(firebase.auth().currentUser);
  const [isLoading, setIsLoading] = useState(true);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged(async (authUser) => {
      try {
        authUser ? setUser(authUser) : setUser(null);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    });
    const profilesListener = firebase
      .firestore()
      .collection("profiles")
      .onSnapshot((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        }));
        console.log(docs);
        setProfiles(docs);
      });

    return () => {
      listener();
      profilesListener();
    };
  }, []);

  return (
    <FirebaseContext.Provider value={{ firebase, user, isLoading, profiles }}>
      {children}
    </FirebaseContext.Provider>
  );
}
