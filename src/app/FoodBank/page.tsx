import React from 'react';
import styles from '../Referrals/page.module.css';
import {redirect} from 'next/navigation';
import Navbar from "@/components/Navigation/Navbar";
import Underline from "@/components/Home/Underline";
import Footer from "@/components/Navigation/Footer";

const HasRole = () => {
    //Todo Logic for Roles
  return true;
};

const FoodBank: React.FC = () => {
    const userHasRole = HasRole();

    if(!userHasRole) {
        redirect("/")
    }


    return (
        <div>
            <Navbar />
            <Underline />

            <div className={styles.Wrapper}>
            <div className={styles.Header}>FoodBank
                <div className={styles.UnderHeader}>
                    Welcome to FoodBank!
                </div>

                <div className={styles.SearchWrapper}>
                <div className={styles.FormContainer}>
                    <input className={styles.SearchInput} type="text" id="SearchBox" name="SearchBox" placeholder="Enter Text" />
                </div>
                </div>


                <div className={styles.SearchBox}>
                DDDDDDDDDDDDDDDDDDDDDDDD
                </div>
            </div></div>
        </div>
    );
};

export default FoodBank;
