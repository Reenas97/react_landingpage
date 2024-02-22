import dribbbleIcon from "../../assets/images/icons/dribbble.png"
import linkedinIcon from "../../assets/images/icons/linkedin.png"
import twitterIcon from "../../assets/images/icons/twitter.png"
import instagramIcon from "../../assets/images/icons/instagram.png"
import styles from "./styles.module.css"


export default function SocialMedia(){
    return (
        <ul className={styles.socialIcons}>
          <li>
            <a href="#" target="_blank">
                <img src={dribbbleIcon} alt="Access our dribbble account" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
                <img src={linkedinIcon} alt="Access our linkedin account" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
                <img src={twitterIcon} alt="Access our twitter account" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
                <img src={instagramIcon} alt="Access our instagram account" />
            </a>
          </li>
        
        </ul>
    )
}