const paisesData = {
2000: [
{ nombre: "usa", style: "fill:hsl(128, 100%, 80%)"},
{ nombre: "brasil", style: "fill:hsl(128, 100%, 65%)" },
{ nombre: "argentina", style: "fill:hsl(128, 100%, 80%)" },
{ nombre: "espana", style: "fill:hsl(128, 100%, 65%)" },
{ nombre: "irlanda", style: "fill:hsl(128, 100%, 45%)" },
{ nombre: "inglaterra", style: "fill:hsl(128, 100%, 45%)" },
{ nombre: "suiza", style: "fill:hsl(128, 100%, 65%)"},
{ nombre: "alemania", style: "fill:hsl(128, 100%, 80%)" },
{ nombre: "checa", style: "fill:hsl(128, 100%, 45%)"},
{ nombre: "japon", style: "fill:hsl(128, 100%, 65%)"},
{ nombre: "india", style: "fill:hsl(128, 100%, 37%)"},
],
2005: [
{ nombre: "usa", style: "fill:hsl(128, 100%, 65%)"},
{ nombre: "brasil", style: "fill:hsl(128, 100%, 65%)" },
{ nombre: "argentina", style: "fill:hsl(128, 100%, 65%)" },
{ nombre: "espana", style: "fill:hsl(128, 100%, 65%)" },
{ nombre: "irlanda", style: "fill:hsl(128, 100%, 45%)" },
{ nombre: "inglaterra", style: "fill:hsl(128, 100%, 45%)" },
{ nombre: "suiza", style: "fill:hsl(128, 100%, 65%)"},
{ nombre: "alemania", style: "fill:hsl(128, 100%, 65%)" },
{ nombre: "checa", style: "fill:hsl(128, 100%, 37%)"},
{ nombre: "japon", style: "fill:hsl(128, 100%, 65%)"},
{ nombre: "india", style: "fill:hsl(128, 100%, 23%)"},
],
2010: [
{ nombre: "usa", style: "fill:hsl(128, 100%, 45%)"},
{ nombre: "brasil", style: "fill:hsl(128, 100%, 45%)" },
{ nombre: "argentina", style: "fill:hsl(128, 100%, 45%)" },
{ nombre: "espana", style: "fill:hsl(128, 100%, 45%)" },
{ nombre: "irlanda", style: "fill:hsl(128, 100%, 37%)" },
{ nombre: "inglaterra", style: "fill:hsl(128, 100%, 37%)" },
{ nombre: "suiza", style: "fill:hsl(128, 100%, 45%)"},
{ nombre: "alemania", style: "fill:hsl(128, 100%, 45%)" },
{ nombre: "checa", style: "fill:hsl(128, 100%, 37%)"},
{ nombre: "japon", style: "fill:hsl(128, 100%, 65%)"},
{ nombre: "india", style: "fill:hsl(128, 100%, 11%)"},
],
2021: [
{ nombre: "usa", style: "fill:hsl(128, 100%, 23%)"},
{ nombre: "brasil", style: "fill:hsl(128, 100%, 23%)" },
{ nombre: "argentina", style: "fill:hsl(128, 100%, 11%)" },
{ nombre: "espana", style: "fill:hsl(128, 100%, 37%)" },
{ nombre: "irlanda", style: "fill:hsl(128, 100%, 11%)" },
{ nombre: "inglaterra", style: "fill:hsl(128, 100%, 23%)" },
{ nombre: "suiza", style: "fill:hsl(128, 100%, 37%)"},
{ nombre: "alemania", style: "fill:hsl(128, 100%, 45%)" },
{ nombre: "checa", style: "fill:hsl(128, 100%, 23%)"},
{ nombre: "japon", style: "fill:hsl(128, 100%, 45%)"},
{ nombre: "india", style: "fill:hsl(128, 100%, 11%)"},
],
};

function changeMap(fecha) {

// En el parámetro fecha recibiremos el año que se haya seleccionado en el slider

// Con esa fecha nos traemos los datos que necesitamos

const dataFecha = paisesData[fecha];




// Ahora la variable dataFecha tendrá el listado de países con su color para el año que necesitamos

// Vamos loopeando por cada país y le cambiamos el color a los <path> que correspondan

for (let j = 0; j < dataFecha.length; i++) {

// seleccionamos todos los vectores (<path>) que correspondan al país

// Para que esto funcione es necesario que la key "nombre" en el array de datos se corresponda con la clase que tienen los vectores en el mapa

const vectoresPais = document.getElementsByClassName(dataFecha[j].usa);


for (let i = 0; i < vectoresPais.length;
i++) {

vectoresPais[i].setAttribute("style", dataFecha[j].'fill:hsl(128, 100%, 65%)');

}

}

}
