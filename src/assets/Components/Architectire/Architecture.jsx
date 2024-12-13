import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Architecture.module.css";
import ArchitectureData from "../../../../public/Data/Architecture.json";

export default function Architecture() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const handleClick = (id) => {
        navigate(`/singlepage/${id}`);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = ArchitectureData.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    ).reverse(); 

    return (
        <>
            <h2 className={styles.architectureHead}>Architecture</h2>
            <div className={styles.architectureSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    type="text"
                    placeholder="Search project"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className={styles.ImageCon}>
                {filteredData.map((item, index) => (
                    <div key={index} id={styles[`pattern${item.pattern}`]} onClick={() => handleClick(item.id)}>
                        <img src={item.image} alt={item.title} />
                        <span className="title">{item.title}</span>
                    </div>
                ))}
            </div>
        </>
    );
}