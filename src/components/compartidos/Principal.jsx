import './Principal.css';
import Vinculo from './Vinculo';
import ListaSVG from '../../icons/ListaSVG';
import NuevaSVG from '../../icons/NuevaSVG';

function Principal({ children }) {
    return (
        <div className="contenedor-principal">
            <aside className="aside">
                <Vinculo 
                href={'/lista'} 
                texto='Lista de Metas'
                Icono={ListaSVG} 
                />
                <Vinculo 
                href={'/nueva'} 
                texto='Nueva Meta'
                Icono={NuevaSVG}
                />
            </aside>
            <main className="main" >
                {children}
            </main>
        </div>
    );
}

export default Principal;