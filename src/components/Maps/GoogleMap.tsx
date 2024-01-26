'use client'
import React, {useEffect, useState} from 'react';
import {GoogleMap, InfoWindow, LoadScript, Marker} from '@react-google-maps/api';
import styles from './Map.module.css';

const mapContainerStyle: React.CSSProperties = {
    width: '95%',
    height: '100vh',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
};

const GoogleMapComponent: React.FC = (style: React.CSSProperties) => {
    const [userLocation, setUserLocation] = useState<{ lat: number; lng: number }>({lat: 0, lng: 0});
    const [foodBanks, setFoodBanks] = useState<any[]>([]);
    const [selectedFoodBank, setSelectedFoodBank] = useState<any | null>(null);
    const londonCenter = {lat: 51.5074, lng: -0.1278};

    useEffect(() => {
        loadFB().then((data) => setFoodBanks(data));

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error('Error getting user location:', error.message);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    const loadFB = async () => {
        try {
            const response = await fetch('http://localhost:5202/foodbanks', {
                cache: 'no-store',
                method: 'GET',
            });

            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                console.error('Error loading food banks:', response.statusText);
                return [];
            }
        } catch (error: any) {
            console.error('Error loading food banks:', error.message);
            return [];
        }
    };

    const handleMarkerClick = (foodBank: any) => {
        setSelectedFoodBank(foodBank);
    };

    const handleInfoWindowClose = () => {
        setSelectedFoodBank(null);
    };

    return (
        <div style={mapContainerStyle}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2 className={styles.Hometext1}>Our Mission</h2>
                    <p>
                        We are dedicated to helping those in need by providing essential food
                        items and support to ensure that no one goes hungry.
                    </p>
                    <p className={styles.Hometext3}>
                        Our mission is to alleviate hunger and food insecurity by distributing
                        nutritious food, offering assistance programs, and supporting families
                        and individuals who are facing difficult times.
                    </p>
                    <button className={styles.ctaButton}>Learn More</button>
                </div>
            </div>
            <LoadScript
                googleMapsApiKey="AIzaSyD4DFcFPg30jSSAy8m7aoEpPzDTRSMpLAs"
            >
                <GoogleMap
                    mapContainerStyle={{
                        width: '100%',
                        height: '100vh',
                    }}
                    center={userLocation.lat !== 0 ? userLocation : londonCenter}
                    zoom={12}
                >
                    {foodBanks.map((foodBank) => (
                        <Marker
                            key={foodBank.name}
                            position={{
                                lat: parseFloat(foodBank.latLng.split(',')[0]),
                                lng: parseFloat(foodBank.latLng.split(',')[1]),
                            }}
                            onClick={() => handleMarkerClick(foodBank)}
                        />
                    ))}

                    {selectedFoodBank && (
                        <InfoWindow
                            position={{
                                lat: parseFloat(selectedFoodBank.latLng.split(',')[0]),
                                lng: parseFloat(selectedFoodBank.latLng.split(',')[1]),
                            }}
                            onCloseClick={handleInfoWindowClose}
                        >
                            <div>
                                <h2>{selectedFoodBank.name}</h2>
                                <p>{selectedFoodBank.address}</p>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </LoadScript>
            <div className={styles.whitespace}></div>
        </div>
    );
};

export default GoogleMapComponent;