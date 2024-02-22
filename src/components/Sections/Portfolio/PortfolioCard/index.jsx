
import styles from "./styles.module.css"
import arrow from "../../../../assets/images/icons/works-arrow.png"

export default function PorfolioCard(props){

    return(
        <div className={`${styles.portfolioItem} ${props.reverse === "true" ? styles.reverse : ''}`}>
            <div className={styles.portfolioItem__img}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={styles.portfolioItem__txt}>
                <p className={styles.portfolioItem__txt__category}>{props.category}</p>
                <h3>{props.title}</h3>
                <p className={styles.portfolioItem__txt__description}>{props.text}</p>
                <a href={props.link} target="_blank">
                    Know more <img src={arrow} alt="" />
                </a>
            </div>
        </div>
    )
}