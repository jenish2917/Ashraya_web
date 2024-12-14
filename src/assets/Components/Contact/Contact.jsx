import { useEffect, useState } from 'react';
import styles from "./Contact.module.css";

export default function Contact() {
    const [contactDetails, setContactDetails] = useState({});

    useEffect(() => {
        fetch('/Data/Contact.json')
            .then(response => response.json())
            .then(data => setContactDetails(data[0]));
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Contact Us</h1>
            <div className={styles.details}>
                <p><strong>Company Name:</strong> {contactDetails.companyName}</p>
                <p><strong>Address:</strong> {contactDetails.address}</p>
                <p><strong>Phone:</strong> {contactDetails.phone}</p>
                <p><strong>Email:</strong> <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></p>
            </div>
        </div>
    );
}