
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import './App.css'
import { auth } from './Components/Firebase/firebase.init';

function App() {
    
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSingIn = () =>{

    signInWithPopup(auth,googleProvider)
    .then(result => {
       console.log(result.user);
    })
    .catch(error => console.log('ERROR',error))
  }

  return (
   <div>
      <button onClick={handleGoogleSingIn}>Login with Google</button>
   </div>
  )
}

export default App
