// sfc stands for STATELESS FUNCTIONAL COMPONENT

import { Link } from "react-router-dom";
import { useUser } from "./userContext";

const Navbar = () => {
	const { userDetails } = useUser(); // Access user data from UserContext

	console.log(userDetails && userDetails);
	return (
		<nav className="navbar">
			<h1>The Dojo Blog</h1>

			{userDetails && (
				<div className="links">
					<Link to="/home"> Home </Link>
					<Link to="/create"> New Blog </Link>
				</div>
			)}

			{userDetails && (
				<div className="user-img-name">
					<p>Welcome, {userDetails.displayName.split(" ")[0]}</p>
					<img
						src={`${userDetails.photoURL}`}
						alt="display picture"
						className="userDP"
					/>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
