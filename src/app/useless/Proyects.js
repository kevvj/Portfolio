
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
                description={"JojoApp está dedicada a los fanáticos de JoJo's Bizarre Adventure, ofreciendo una completa colección de tarjetas que incluyen todos los Stands de la serie. Cada tarjeta contiene detalles sobre el Stand, su nombre, la primera aparición en la serie, la canción a la que hace referencia, y otras curiosidades relacionadas. Es una herramienta perfecta para explorar el universo de JoJo y disfrutar de las conexiones musicales y culturales detrás de cada Stand."}
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