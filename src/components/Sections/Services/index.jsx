import styles from "./styles.module.css"
import SecondaryTitles from "../../SecondaryTitles"
import ServicesCard from "./ServicesCard"


export default function Services(){
    return(
        <section className="bg--grey" id="services">
            <div className="container">
                <div className={styles.servicesSection}>
                    <div className={styles.servicesSection__title}>
                        <div>
                            <span className="line white"></span>
                            <SecondaryTitles 
                                className="titleSection__white"
                                title="Services I Offer"
                                sectionText="I will help wou with finding a solution and solve your problem."
                            />
                        </div>
                        <div className={styles.letsTalk}>
                            <p>Let's Talk</p>
                        </div>
                    </div>
                    <div className={styles.servicesSection__items}>
                        <ServicesCard 
                            number = "01"
                            title = "Web Design"
                            text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
                        />
                        <ServicesCard 
                            number = "02"
                            title = "WordPress Development"
                            text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
                        />
                        <ServicesCard 
                            number = "03"
                            title = "Webflow Development"
                            text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}