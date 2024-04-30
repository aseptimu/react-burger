import React from 'react';
import loader from '../../images/loader.gif';
import styles from './loader.module.css';

function Loader() {
    return (
        <div className={styles.wrapper}>
            <img src={loader} alt={'Loading...'}/>
        </div>
    );
}

export default Loader;