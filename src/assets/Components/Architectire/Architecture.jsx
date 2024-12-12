import styles from "./Architecture.module.css"
import Card from "./card/Card"
import ArchitectureData from "../../../../public/Data/Architecture.json"
export default function Architecture(){

    return(
        <>
            <h2 className={styles.architectureHead}>Architecture</h2>
            <div className={styles.architectureSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search project"/> 
            </div>
            <div className={styles.ImageCon} > 
              {
                ArchitectureData.map((item,index)=>(
                 <Card  key={index} image={item.image} description={item.description} title={item.title} subImage={item.sumImages} pattern={item.pattern} />
                ))
              }
            </div>
        </>
    )
}