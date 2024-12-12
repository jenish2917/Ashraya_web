 import styles from "./Card.module.css"
 import PropTypes from 'prop-types';
export default function Card({ image , description , title , subImage , pattern }){
    return(
        <>
           
              
                   {pattern == 1 ? <img src={image} id={styles.pattern1}/> : pattern == 2 ?  <img src={image} id={styles.pattern2} /> : pattern == 3 ? <img src={image} id={styles.pattern3}  /> : pattern ==4 ?  <img src={image} id={styles.pattern4} /> : ""}
             

           

</>
        
    )
}
Card.propTypes = {
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    title: PropTypes.string,
    subImage: PropTypes.string,
    pattern: PropTypes.number.isRequired,
  };
