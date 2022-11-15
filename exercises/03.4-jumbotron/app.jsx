import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
	//here you have to return expected html using the properties being passed to the component
	//siempre debe ir el return para que devuelva el codigo deseado. De lo contrario no devuelve nada
	return (
		<div className="jumbotron m-5">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a className="btn btn-primary btn-lg" href={props.buttonURL} role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};

Jumbotron.propTypes = {
	//proptypes here
	//El proptype nos sirve para indicarle al navegador que tipo de datos queremos pasar
	//como propiedad, generando un uso correcto de la aplicación
	//En este caso todos son strings
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
};

//Aquí se muestra el ReactDOM pasando de una vez los parametros y no haciendolo en otra pagina
//segido del queryselector con el id donde quiene que vaya plasmado
ReactDOM.render(
	<Jumbotron
		title="Welcome to react"
		description="React is the most popular rendering library in the world"
		buttonLabel="Go to the official website"
		buttonURL="https://reactjs.org/"
	/>,

	document.querySelector("#myDiv")
);
