

// src/components/OnlyDealer.js
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const OnlyDealer = () => {
  const [isDealer, setIsDealer] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists() && docSnap.data().role === 'dealer') {
          setIsDealer(true);
        } else {
          setIsDealer(false);
        }
      } else {
        setIsDealer(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {isDealer ? (
        <div>Welcome, Dealer! You have access to this section.</div>
      ) : (
        <div>You do not have permission to view this section.</div>
      )}
    </div>
  );
};

export default OnlyDealer;