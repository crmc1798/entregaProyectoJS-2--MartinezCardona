//se crea un objeto
class Auto {
    constructor(marca, modelo, ano, kilometraje, precio) {
        this.marca = marca;                 //Nissan               
        this.modelo = modelo;               //GTR             
        this.ano = ano;                     //2002
        this.kilometraje = kilometraje;     //100000
        this.precio = precio;               //1000000
    }
}

//array para almacenar objetos
let arregloAutos = [];

//se asigna a evento de boton funcion de agregar auto
document.getElementById("formulario-alta").addEventListener("submit", agregarAuto);

//en esta funcion se igualan elementos de las casillas a variables para despues
//asignarlas a un objeto y llamar a otra funcion para desplegar ojetos en un html
function agregarAuto(e) {
    e.preventDefault();
    let marcaA = document.getElementById("Marca").value;
    let modeloA = document.getElementById("Modelo").value;
    let anoA = document.getElementById("Ano").value;
    let kilometrajeA = document.getElementById("Kilometraje").value;
    let precioA = document.getElementById("Precio").value;
    let arregloAutos = new Auto(marcaA, modeloA, anoA, kilometrajeA, precioA);

    let arregloAutosJSON = JSON.parse(localStorage.getItem("arregloAutos"));

    if (arregloAutosJSON == null) {
        localStorage.setItem("arregloAutos", JSON.stringify([arregloAutos]));
        mostrarAutos([arregloAutos]);
    } else {
        arregloAutosJSON.push(arregloAutos);
        localStorage.setItem("arregloAutos", JSON.stringify(arregloAutosJSON));
        mostrarAutos(arregloAutosJSON);
        var dict = {"one" : [15, 4.5],
    "two" : [34, 3.3],
    "three" : [67, 5.0],
    "four" : [32, 4.1]};
    var dictstring = JSON.stringify(dict);
        let fs = require('fs');
        fs.writeFile("../json/lista2.json", dictstring);
    }
    e.target.reset();
}

//funcion para mostrar objetos en el html
function mostrarAutos(arregloAutosJSON) {
    let listadoDeAutos = document.getElementById("listadoDeAutos");
    listadoDeAutos.innerHTML = "";
    
    arregloAutosJSON.forEach(auto => {
        let li = document.createElement("li");
        li.innerHTML = `
       <hr> Marca: ${auto.marca} - Modelo: ${auto.modelo} - Año: ${auto.ano} - Kilometraje: ${auto.kilometraje} - Precio: ${auto.precio}       `;
        const botonBorrar = document.createElement("button");
        botonBorrar.innerText = "Borrar";
        botonBorrar.addEventListener("click", () => {
            eliminarAuto(auto);
        })
        li.appendChild(botonBorrar);
        listadoDeAutos.appendChild(li);
    });
}

//funcion para eliminar objeto especifico del array
function eliminarAuto(auto) {
    console.log(auto);
    const arregloAutosJSON = JSON.parse(localStorage.getItem("arregloAutos"));
    const nuevoArray = arregloAutosJSON.filter(item => item.marca != auto.marca);
    localStorage.setItem("arregloAutos", JSON.stringify(nuevoArray));
    mostrarAutos(nuevoArray);
  }