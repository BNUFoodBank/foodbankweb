"use client"
import React, {useEffect, useState} from 'react';
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

interface Filters {
    searchText: string;
    dietaryRestrictions: string[];
}

const FoodBank: React.FC = () => {
    const [foodBanks, setFoodBanks] = useState<FoodBank[]>([]);
    const [filters, setFilters] = useState<Filters>({
        searchText: '',
        dietaryRestrictions: [],
    });

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
        setFilters((prevFilters) => ({
            ...prevFilters,
            searchText: event.target.value,
        }));
    };

    const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
        setFilters((prevFilters) => ({
            ...prevFilters,
            dietaryRestrictions: selectedOptions,
        }));
    };

    const handleClearFilters = () => {
        setFilters({
            searchText: '',
            dietaryRestrictions: [],
        });
    };

    const handleRemoveFilters = () => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            dietaryRestrictions: [],
        }));
    };

    const hardcodedDietaryRestrictions = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Nut-Free'];

    const filteredFoodBanks = foodBanks.filter((foodBank) =>
        foodBank.name.toLowerCase().includes(filters.searchText.toLowerCase()) &&
        (filters.dietaryRestrictions.length === 0 ||
            (foodBank.dietaryRestrictions &&
                foodBank.dietaryRestrictions.some((restriction) =>
                    filters.dietaryRestrictions.includes(restriction)
                )))
    );


    return (
        <div>
            <Navbar/>
            <Underline/>

            <div className={styles.Wrapper}>
                <div className={styles.Header}>
                    FoodBank
                    <div className={styles.UnderHeader}>Welcome to FoodBank!</div>

                    <div className={styles.SearchWrapper}>
                        <div className={styles.FormContainer}>
                            <div className={styles.SearchText}>Search</div>
                            <input
                                className={styles.SearchInput}
                                type="text"
                                id="SearchBox"
                                name="SearchBox"
                                placeholder="Enter Text"
                                value={filters.searchText}
                                onChange={handleSearchChange}
                            />
                            <div className={styles.DietaryRestrictions}>
                                <p>Dietary Restrictions:</p>
                                <select
                                    multiple
                                    value={filters.dietaryRestrictions}
                                    onChange={handleDropdownChange}
                                >
                                    {hardcodedDietaryRestrictions.map((restriction) => (
                                        <option key={restriction} value={restriction}>
                                            {restriction}
                                        </option>
                                    ))}
                                </select>
                            </div>

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
                        <p>
                            Shopping List:{' '}
                            <a href={foodBank.shoppingList} target="_blank" rel="noopener noreferrer">
                                Link
                            </a>
                        </p>

                        {foodBank.items && Object.keys(foodBank.items).length > 0 && (
                            <div>
                                <p>Items:</p>
                                <ul>
                                    {Object.entries(foodBank.items).map(([item, quantity]) => (
                                        <li key={item}>
                                            {item}: {quantity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>


            <button
                className={styles.RemoveFiltersButton}
                onClick={handleRemoveFilters}
            >
                Remove Filters
            </button>


        </div>
    );
};

export default FoodBank;
