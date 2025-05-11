const url_base="https://playground.4geeks.com/contact/"

export const Get_All_Agendas = async (dispatch)=>{
    try {
        const response=await fetch(`${url_base}agendas`)
        if (!response.ok){
            throw new Error("Error al optener las agendas");           
        }
         const data = await response.json()  
        
         dispatch({
            type:"set_agendas",
            payload:data,
        }) 
    } catch (error) {
        console.log("Error al cargar las agendas:", error.message);
    }
}

export const Crear_Agenda = async(newAgendaSlug)=>{
    try {
        const response = await fetch(`${url_base}agendas/${newAgendaSlug}`,{
            method:"POST",
            headers:{ "Content-Type": "application/json",},});
    
            console.log("Respuesta de la API:", response); // Depuración


      if (!response.ok) {
      const errorData = await response.json(); // Intenta obtener más detalles del error
    
      throw new Error(errorData.message || "Error al crear la agenda");
    }
    const alerta = alert("Agenda creada con éxito")
   
    return alerta; 
    

  } catch (error) {
    console.error("Error al crear la agenda, o ya existe :", error); // Depuración
    throw error; // Relanza el error para manejarlo en el componente
  }

}