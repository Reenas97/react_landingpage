import styles from "./styles.module.css"

export default function Navbar(props){
    return(
        <nav className={`${styles.header__nav} ${props.className ? props.className: ''}`}>
            <a href="#aboutUs" onClick={props.menuHide}>About Us</a>
            <a href="#services" onClick={props.menuHide}>Services</a>
            <a href="#portfolio" onClick={props.menuHide}>Portfolio</a>
            <a href="#testimonials" onClick={props.menuHide}>Testimonials</a>
        </nav>
    )
}