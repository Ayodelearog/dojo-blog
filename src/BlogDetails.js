import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom";


const BlogDetails = () => {
    const { id } = useParams();
    const { data:blog, isLoading, error } = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();
    



    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE"
        }).then(() => {
            history.push("/home")
        })
    }


    return ( 
        <div className="blog-details">
            { isLoading && <div>Loading...</div> }
            { error && <div>error</div> }
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;