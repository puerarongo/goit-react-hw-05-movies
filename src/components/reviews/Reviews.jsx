import styles from "./Reviews.module.css";

const Reviews = ({ review }) => {
    return (
        <div>
            <h1 className={styles.title}>Reviews</h1>
            <ul className={styles.reviws__list}>
                {review.map(({ id, author, content }) => {
                    return <li key={id} className={styles.review}>
                        <h2 className={styles.author}>{author}</h2>
                        <p className={styles.text}>{content}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Reviews;