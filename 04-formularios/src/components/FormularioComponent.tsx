import { useState } from "react";


interface Usuario {
    nombre: string;
    apellido: string;
    genero: string;
    bio: string;
}

function FormularioComponent() {

    const [usuario, setUsuario] = useState<Usuario | null>(null);

    const conseguirDatosForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        
        const usuario: Usuario = {
            nombre: formData.get('nombre') as string || '',
            apellido: formData.get('apellido') as string || '',
            genero: formData.get('genero') as string || '',
            bio: formData.get('bio') as string || '',
        }

        console.log(usuario);
        setUsuario(usuario.nombre);
    }

    return (
        <div>
            <h2>Formularios</h2>
            <h3>El usuario es: {usuario}</h3>
            <form className="user_form" onSubmit={conseguirDatosForm}>
                <input type="text" 
                       placeholder="Nombre"
                       name="nombre"
                />
                <input 
                       type="text" 
                       placeholder="Apellido"
                       name="apellido" 
                />
                <select name="genero">
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <textarea name="bio" placeholder="biografía"></textarea>
                <input className="form_button" type="submit" value="Enviar"/>

            </form>
        </div>
    );
}

export default FormularioComponent;