import styles from "./About.module.css";

export default function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>About Us</h1>
            <div className={styles.owners}>
                <div className={styles.owner}>
                    <img src="/path/to/owner1.jpg" alt="Priyansh's photo" className={styles.ownerImage} />
                    <div className={styles.ownerDetails}>
                        <p>Priyansh Barvaliya</p>
                    </div>
                </div>
                <div className={styles.owner}>
                    <img src="/path/to/owner2.jpg" alt="Meet's photo" className={styles.ownerImage} />
                    <div className={styles.ownerDetails}>
                        <p>Meet Lad</p>
                    </div>
                </div>
            </div>
        </div>
    );
}