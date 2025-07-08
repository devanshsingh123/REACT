import styles from "./Navbar.module.css"
import photoFolio from "../../images/logo.png"

const Navbar = ()=>{
   return(
    <div className={styles.navbar}>
        <div className={styles.navbar_logo}>
            <img  className={styles.logo} src={photoFolio} alt="logo"/>
            <span>PhotoFolio</span>
            </div>
        </div>
   )
}

export default Navbar;