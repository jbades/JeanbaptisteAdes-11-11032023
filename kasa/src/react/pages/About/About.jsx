import aboutContent from "../../../datas/about.json"
import AccordionTextBlock from "../../components/AccordionTextBlock/AccordionTextBlock"
import HeadSection from "../../components/HeadSection/HeadSection"
import HeadPicture from "../../../assets/kasa_about_headsection.jpg"


function About() {
    return (
        <div className="body__wrapper wrapper__boxed">
            <HeadSection picturePath={HeadPicture}/>
            <div className="values__wrapper wrapper__boxed">
                <AccordionTextBlock blockTitle="Fiabilité" blockContent={aboutContent[0].accountability ? aboutContent[0].accountability:""} />
                <AccordionTextBlock blockTitle="Respect" blockContent={aboutContent[0].respect ? aboutContent[0].respect:""} />
                <AccordionTextBlock blockTitle="Service" blockContent={aboutContent[0].service ? aboutContent[0].service:""} />
                <AccordionTextBlock blockTitle="Sécurité" blockContent={aboutContent[0].security ? aboutContent[0].security:""} />
            </div>
        </div>
    )
}

export default About