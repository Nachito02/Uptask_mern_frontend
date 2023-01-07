import {useState} from 'react'
import useProyectos from '../hooks/useProyectos';
import Alerta from './Alerta';
const FormularioColaborador = () => {

    const [email, setEmail] = useState('');

    const {mostrarAlerta, alerta, submitColaborador} = useProyectos();

    const handleSubmit =  async (e) => {
      e.preventDefault();


        if(email === '') {
            mostrarAlerta({
                msg: 'El email es obligatorio',
                error:true
            })
            return;
        }

        submitColaborador(email)
    }

    const {msg} = alerta;

  return (
    <form onSubmit={handleSubmit} className='bg-white p-10 px-5 w-full md:w-1/2 rounded-lg shadow' action="">

        {msg && <Alerta alerta={alerta} />}

          <div className="mb-5">
                      <label
                        htmlFor="email"
                        className="text-gry-700 uppercase font-bold text-sm"
                      >
                       Email Colaborador
                      </label>
                      <input
                        type="email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="nombre"
                        placeholder="Email del usuario"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <input
                      value="Buscar colaborador"
                      type="submit"
                      className="bg-sky-600 hover:bg-sky-700 w-full p-3 text-white uppercse cursor-pointer transition-colors rounded text-sm"
                    />
    </form>
  )
}

export default FormularioColaborador