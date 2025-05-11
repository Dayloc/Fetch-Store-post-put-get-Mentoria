import React,{useState} from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Crear_Agenda,Get_All_Agendas } from '../services/fetchs.js';

function InputCrearAgenda() {

     const { store, dispatch } = useGlobalReducer();
     const [newAgendaSlug, setNewAgendaSlug] = useState(""); // Estado para el input del slug
     const [loading, setLoading] = useState(false); // Estado para manejar la carga
      const [error, setError] = useState(null); // Estado para manejar errores




  const handleCreateAgenda = async () => {
    if (!newAgendaSlug) {
      alert("Por favor, ingresa un nombre para la agenda.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await Crear_Agenda(newAgendaSlug); // Crea la agenda
            Get_All_Agendas (dispatch); // Actualiza la lista de agendas
            setNewAgendaSlug(""); // Limpia el input después de crear la agenda
    } catch (error) {
      setError("Error al crear la agenda. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
        <h1>Ingrese el nombre de la nueva agenda</h1>
         <div className="mb-4">
        <input
          type="text"
          value={newAgendaSlug}
          onChange={(e) => setNewAgendaSlug(e.target.value)}
          placeholder="Nombre de la nueva agenda"
          className="form-control w-50 mx-auto"
        />
        <button
          onClick={handleCreateAgenda}
          className="btn btn-primary mt-2"
          disabled={loading}
        >
          {loading ? "Creando..." : "Crear Agenda"}
        </button>
        {error && <p className="text-danger mt-2">{error}</p>}
      </div>
    </div>
  )
}

export default InputCrearAgenda