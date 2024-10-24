import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
import useShowToast from './useShowToast';
import useAuthStore from '../store/AuthStore';

function useSignUpWithEmailAndPassword() {
   const loginUser= useAuthStore(state=>state.login)
//    const logoutUser= useAuthStore(state=>state.logout)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const showToast=useShowToast()

    const signup = async (inputs) => {
        if (!inputs.email || !inputs.password || !inputs.userName || !inputs.fullName) {
          showToast("error","please fill all fileds","error")
            return;
        }
        const userRef=collection(firestore,"users")
        const q=query(userRef,where("userName","==",inputs.userName))
        const querySnapshot=await getDocs(q)
        if(!querySnapshot.empty){
            showToast("Error","username aready exists","error");
            console.log("username aready exists")
            return
        }
        
        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if (!newUser && error) {
             showToast("Error",error,"error")
                return;
            }
            
            if (newUser) {
                const userDoc = {
                    uid: newUser.user.uid,
                    email: inputs.email,
                    userName: inputs.userName,
                    fullName: inputs.fullName,
                    bio: "",
                    profilePicURL: "",
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now()
                };

                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));
                loginUser(userDoc)
                showToast("Account created", "We've created your account for you.",'success')
            }
        } catch (error) {
           
            showToast("Error",error,"error")
        }
    }

    return { loading, error, signup };
}

export default useSignUpWithEmailAndPassword;