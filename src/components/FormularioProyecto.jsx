import { useState, useEffect } from "react";
import useProyectos from "../hooks/useProyectos";
import Alerta from "./Alerta";
import { useParams } from "react-router-dom";


const FormularioProyecto = () => {
  const [id, setId] = useState(null);

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fechaEntrega, setFechaEntrega] = useState("");
  const [cliente, setCliente] = useState("");

  const params = useParams();

  const { mostrarAlerta, alerta, submitProyecto, proyecto } = useProyectos();

  useEffect(() => {
    if (params.id && proyecto.nombre ) {
      setId(proyecto._id);

      setNombre(proyecto.nombre);
      setDescripcion(proyecto.descripcion);
      setFechaEntrega(proyecto.fechaEntrega?.split('T')[0]);
      setCliente(proyecto.cliente);


    } 
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, descripcion, fechaEntrega, cliente].includes("")) {
      mostrarAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    // pasar los datos hacia el provider
    await submitProyecto({ id, nombre, descripcion, fechaEntrega, cliente });

    setId(null);
    setNombre("");
    setDescripcion("");
    setFechaEntrega("");
    setCliente("");
  };

  const { msg } = alerta;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow"
    >
      {msg && <Alerta alerta={alerta} />}

      <div className="mb-5">
        <label
          htmlFor="nombre"
          className="text-gray uppercase font-bold text-sm"
        >
          Nombre Proyecto
        </label>
        <input
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
          type="text"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md  "
          id="nombre"
          placeholder="Nombre Proyecto"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="descripcion"
          className="text-gray uppercase font-bold text-sm"
        >
          Descripcion
        </label>
        <textarea
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md  "
          id="descripcion"
          placeholder="Descripcion del Proyecto"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="fecha-entrega"
          className="text-gray uppercase font-bold text-sm"
        >
          Fecha de Entrega
        </label>
        <input
          onChange={(e) => setFechaEntrega(e.target.value)}
          value={fechaEntrega}
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md  "
          id="fecha-entrega"
          type="date"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="cliente"
          className="text-gray uppercase font-bold text-sm"
        >
          Cliente
        </label>
        <input
          onChange={(e) => setCliente(e.target.value)}
          value={cliente}
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md  "
          id="cliente"
          type="text"
          placeholder="Nombre del cliente"
        />
      </div>
      <input
        type="submit"
        value= {id ? 'Actualizar Proyecto' : 'Nuevo Proyecto'}
        className="bg-sky-600 w-full p-3 uppercase font-bold text-white rounded cursor-pointer hover:bg-sky-700 transition-colors"
        name=""
        id=""
      />
    </form>
  );
};

export default FormularioProyecto;
