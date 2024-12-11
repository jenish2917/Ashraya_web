import Styles from "./Architecture.module.css"
import ArchitectureData from "../../../../public/Data/Architecture.json"
import Card from "./card/Card"
export default function Architecture(){

    return(
        <>
            <h2 className={Styles.architectureHead}>Architecture</h2>
            <div className={Styles.architectureSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search project"/> 
            </div>
            <div>
              {
                ArchitectureData.map((item,index)=>(
                   
                 <Card key={index} image={item.image} description={item.description} title={item.title} subImage={item.sumImages} priority={item.priority}/>
                ))
              }
            </div>
        </>
    )
}