import { work } from "../../cv.json";
import Section from "./Section";




const Experience = () => {
    return (

        <Section title="Experiencia">

            <div className="exp-conteiner">
                <ul>
                    {work.map(({ name, startDate, endDate, position, summary, highlights }) => {

                        const startYear = new Date(startDate).getFullYear()
                        const endYear = endDate == ! null ? new Date(endDate).getFullYear() : "Actual"
                        const years = `${startYear} - ${endYear}`
                        return (
                            <li>
                                <article>
                                    <header>
                                        <div>
                                            <h3>{name}</h3>
                                            <h4>{position}</h4>
                                        </div>

                                        <time>{years}</time>
                                    </header>

                                    <footer>
                                        <p>{summary}</p>
                                    </footer>
                                </article>



                            </li>
                        )
                    })}
                </ul>
            </div>

        </Section>
    )
}


export default Experience