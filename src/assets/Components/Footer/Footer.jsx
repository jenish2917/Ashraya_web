import { Link } from "react-router-dom"
import "./Footer.module.css"
export default function Footer(){
    return (<>
    <footer>
        <ul>
            <li><Link to="/Careers">Careers</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="#">Communication</Link></li>
        </ul>
    </footer>
    
    </>)
}