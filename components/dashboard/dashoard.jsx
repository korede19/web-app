"use client";
import { useEffect, useState } from "react";
import { auth, db } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const DashboardComponent = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const userDoc = await getDoc(doc(db, "users", user.uid));
        setRole(userDoc.data()?.role || "user");
      } else {
        setUser(null);
        window.location.href = "/";
      }
    });
    return () => unsubscribe();
  }, []);

  return <div></div>;
};

export default DashboardComponent;
