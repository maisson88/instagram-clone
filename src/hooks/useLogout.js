
import { useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'
import useShowToast from './useShowToast'
import useAuthStore from '../store/AuthStore'

function useLogout() {
    const [signOut,isLoggingOut,error]=useSignOut(auth)
    const showToast=useShowToast()
    const logoutUser=useAuthStore((state)=>state.logout);
    const handlelogout=async()=>{
        try{
            await signOut();
            localStorage.removeItem('user-info')
          logoutUser()

        }catch(error){
   showToast("Error",error,"error")
        }

    }
 return {handlelogout,isLoggingOut,error}
}

export default useLogout
