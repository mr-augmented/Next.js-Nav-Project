import React from 'react';
import styles from '../styles/MapUI.module.css';

function MapUI({
    longitude, setLongitude,
    latitude, setLatitude,
    name, setName,
    description, setDescription,
    image, setImage,
    arObject, setArObject
}) {
    return (
        <div className={styles['ui-container']}>
            <h1>Creator Studio</h1>
            <h2>Set experience details</h2>
            <div className={styles['form-group']}>
                <label htmlFor="longitude">Longitude</label>
                <input
                    type="number"
                    id="longitude"
                    value={longitude}
                    onChange={(e) => setLongitude(parseFloat(e.target.value))}
                />
            </div>
            <div className={styles['form-group']}>
                <label htmlFor="latitude">Latitude</label>
                <input
                    type="number"
                    id="latitude"
                    value={latitude}
                    onChange={(e) => setLatitude(parseFloat(e.target.value))}
                />
            </div>
            <div className={styles['form-group']}>
                <label htmlFor="name">Item Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder="Ex: Awesome Work!"
                />
            </div>
            <div className={styles['form-group']}>
                <label htmlFor="description">Description</label>
                <textarea className={styles['description']} placeholder="Enter description"></textarea>
            </div>
            <div className={styles['form-group']}>
                <label htmlFor="name">Collection Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder="Ex: Neon Cars"
                />
            </div>
            <div className={styles['form-group']}>
                <label>
                    Public
                    <input
                        type="checkbox"
                        id="isPublicCheckbox"
                    />
                    <br />
                    <span className={styles['non-bold-text']}>drop your Pillar for everyone</span>
                </label>
            </div>
            <div className={styles['form-group']}>
            <label htmlFor="image" className={styles['custom-upload-label']}>
                <img src="/images/Upload.svg" alt="Upload" className={styles['custom-icon']} />
            </label>
            <input
                type="file"
                id="image"
                accept="image/*"
                className={styles['custom-upload-input']}
            />
            </div>
            <div className={styles['buttons-container']}>
                <button className={styles['save-button']}>Save Experience</button>
            </div>
            <div className={styles['buttons-container']}>
            <button className={styles['cancel-button']}>Cancel</button>
            </div>
        </div>
    );
}

export default MapUI;
