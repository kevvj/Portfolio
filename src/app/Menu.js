'use client';

const scrollToElement = (element, duration) => {
    const start = window.scrollY;
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const distance = targetPosition - start;
    let startTime = null;

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Normaliza el progreso a un rango de 0 a 1

        window.scrollTo(0, start + distance * easeInOutQuad(progress));

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    };

    const easeInOutQuad = (t) => {
        return t < 0.5
            ? 2 * t * t
            : -1 + (4 - 2 * t) * t;
    };

    requestAnimationFrame(animation);
};


const Menu = () => {

    const handleScroll = (event, sectionId) => {
        event.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            scrollToElement(element, 1000); // Duración de la animación en ms
        }
    };

    return (
        <div className="main-menu">
            <ul>
                <li>
                    <a href="#aboutme" onClick={(e) => handleScroll(e, 'aboutme')}>About me</a>
                </li>
                <li>
                    <a href="#proyects" onClick={(e) => handleScroll(e, 'proyects')}>Proyects</a>
                </li>
                <li>
                    <a href="#experience" onClick={(e) => handleScroll(e, 'experience')}>Experience</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu