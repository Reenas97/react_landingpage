import styles from "./styles.module.css"

export default function ServicesCard(props){
    return(
        <div className={styles.serviceItem}>
            <div className={styles.serviceItem__title}>
                <span>{props.number}</span>
                <h3>{props.title}</h3>
            </div>
            <p>{props.text}</p>
        </div>
    )
}