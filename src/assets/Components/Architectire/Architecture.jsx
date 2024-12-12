import { useNavigate } from 'react-router-dom';
import styles from "./Architecture.module.css";
import ArchitectureData from "../../../../public/Data/Architecture.json";

export default function Architecture() {
    const navigate = useNavigate();

    const handleClick = (title) => {
        if (title.trim() === "LA GRANADA") {
            navigate('/LaGranada', { state: { title } });
        } else if (title.trim() === "THE EMPIRE") {
            navigate('/TheEmpire', { state: { title } });
        }
    };

    return (
        <>
            <h2 className={styles.architectureHead}>Architecture</h2>
            <div className={styles.architectureSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search project"/> 
            </div>
            <div className={styles.ImageCon}> 
                {
                    ArchitectureData.map((item, index) => (
                        <div key={index} id={styles[`pattern${item.pattern}`]} onClick={() => handleClick(item.title)}>
                            <img src={item.image} alt={item.title} />
                            <span className="title">{item.title}</span>
                        </div>
                    ))
                }
            </div>
        </>
    );
}