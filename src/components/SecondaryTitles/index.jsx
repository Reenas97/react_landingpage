
import styles from "./styles.module.css"

export default function SecondaryTitles(props){
    return (
        <div className={`${styles.titleSection} ${props.className ? props.className : ''}`}>
            <h2>{props.title}</h2>
            <p>{props.sectionText}</p>
        </div>
    )
}