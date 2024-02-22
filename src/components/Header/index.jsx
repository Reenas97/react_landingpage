import { useState } from "react"
import logo from "../../assets/images/sonali.png"
import Navbar from "../Navbar"
import styles from "./styles.module.css"
import menuIcon from "../../assets/images/icons/menu.svg"
import menuIconClose from "../../assets/images/icons/close.svg"
import MenuMobile from "./menuMobile"

export default function Header(){
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    }

    return(
        <header className={styles.headerContainer}>
            <img src={logo} alt="Sonali" />
            <Navbar 
                className = {styles.menuDesktop}
            />
            <nav className={styles.header__nav}>
                <a href="#contact" className={styles.header__navBtn}>Contact</a>
            </nav>
            <img className={styles.menuIcon} src={!isMenuVisible ? menuIcon : menuIconClose} alt="" onClick={toggleMenu} />
            <MenuMobile visible = {isMenuVisible} menuHide = {toggleMenu} />
        </header>
    )
}