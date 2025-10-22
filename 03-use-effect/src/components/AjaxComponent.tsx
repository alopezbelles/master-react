import { useEffect, useState } from "react";

interface Usuario {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

function AjaxComponent() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [cargando, setCargando] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    // Cargar usuarios reales de la API al montar el componente
    useEffect(() => {
        getUsuariosAjaxPms();
    }, []);

    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                id: 1,
                email: "usuario1@example.com",
                first_name: "Juan",
                last_name: "Pérez",
                avatar: "https://reqres.in/img/faces/1-image.jpg",
            },
            {
                id: 2,
                email: "usuario2@example.com",
                first_name: "María",
                last_name: "García",
                avatar: "https://reqres.in/img/faces/2-image.jpg",
            },
            {
                id: 3,
                email: "usuario3@example.com",
                first_name: "Carlos",
                last_name: "López",
                avatar: "https://reqres.in/img/faces/3-image.jpg",
            },
        ]);
    };

    const getUsuariosAjaxPms = async () => {
        try {
            const response = await fetch("https://reqres.in/api/users?page=1", {
                headers: { "x-api-key": "reqres-free-v1" },
            });

            if (!response.ok) {
                setError("Error en la petición: " + response.status);
                setCargando(false);
                return;
            }

            const resultado_final = await response.json();

            //   console.log(resultado_final.data);
            setUsuarios(resultado_final.data);
            setTimeout(() => {
                setCargando(false);
            }, 2000); // Simula un retardo de 2 segundos
        } catch (error) {
            console.error("Error capturado:", error);
            setError("Error de conexión: No se pudo conectar con el servidor");
            setCargando(false);
        }
    };


    if (error !== "") {
        return (
            <div>
                {error}
            </div>
        );

    } else if (cargando) {
        return <h2>Cargando...</h2>;
    } else if (cargando == false && error === "") {
        return (
            <div>
                <h2>Listado de Usuarios via Ajax</h2>
                <button onClick={getUsuariosEstaticos}>Cargar usuarios</button>
                <div>
                    {usuarios.map((usuario) => (
                        <div
                            key={usuario.id}
                            style={{
                                border: "1px solid #ccc",
                                margin: "10px",
                                padding: "10px",
                            }}
                        >
                            <img
                                src={usuario.avatar}
                                alt={usuario.first_name}
                                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                            />
                            <h3>
                                {usuario.first_name} {usuario.last_name}
                            </h3>
                            <p>Email: {usuario.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

}

export default AjaxComponent;
