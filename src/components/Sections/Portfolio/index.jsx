import styles from "./styles.module.css"
import SecondaryTitles from "../../SecondaryTitles"
import PorfolioCard from "./PortfolioCard"
import work01 from "../../../assets/images/portfolio/work01.jpg"
import work02 from "../../../assets/images/portfolio/work02.jpg"
import work03 from "../../../assets/images/portfolio/work03.jpg"
import work04 from "../../../assets/images/portfolio/work04.jpg"
import work05 from "../../../assets/images/portfolio/work05.jpg"
import GreyButton from "../../GreyButton"
import { useState } from "react"

export default function Portfolio(){
  const [buttonText, setButtonText] = useState('Browse All')
  function changeButtonText(ev){
    ev.preventDefault()
    setButtonText(buttonText === "Browse All" ? "Browse Less" : "Browse All")
  }

  return(
    <section className="container" id="portfolio">
      <div className="section__title">
        <span className="line"></span>
        <SecondaryTitles 
          title="SELECTED WORKS"
          sectionText="Take a look of some of my projects I have done.."
        />
      </div>
      <PorfolioCard 
        image = {work01}
        category = "SportX - Website design"
        title = "Sports Website Design"
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
        link = "#"
      />
      <PorfolioCard 
        image = {work02}
        category = "NFTme - WordPress Development"
        title = "NFT web development"
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
        link = "#"
        reverse="true"
      />
      <PorfolioCard 
        image = {work03}
        category = "Dentos - Webflow Development"
        title = "Dentist Web Development"
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."
        link = "#"
      />
      <div className={buttonText === "Browse All" ? styles.showLessWorks : styles.showAllWorks}>
        <PorfolioCard 
          image = {work04}
          category = "Photography - Website design"
          title = "Photography Website Design"
          text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Elit ut aliquam, purus sit amet luctus venenatis. Sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."
          link = "#"
          reverse="true"
        />
        <PorfolioCard 
          image = {work05}
          category = "MusicX - Website design"
          title = "MusicX Website Design"
          text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Elit ut aliquam, purus sit amet luctus venenatis. Sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."
          link = "#"
        />
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <GreyButton 
          doSomething = {changeButtonText}
          text ={buttonText}
        />
      </div>
    </section>
  )
}