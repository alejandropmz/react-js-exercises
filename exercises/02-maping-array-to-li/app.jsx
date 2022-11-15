import React from "react";
import ReactDOM from "react-dom";

const animals = ["Horse", "Turtle", "Elephant", "Monkey"];

/**
 * change the content inside the map function
 **/
const animalsInHTML = animals.map((singleAnimal, i) => {
	return <li key={i}>{singleAnimal}</li>; //aqui la al mapear el array simplemente
	//va pasando uno por uno y retornando una <li> con el valor de animal que va
	//siendo iterado. Adicional se le agrega una key independiente a cada uno para
	// que el navegador no genere ningun error ya que exige un key independiente
});

ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));
// al retornar todas las <li> de los animales aquí los mete dentro de la ul
// lo que hace que se genere una lista. Lo cual es muy util cuando se trata de listas
// de cientos o miles de datos
