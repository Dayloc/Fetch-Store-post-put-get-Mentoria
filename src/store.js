export const initialStore=()=>{
  return{
    message: null,
    listaDeAgendas:[],


  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case "set_agendas":
      return{
        ...store,
        listaDeAgendas:action.payload
      }

    case "agregar_agenda":
      return {
        ...store,
        listaDeAgendas:action.payload
      }  
    default:
      throw Error('Unknown action.');
  }    
}
