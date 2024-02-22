import Navbar from "../../Navbar";
import styles from "./styles.module.css";

export default function MenuMobile(props) {
    return (
        <div className={props.visible ? styles.showMenu : styles.hideMenu}>
            <Navbar className={styles.menuMobile} menuHide={props.menuHide}/>
        </div>
    );
}

