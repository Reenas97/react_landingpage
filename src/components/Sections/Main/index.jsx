import styles from "./styles.module.css"
import mainImg from "../../../assets/images/main__img.jpg"
import GreyButton from "../../GreyButton"
import SocialMedia from "../../SocialMedia"


export default function Main(){
    return(
        <main className="container" id="aboutUs">
            <div className={styles.mainContent}>
              <div className={styles.mainContent__txt}>
                <span className="line"></span>
                <h1><span>I’m Sonali a</span> Web developer</h1>
                <p>
                  I craft high-performing, beautiful websites
                  that are conversion-focused, brand-accurate, 
                  & people-friendly.
                </p>
                <GreyButton
                  className= {styles.mainContent__btn}
                  link = "#contact"
                  text ="Let's Talk"
                />
                <div className={styles.mainContent__follow}>
                  <h2>Follow me</h2>
                  <SocialMedia />
                </div>
              </div>
              <div className={styles.mainContent__img}>
                <img src={mainImg} alt="Sonali Photo" />
              </div>
            </div>
        </main>
    )
}