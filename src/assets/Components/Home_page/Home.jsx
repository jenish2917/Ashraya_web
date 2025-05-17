import  styles  from "./Home.module.css"
export default function Home()
{
    return(
    <>
   
    <div className={styles.logoContainer}>
        <div className={styles.logo}>
            <img 
                src={`${import.meta.env.BASE_URL}loggo.svg`} 
                alt="Company Logo" 
                id="logo_main"
                style={{
                    maxWidth: "200px",
                    maxHeight: "200px",
                    width: "200px",
                    height: "200px",
                    objectFit: "contain"
                }}
            />
        </div>
        <h1 className={styles.companyName}>Ashraya Architects</h1>
    </div>
        </>
    )
}