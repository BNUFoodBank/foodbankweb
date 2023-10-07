// components/Grid.tsx
import styles from './Grid.module.css';

const Grid: React.FC = () => {
    return (
        <div className={styles.grid}>
            <div className={styles.gridItem}>
                <img
                    src="https://cdn.discordapp.com/attachments/1123787722776121385/1160280604953280552/hand-drawn-food-bank-illustration_23-2149323304.png?ex=65341685&is=6521a185&hm=3571795fa25a2a39581087dc2b861657d794aadd7176ccf973756907ba59f5b7&" // Replace with the actual image source
                    alt="Image 1"
                    className={styles.image}
                />
                <button className={styles.imageButton}>View Image</button>
            </div>
            <div className={styles.gridItem}>
                <img
                    src="https://cdn.discordapp.com/attachments/1123787722776121385/1160280604953280552/hand-drawn-food-bank-illustration_23-2149323304.png?ex=65341685&is=6521a185&hm=3571795fa25a2a39581087dc2b861657d794aadd7176ccf973756907ba59f5b7&" // Replace with the actual image source
                    alt="Image 2"
                    className={styles.image}
                />
                <button className={styles.imageButton}>View Image</button>
            </div>
            <div className={styles.gridItem}>
                <img
                    src="https://cdn.discordapp.com/attachments/1123787722776121385/1160280604953280552/hand-drawn-food-bank-illustration_23-2149323304.png?ex=65341685&is=6521a185&hm=3571795fa25a2a39581087dc2b861657d794aadd7176ccf973756907ba59f5b7&" // Replace with the actual image source
                    alt="Image 3"
                    className={styles.image}
                />
                <button className={styles.imageButton}>View Image</button>
            </div>
        </div>
    );
};

export default Grid;
