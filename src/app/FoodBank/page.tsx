"use client"
import React, { useEffect, useState } from 'react';
import Navbar from "@/components/Navigation/Navbar";
import Underline from "@/components/Home/Underline";
import styles from '../FoodBank/page.module.css';

interface FoodBank {
    name: string;
    address: string;
    dietaryRestrictions: string[];
    shoppingList: string;
    items?: Record<string, number>;
}

const FoodBank: React.FC = () => {
    const [foodBanks, setFoodBanks] = useState<FoodBank[]>([]);
    const [searchText, setSearchText] = useState<string>('');

    useEffect(() => {
        loadFB().then((data) => setFoodBanks(data));
    }, []);

    const loadFB = async () => {
        try {
            const response = await fetch('http://localhost:5202/foodbanks', {
                cache: 'no-store',
                method: 'GET',
            });

            if (response.ok) {
                const data: FoodBank[] = await response.json();
                return data;
            } else {
                console.error('Error loading food banks:', response.status, response.statusText);
                return [];
            }
        } catch (error: any) {
            console.error('Error loading food banks:', error.message);
            return [];
        }
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const filteredFoodBanks = foodBanks.filter((foodBank) =>
        foodBank.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div>
            <Navbar/>
            <Underline/>

            <div className={styles.Wrapper}>
                <div className={styles.Header}>
                    FoodBank
                    <div className={styles.UnderHeader}>
                        Welcome to FoodBank!
                    </div>

                    <div className={styles.SearchWrapper}>
                        <div className={styles.FormContainer}>
                            <div className={styles.SearchText}>
                                Search
                            </div>
                            <input
                                className={styles.SearchInput}
                                type="text"
                                id="SearchBox"
                                name="SearchBox"
                                placeholder="Enter Text"
                                value={searchText}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.FoodBankContainer}>
                {filteredFoodBanks.map((foodBank) => (
                    <div key={foodBank.name} className={styles.FoodBankCard}>
                        <h2>{foodBank.name}</h2>
                        <p>{foodBank.address}</p>
                        {foodBank.dietaryRestrictions && foodBank.dietaryRestrictions.length > 0 && (
                            <p>Dietary Restrictions: {foodBank.dietaryRestrictions.join(', ')}</p>
                        )}
                        <p>Shopping List: <a href={foodBank.shoppingList} target="_blank"
                                             rel="noopener noreferrer">Link</a></p>

                        {foodBank.items && Object.keys(foodBank.items).length > 0 && (
                            <div>
                                <p>Items:</p>
                                <ul>
                                    {Object.entries(foodBank.items).map(([item, quantity]) => (
                                        <li key={item}>{item}: {quantity}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default FoodBank;
