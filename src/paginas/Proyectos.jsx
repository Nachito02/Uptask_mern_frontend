import {useEffect} from 'react'
import useProyectos from '../hooks/useProyectos'
import PreviewProyecto from '../components/PreviewProyecto';
import Alerta from '../components/Alerta';

const Proyectos = () => {


  const {proyectos, alerta} = useProyectos();

  const {msg} = alerta;


  return (
    <>
      <h1 className='text-4xl font-black'>Proyectos</h1>

     { msg && <Alerta alerta={alerta} />} 

      <div className='bg-white shadow rounded-lg mt-10'>
        {proyectos.length ? proyectos.map(proyecto => { 
            return <PreviewProyecto 
              key={proyecto._id}
              proyecto = {proyecto}
            />       }) : <p className='mt-5 text-center text-gray-600 uppercase p-5'>No hay Proyectos Aun</p>}
      </div>
    </>
  )
}

export default Proyectos