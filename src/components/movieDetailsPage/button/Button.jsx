import React from 'react';
import styles from "./Button.module.css";

const Button = ({handler}) => {
    return (
        <div className={styles.container__button}>
            <button className={styles.button} type='button' onClick={handler}>Go back</button> 
        </div>
    )
};

export default Button;