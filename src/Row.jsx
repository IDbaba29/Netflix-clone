import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState({});
    // a snippet of code which runs on a specific condition/variable
    useEffect(() => {
        // if [], is empty the useEffect run once only when you load the page, but if we pass in movies .e [movies], useEffect would load when movies in the use state line changes
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            return request;
        }
        fetchData();
    }, []);



    return (
        <div>
            {/* title */}
            <h2>{title}</h2>


            {/* container with bunch of posters for each films*/}
        </div>
    )
}

export default Row