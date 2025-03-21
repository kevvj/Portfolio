import { freelance } from "../../cv.json";
import Section from "./Section";
const FLProyects = () => {
    return (
        <Section title="Trabajos Freelance">

            <div className="projects-conteiner">
                <ul className="project-list">
                    {freelance.map(({ url, description, highlights, name, isActive }) => {

                        return (
                            <li>
                                <article>
                                    <header>
                                        <h3>
                                            <a href={url} title={`Ver el proyecto ${name}`}>{name}</a>
                                            {isActive && <span>•</span>}
                                        </h3>
                                        <p>{description}</p>
                                    </header>
                                    <footer>
                                        <ul>
                                            {highlights.map((highlights) => {
                                                return <span>{highlights}</span>
                                            })}
                                        </ul>
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
export default FLProyects