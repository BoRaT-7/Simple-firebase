// Login.jsx
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        console.log("User Info:", result.user);
      })
      .catch(error => {
        console.log("ERROR:", error);
      });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleGoogleSignIn}>Login with Google</button>
    </div>
  );
};

export default Login;
