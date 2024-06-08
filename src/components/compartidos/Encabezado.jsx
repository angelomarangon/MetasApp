import estilo from './Encabezado.module.css';
import LogoSVG from '../../icons/LogoSVG';
import PerfilSVG from '../../icons/PerfilSVG';


function Encabezado() {
    return (
        <header className={estilo.encabezado}>
            <div className={estilo.logo_contenedor}>

                <LogoSVG className={estilo.logo_img} />

                <a className={estilo.logo_titulo} href="/">METAS APP</a>

            </div>
            <nav>
                <a href="/perfil" className={estilo.usuario_vinculo}>
                    <PerfilSVG className={estilo.usuario_icono} />
                </a>
            </nav>
        </header>
    );
}

export default Encabezado;