import styles from "../styles/curso.module.css";

const Curso = ({ curso }) => {
    console.log(curso);

    const { titulo, contenido, img } = curso.attributes;

    return (
        <section className={`${styles.curso} curso`}>
        <style jsx>{`
            .curso {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 0.7)
                ),
                url(${img?.data?.attributes?.url});
            }
        `}</style>
        <div className={`contenedor ${styles.grid}`}>
            <div className={styles.contenido}>
            <h2 className="text-white text-4xl mb-3">{titulo}</h2>
            <p className="text-white">{contenido}</p>
            </div>
        </div>
        </section>
    );
};

export default Curso;
