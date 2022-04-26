import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
    const params = useParams()
    console.log(params)
    // Description
    // Cast
    // Review


    return (
        <h1>Film</h1>
    )

};

export default MovieDetailsPage;