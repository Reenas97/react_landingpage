import styles from "./styles.module.css"


export default function GreyButton(props){
    return (
        <a   
            className={`${styles.greyBtn} 
            ${props.className ? props.className : ''}`} 
            href={props.link ? props.link : ''}
            onClick={props.doSomething}
        >
            {props.text}
        </a>
    )
}