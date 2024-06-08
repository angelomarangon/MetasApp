import Meta from "./Meta";

const listaMock = [
{
    "id": "1",
    "detalles": "Correr por 30 minutos",
    "periodo": "Dia",
    "eventos": 1,
    "icono": "🏃🏻‍♂️",
    "objetivo": 365,
    "plazo": "2030-01-01",
    "completado": 210
},
{
    "id": "2",
    "detalles": "Leer un libro",
    "periodo": "Mes",
    "eventos": 1,
    "icono": "📚",
    "objetivo": 20,
    "plazo": "2030-01-01",
    "completado": 15
},
{
    "id": "3",
    "detalles": "Desarrolar programas",
    "periodo": "Año",
    "eventos": 5,
    "icono": "👨🏻‍💻",
    "objetivo": 10,
    "plazo": "2030-01-01",
    "completado": 2
},
]

function Lista() {
    return ( 
        listaMock.map(meta => <Meta {...meta} />)
     );
}

export default Lista;

