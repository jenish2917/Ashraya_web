import  styles  from "./Home.module.css"
export default function Home()
{
    return(
    <>
   
    <div className={styles.logoContainer}>
        <div className={styles.logo}>
            <img src="/public/loggo.jpg" alt="Company Logo" id="logo_main"/>
        </div>
        <h1 className={styles.companyName}>Ashraya Architects</h1>
    </div>
        </>
    )
}