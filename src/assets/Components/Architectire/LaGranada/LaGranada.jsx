import { useLocation } from 'react-router-dom';
import ArchitectureData from "../../../../../public/Data/Architecture.json";
import styles from "./LaGranada.module.css";

export default function LaGranada() {
    const location = useLocation();
    const { state } = location;
    const project = ArchitectureData.find(item => item.title === state.title);

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>{project.title}</h1>
            <img src={project.image} alt={project.title} className={styles.mainImage} />
            <p className={styles.description}>{project.description}</p>
            <div className={styles.subImages}>
                {project.sumImages.map((img, index) => (
                    <img key={index} src={img} alt={`${project.title} ${index + 1}`} className={styles.subImage} />
                ))}
            </div>
        </div>
    );
}
