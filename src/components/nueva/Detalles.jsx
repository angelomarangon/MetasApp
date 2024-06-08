

function Detealles() {

    const opcionesDeFrecuencias = ['dia', 'semana', 'mes', 'año'];
    const iconosMetas = ['👨🏻‍💻','🏃🏻‍♂️','📚','🤓','✈️','💰'];

    return (
        <div>
            <form action="">
                <label>
                    DESCRIBE TU META
                    <input type="text" placeholder="ej. 52 caminatas" />
                </label>
                <label>
                    CON QUE FRECUENCIA DESEAS CUMPLIR TU META? (ej. una vez a la semana)
                    <div>
                        <input type="number" />
                        <select>
                            {opcionesDeFrecuencias.map((opcion, index) =>
                                opcion === 'semana'
                                ? <option key={index} value={opcion}>a la {opcion}</option>
                                : <option key={index} value={opcion}>al {opcion}</option>
                            )}
                        </select>
                    </div>
                </label>
                <label>
                    CUANTAS VECES DESEAS COMPLETAR ESTA META?
                    <input type="number" />
                </label>
                <label>
                    ¿TIENES UNA FECHA LIMITE?
                    <input type="date" />
                </label>
                <label>
                    ¿CUANTAS VECES HAZ COMPLETADO YA ESTA META?
                    <input type="number" />
                </label>
                <label>
                    ESCOGE EL ICONO PARA LA META
                    <select>
                                {iconosMetas.map((icono, index) => <option key={index} value={icono}>{icono}</option>)}
                    </select>
                </label>
                
            </form>
            <div>
                <button>Crear</button>
                <button>Cancelar</button>
            </div>
        </div>
    );
}

export default Detealles;