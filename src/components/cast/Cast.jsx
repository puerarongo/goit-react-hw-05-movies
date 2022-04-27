import styles from "./Cast.module.css";

const Cast = ({ cast }) => {
    return (
        <div>
            <ul className={styles.cast__list}>
                {cast.map(({ id, name, profile_path, character }) => {
                    return <li key={id} className={styles.character}>
                        <img src={profile_path} alt={id} />
                        <h3>{name}</h3>
                        <p>Character: {character}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Cast;