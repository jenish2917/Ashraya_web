 import styles from "./Card.module.css"
 import PropTypes from 'prop-types';
export default function Card({ image , description , title , subImage , pattern }){
    return(
        <>
           
          
           

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
