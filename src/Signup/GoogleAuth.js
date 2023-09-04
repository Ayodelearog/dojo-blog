import React, { useState } from "react";
import { auth, provider, signInWithPopup } from "../Firebase";
import { signInWithGooglePopup } from "../Firebase";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useUser } from '../userContext'; // Import useUser hook

const GoogleAuth = () => {
  const history = useHistory();
  // const [userDetails, setUserDetails] = useState(null);
  const { setUserDetails } = useUser(); // Access setUser from UserContext
 

	const handleGoogleSignIn = async () => {
		try {
			const result = await signInWithGooglePopup();
			const user = result.user;
			console.log(`Successfully signed in with Google: ${user.displayName}`);

      // redirect user to home
      history.push("/home")

      setUserDetails(user);

		} catch (error) {
			console.error(error);
		}
	};

 

	return (
		<div className="signin-page">
			<h1>SignIn with Google</h1>
			<button onClick={handleGoogleSignIn}>Sign in with Google</button>
		</div>
	);
};

export default GoogleAuth;
