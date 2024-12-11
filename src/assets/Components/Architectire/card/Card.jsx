import styles from "./Card.module.css"
export default function Card({ image,description,title,subImage,priority }){
    return(
        <>
           <div className={styles.ImageCon}>
                <div>
                    { priority < 5 ? <img src={image} alt="" className={styles.pattern1} style={{gridColumnStart:"1", gridColumnEnd:"2", objectFit:"cover"}}/> :  <img src={image} alt="" />}
                   
                </div>

           </div>

</>
        
    )
}
