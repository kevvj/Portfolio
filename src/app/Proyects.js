
const ProyectEstructure = ({ title, img, description }) => {
    return (
        <div className="proyects-estructure-content" >
            <header className="proyect-header">
                <h2>{title}</h2>
            </header>

            <div className="img-container-proyect">
                <img className="proyect-pic" src={img} ></img>
            </div>

            <div className="description-container">
                <p>{description}</p>
            </div>
        </div>
    )
}

const Proyect = () => {


    return (
        <div className = "proyect-content" id="proyects">
            <ProyectEstructure
                title={"JojoApp"}
                img={"/img/JojoApp.jpg"}
                description={"Supuesta descripcion"}
            />

            <ProyectEstructure
                title={"Supuesto titulo"}
                img={"https://content.imageresizer.com/images/memes/El-Gato-meme-6.jpg"}
                description={"Supuesta descripcion"}
            />

        </div>
    );
}

export default Proyect