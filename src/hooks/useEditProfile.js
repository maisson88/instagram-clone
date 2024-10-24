import React, { useState } from 'react'
import useAuthStore from '../store/AuthStore'
import useShowToast from './useShowToast'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { firestore, storage } from '../firebase/firebase'
import { doc, updateDoc } from 'firebase/firestore'
import useUserProfileStore from '../store/useProfileStore'

 const useEditProfile=()=> {

  const [isUpdating,setIsUpdating]=useState(false)
  const authUser=useAuthStore((state)=>state.user)
  const setAuthUser=useAuthStore((state)=>state.setUser)
  const setUserProfile=useUserProfileStore((state)=>state.setUserProfile)
  const showToast=useShowToast()
  const editProfile= async (inputs,selecetedFile)=>{
    if(isUpdating || !authUser) return
    setIsUpdating(true)
   const storageRef=ref(storage,`profilePics/${authUser.uid}`)
   const userDocRef=doc(firestore,"users",authUser.uid)
   let URL=""
   try{
    if(selecetedFile){
      await uploadString(storageRef,selecetedFile,"data_url")
      URL=await getDownloadURL(ref(storage,`profilePics/${authUser.uid}`))
    }

const updatedUser={
  ...authUser,
  fullName:inputs.fullName || authUser.fullName,
  userName:inputs.userName || authUser.userName,
  bio:inputs.bio || authUser.bio,
  profilePicURL:URL|| authUser.profilePicURL

}
await updateDoc(userDocRef,updatedUser)
localStorage.setItem("user-info",JSON.stringify(updatedUser))
setAuthUser(updatedUser)
setUserProfile(updatedUser)
showToast("success","Profile Updated Succesifly","success")

   }catch(error){
   showToast("Error",error.message,"error")
   }
   

  }
  return {editProfile,isUpdating}
}

export default useEditProfile
