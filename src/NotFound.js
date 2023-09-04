import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notFound">
            <h2>Oops...</h2>
            <p>Page not found</p>

            <Link to="/home">Go back home</Link>
        </div>
    );
}
 
export default NotFound;