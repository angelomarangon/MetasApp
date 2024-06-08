import estilo from './Vinculo.module.css';

function Vinculo({Icono, texto, href}) {
    return (
        <a href={href} className={estilo.vinculo}>
            <Icono className={estilo.icono} />
            <span className={estilo.texto}>{texto}</span>
        </a>
    );
}

export default Vinculo;