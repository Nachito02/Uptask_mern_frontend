import React from "react";
import { formatearFecha } from "../helpers/formatearFecha";
import useProyectos from "../hooks/useProyectos";
import useAdmin from "../hooks/useAdmin";
const Tarea = ({ tarea }) => {
  const { descripcion, nombre, prioridad, fechaEntrega, estado, _id } = tarea;

  const { handleModalEditarTarea, handleModalEliminarTarea, completarTarea } = useProyectos();

  const admin = useAdmin();



  return (
    <div className="border-b p-5 flex justify-between items-center">
      <div className="flex flex-col items-start">
        <p className="text-xl mb-1">{nombre}</p>
        <p className="text-sm mb-1 text-gray-500 uppercase">{descripcion}</p>
        <p className="text-xl mb-1">{formatearFecha(fechaEntrega)}</p>
        <p className="text-xl mb-1 text-gray-600">Prioridad : {prioridad}</p>
          {estado && <p className="text-xs bg-green-600 uppercase p-1 rounded-lg text-white">Completada por: {tarea.completado.nombre}</p>}
      </div>

      <div className="flex flex-col lg:flex-row gap-2">

        {admin && (
          <button onClick={() => handleModalEditarTarea(tarea)} className="bg-indigo-600 px-4 text-white text-sm py-3 uppercase font-bold rounded-lg">
            Editar
          </button>
        )}


        <button onClick={() => completarTarea(_id)} className={`${estado ? 'bg-sky-600' : 'bg-gray-600'} px-4 text-white text-sm py-3 uppercase font-bold rounded-lg`}>
          {estado ? 'Completa' : 'Incompleta'}
        </button>

        {admin && (
          <button onClick={() => handleModalEliminarTarea(tarea)} className="bg-red-600 px-4 text-white text-sm py-3 uppercase font-bold rounded-lg">
            Eliminar
          </button>
        )}

      </div>
    </div>
  );
};

export default Tarea;
