import { skills } from "../../cv.json";
import Section from "./Section";




const Skills = () => {
    return (

        <Section title="Habilidades">

            <div className="skills-conteiner">
                <ul>
                    {skills.map(({name}) => {

                        return (
                            <li>
                                <span>{name}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </Section>
    )
}


export default Skills