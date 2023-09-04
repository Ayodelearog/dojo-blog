import { useEffect, useState } from "react";



const useFetch = (url) => {
    const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	

	

	useEffect(() => {
		// creating an abort controller object to stop useEffect from rending data to the dom when component is unmounted
		const abortCont = new AbortController();

		setTimeout(() => {
			fetch(url, { signal: abortCont.signal })
			.then((response) => {
				if (!response.ok) {
					throw Error("Could not fetch data for that resource. Check endpoint");
				}
				return response.json()
			})
			.then((data) => {
				setData(data);
				setIsLoading(!true);
				setError(null);
			}).catch ((error) => {
				if (error.name === "AbortError") {
					console.log("fetch aborted");
				} else {
					setError(error.message);
					setIsLoading(!true);
				}
			})
		}, 1500)

		return () => abortCont.abort();
	}, [url]);


    return { data, isLoading, error }
}
 
export default useFetch;



