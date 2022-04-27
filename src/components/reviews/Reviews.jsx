import styles from "./Reviews.module.css";

const Reviews = ({ review }) => {
    return (
        <div>
            <ul>
                {review.map(({ id, author, content }) => {
                    return <li key={id} className={styles.reviews__list}>
                        <h3>{author}</h3>
                        <p>{content}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Reviews;