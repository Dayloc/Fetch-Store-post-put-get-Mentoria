
import InputCrearAgenda from "../components/InputCrearAgenda.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ListaDeAgendas from "./ListaDeAgendas.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
		<InputCrearAgenda/>	
		<ListaDeAgendas/>
		</div>
	);
}; 