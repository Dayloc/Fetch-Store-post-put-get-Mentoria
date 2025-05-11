import React,{useEffect} from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Get_All_Agendas } from '../services/fetchs.js';
import { Link } from 'react-router-dom';



function ListaDeAgendas() {
  const {store, dispatch} =useGlobalReducer()
  const{ listaDeAgendas}=store
  const{agendas}=listaDeAgendas

useEffect(() => {
    Get_All_Agendas(dispatch)
}, [dispatch]);



console.log({agendas})
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h2 className="mb-4">Agendas</h2>
        {agendas && agendas.length === 0 ? (
          <p className="text-muted">No hay agendas disponibles.</p>
        ) : (
          <ul className="list-unstyled">
            {  agendas ?.map((agenda) => (
              <li key={agenda.id} className="mb-4 p-3 border rounded shadow-sm">
                <div className="text-start">
                 
                  
                    <h3 className="mb-2 text-primary">{agenda.slug}</h3>
                 
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>

  )
}

export default ListaDeAgendas