 import { create } from "zustand";
const user=localStorage.getItem('user-info')
const user_info=JSON.parse(user)
 const useAuthStore=create((set)=>({
    user:user_info,
    login:(user)=>set({user}),
    logout:()=>set({user:null}),
    setUser:(user)=>set({user})
 }))

 export default useAuthStore;