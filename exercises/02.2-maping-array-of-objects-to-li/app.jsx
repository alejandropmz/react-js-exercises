import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];
// aqui tenemos un array el cual debemos anexar a una ul de bootstrap

/**
 * 1) Create the mapping function and use it to generate a new array of
 * planets in html called planetsInHTML
 */

//el array planets los mapeamos y guardamos sus valores editados con return
// <li> y las clases de bootstrap en la variable newPlanets, además de añadirle
//su repectiva key independiente a cada mapeo.
const newPlanets = planets.map((planet, i) => {
	return (
		<li class="list-group-item" key={i}>
			{planet}
		</li>
	);
});

// 2) add the array planetsInHTML inside the innerHTML of this ul
const content = <ul className="list-group m-5">{newPlanets}</ul>;
//aqui se añade a la ul cada una de las li de newplanet

ReactDOM.render(content, document.querySelector("#myDiv"));
