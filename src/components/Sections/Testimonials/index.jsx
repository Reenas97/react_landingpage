import styles from "./styles.module.css"
import SecondaryTitles from "../../SecondaryTitles"
import TestimonialsItem from "./TestimonialsItem"
import author01 from "../../../assets/images/testimonials/author01.jpg"
import author02 from "../../../assets/images/testimonials/author02.jpg"

export default function Testimonials(){
    return(
        <section className="bg--grey" id="testimonials">
            <div className="container">
              <div className="section__title">
                <span className="line white"></span>
                <SecondaryTitles
                  className="titleSection__white" 
                  title="Testimonials"
                  sectionText="What people say about me"
                />
              </div>
              <TestimonialsItem 
                photo = {author01}
                author = "Andy Smith"
                testimonial = "Sonali helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design."
                authorOccupation = "Founder, Apple"
              />
              <TestimonialsItem 
                photo = {author02}
                author = "John Doe"
                testimonial = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."
                authorOccupation = "Co-founder, Apple"
                reverse = "true"
              />
            </div>
        </section>
    )
}