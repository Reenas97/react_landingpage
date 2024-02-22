import styles from "./styles.module.css"
import GreyButton from "../../GreyButton"

export default function Contact(){
    return (
        <section className={`container ${styles.contact}`} id="contact">
            <h2>Keep in touch with me <br /> Say Hi!</h2>
            <div style={{display: "flex"}}>
              <GreyButton 
                className = {styles.contactButton}
                link = "https://api.whatsapp.com/send?phone=5511999999999"
                text ="Start Conversation"
              />
            </div>
        </section>
    )
}