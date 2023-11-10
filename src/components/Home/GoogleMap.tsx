'use client'
import React, {useEffect, useState} from 'react';
import {GoogleMap, InfoWindow, LoadScript, Marker} from '@react-google-maps/api';
import styles from './Map.module.css';

const mapContainerStyle: React.CSSProperties = {
    width: '95%',
    height: '100vh',
    margin: '0 auto', // Center the map horizontally
    display: 'flex',
    flexDirection: 'column' as 'column', // Add type annotation for flexDirection
    alignItems: 'center',
};

const GoogleMapComponent: React.FC = () => {
    const [userLocation, setUserLocation] = useState({lat: 0, lng: 0});
    const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false); // State to control InfoWindow visibility
    const londonCenter = {lat: 51.5074, lng: -0.1278};

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error('Error getting geolocation:', error);
                    // You can handle errors here, e.g., by providing a default location
                    // setUserLocation(londonCenter);
                }
            );
        }
    }, []);

    const handleMarkerClick = () => {
        setIsInfoWindowOpen(true);
    };

    const handleInfoWindowClose = () => {
        setIsInfoWindowOpen(false);
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
                    {userLocation.lat !== 0 && (
                        <Marker position={userLocation} onClick={handleMarkerClick}>
                            {isInfoWindowOpen && (
                                <InfoWindow position={userLocation} onCloseClick={handleInfoWindowClose}>
                                    <div>
                                        <p>Your Are Here!</p>
                                    </div>
                                </InfoWindow>
                            )}
                        </Marker>
                    )}
                </GoogleMap>
            </LoadScript>
            <div className={styles.whitespace}></div>
        </div>
    );
};

export default GoogleMapComponent;
