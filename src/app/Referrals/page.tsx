import React from 'react';
import styles from '../Referrals/page.module.css';
import {redirect} from "next/navigation";
import Navbar from "@/components/Navigation/Navbar";
import Underline from "@/components/Home/Underline";

const HasRole = () => {
    //Todo Logic for Roles
    return true;
};

const Referrals: React.FC = () => {
    const userHasRole = HasRole();

    if (!userHasRole) {
        redirect("/")
    }


    return (
        <div>
            <Navbar/>
            <Underline/>

            <div className={styles.Wrapper}>
                <div className={styles.Header}>Referrals
                    <div className={styles.UnderHeader}>
                        Welcome to Referrals!
                    </div>

                    <div className={styles.SearchWrapper}>
                        <div className={styles.FormContainer}>
                            <input className={styles.SearchInput} type="text" id="SearchBox" name="SearchBox"
                                   placeholder="Enter Text"/>
                        </div>
                    </div>


                    <div className={styles.SearchBox}>
                        DDDDDDDDDDDDDDDDDDDDDDDD
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Referrals;
