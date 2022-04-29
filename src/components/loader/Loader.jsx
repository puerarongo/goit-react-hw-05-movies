import React from "react";
import styles from "./Loader.module.css";
import { Rings } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className={styles.container}>
            <Rings color="rgb(255, 124, 16)" height={200} width={200} />
        </div>
    );
};

export default Loader;