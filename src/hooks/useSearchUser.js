import React, { useState } from 'react';
import useShowToast from './useShowToast';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

const useSearchUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null); // Changed initial state to null instead of false
  const showToast = useShowToast();

  const getUserProfile = async (userName) => {
    try {
      const q = query(collection(firestore, "users"), where("userName", "==", userName));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        return showToast("Error", "User not found", "error");
      }

      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });

    } catch (error) {
      showToast("Error", error.message, "error");
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, user, getUserProfile };
};

export default useSearchUser;