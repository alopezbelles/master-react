
interface Props {
  nombre: string;
}


function EventosComponente({ nombre }: Props) {
    const hasDadoClick = (e: React.MouseEvent<HTMLButtonElement>, nombre: string) => {
        alert("Has dado click al botón!! " + nombre);
    }
    return(
        <div>
            <h1>Eventos en React</h1>
            <button onClick={e => hasDadoClick(e, nombre)}>Púlsame</button>
        </div>
    )
}

export default EventosComponente;


