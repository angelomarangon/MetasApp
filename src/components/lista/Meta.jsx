import estilo from './Meta.module.css';

function Meta({icono, detalles, periodo, eventos, objetivo, plazo, completado}) {

    return (
        <div className={estilo.meta + " tarjeta"} >
            <div className="flex items-center">
                <div className={estilo.icono}>{icono}</div>
                <p className='text-xl ml-7'>{eventos} <sub className='text-xs text-gray-500'>/ {periodo}</sub></p>
                <p className='ml-10 text-base'>{detalles}</p>
            </div>

            <div className="flex items-center">
                <div className='flex flex-col'>
                    <p className='mr-7'>{completado} de {objetivo}</p>
                    <div className={estilo.barra1}>
                        <div style={{width: `${Math.round((completado * 100) / objetivo)}%`}} className={estilo.barra2}></div>
                    </div>
                </div>
                <button className='boton boton--gris'>
                    Completado
                </button>
            </div>
        </div>
    );
}

export default Meta;