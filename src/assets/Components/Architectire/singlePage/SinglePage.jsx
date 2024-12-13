import {  useParams } from 'react-router-dom';
import ArchitectureData from "../../../../../public/Data/Architecture.json";
import styles from "./SinglePage.module.css";
import { useEffect, useState } from 'react';

export default function LaGranada() {
    const { id } = useParams();
    console.log(id);
    
    const [item,setItem] = useState({});
   
        useEffect(()=>{

           var item = ArchitectureData.find((item) => item.id === parseInt(id));
            console.log(item);
            
            if(item){
                setItem(item);
                console.log(item);
                
            }
        },[id])
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>{item.title}</h1>
            <img src={item.image} alt={item.title} className={styles.mainImage} />
            <p className={styles.description}>{item.description}</p>
            <div className={styles.sumImages}>
            {Array.isArray(item.subImages) && item.subImages.map((itemImage, index) => {
            return <img src={itemImage} key={index} alt={`Sub image ${index + 1}`} className={styles.subImage}/>;
        })}
            </div>
            <p></p>
        </div>
    );
}
 