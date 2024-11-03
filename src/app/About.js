import { basics } from "../../cv.json";
import Section from "./Section";

const {summary} = basics



const About = () => {
    return (

        <Section title="Sobre mi">
            <p>{summary}</p>
        </Section>
    )
}


export default About