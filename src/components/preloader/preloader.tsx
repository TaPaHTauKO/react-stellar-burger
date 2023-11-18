import { FC } from "react";
import styles from './preloader.module.css'

export const Preloader = () => {

    return (

        <>
            <div className={styles.loadercontainer}>
                <div className={styles.spinner}></div>
            </div>
        </>
    )
}