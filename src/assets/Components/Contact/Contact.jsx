import { useLocation } from 'react-router-dom';
import styles from "./Contact.module.css";

export default function Contact() {
    const location = useLocation();
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Contact Us</h1>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input type="text" id="name" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input type="email" id="email" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea id="message" className={styles.textarea}></textarea>
                </div>
                <button type="submit" className={styles.button}>Submit</button>
            </form>
        </div>
    );
}