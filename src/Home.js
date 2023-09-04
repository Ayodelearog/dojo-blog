import BlogList from "./BlogList";
import useFetch from "./useFetch";
// import { GoogleAuth, user } from './Signup/GoogleAuth'
import { useUser } from './userContext'; // Import useUser hook

const Home = () => {
	const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");
	const { userDetails } = useUser(); // Access user data from UserContext


	return (
		<div className="home">
			{/* {userDetails && userDetails.displayName} */}
			{error && <div>{ error }</div>}
			{isLoading && <div>Loading...</div>}
			{ blogs && <BlogList blogs={blogs} title="All Blogs!" />}
		</div>
	);
};

export default Home;
