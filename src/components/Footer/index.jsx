import Navbar from "../Navbar"
import SocialMedia from "../SocialMedia"
import styles from "./styles.module.css"

export default function Footer(){
    return (
        <footer className={styles.footerContainer}>
            <Navbar />
            <SocialMedia />
        </footer>
    )
}