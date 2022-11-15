import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const colorClasses = {
	red: "alert-danger",
	orange: "alert-warning",
};

const Alert = (props) => {
	//your component here

	// En el ReactDOM se pasan los parametros que se aplican en esta parte del codigo
	// los cuales se verifican como props. Por tal motivo se hace la verificación de ese prop
	// donde si valida color red retorna al codigo el alert-danger más el texto que
	// está plasmado en la prop.text
	if (props.color === "red") {
		return (
			<div className="alert alert-danger" role="alert">
				{props.text}
			</div>
		);
	} else {
		return (
			<div className="alert alert-warning" role="alert">
				{props.text}
			</div>
		);
	}
};
Alert.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happended!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="orange" />
	</div>,
	document.querySelector("#myDiv")
);
