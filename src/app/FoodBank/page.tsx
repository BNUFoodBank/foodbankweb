import React from 'react';
import styles from '../FoodBank/page.module.css';
import {redirect} from 'next/navigation';
import Navbar from "@/components/Navigation/Navbar";
import Underline from "@/components/Home/Underline";
import Footer from "@/components/Navigation/Footer";

const HasRole = () => {
    //Todo Logic for Roles
  return true;
};

const loadFB = async () => {
    const response = await fetch('http://localhost:5202/foodbanks', {
        cache: 'no-store',
        method: 'GET',
    });

    console.log(response)

    let fas = await response.json();

    console.log(fas);

    return fas;
}

const FoodBank: React.FC = () => {

    loadFB().then(r => console.log(r));
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
                New Stuff Here
                </div>
            </div></div>

            {/* 
            
            Add Entrance Instuctions
            Add Location 
            Add List of what they have and need
            Add function to request food
            
             */}

        </div>
    );
};

export default FoodBank;
