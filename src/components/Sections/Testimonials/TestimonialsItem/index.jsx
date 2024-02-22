import styles from "./styles.module.css"
import quotes from "../../../../assets/images/icons/quote.png"


export default function TestimonialsItem(props){
    return(
        <div className={`${styles.testimonialItem} ${props.reverse === "true" ? styles.reverse : ''}`}>
            <div className={styles.testimonialItem__img}>
                <img src={props.photo} alt={props.author} />
            </div>
            <div className={styles.testimonialItem__content}>
                <img src={quotes} alt="" />
                <p className={styles.testimonialItem__content__txt}>{props.testimonial}</p>
                <p className={styles.testimonialItem__content__about}>{props.author}</p>
                <p className={styles.testimonialItem__content__about}>{props.authorOccupation}</p>
            </div>
        </div>
    )
}