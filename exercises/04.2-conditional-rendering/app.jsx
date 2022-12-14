import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// add the green inside this function
//dentro de neustro componente Alert se encuentran un objeto el cual nos da la descripcion
// de los respectivos colores que que van a ser pasados como props para posteriormente
//ser impresos en el reactDOM 
const Alert = (props) => {
	const colorClasses = {
		red: "alert-danger",
		orange: "alert-warning",
		green: "alert-success",
	};
	//esta condicion nos valida que si el color que se quiere imprimir no se encuentra
	// en nustra lista objeto nos diga que ese color no está en disponible mediante un alert
	// de lo contrario entonces que proceda a imprimir los que si están
	if (colorClasses[props.color] === undefined) alert(`The color ${props.color} is not in the possible list of colors`);

	return (
		<div className={`alert ${colorClasses[props.color]}`} role="alert">
			{props.text}
		</div>
	);
};
Alert.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties is the component using
ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happended!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="orange" />
		<Alert text="I am supposed to be green" color="green" />
	</div>,
	document.querySelector("#myDiv")
);
