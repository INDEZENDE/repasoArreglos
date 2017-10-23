/*var fila =[1,2,3,4];
var perrito={perrito:"perrito"}
fila.push("hola");//inserta al final

fila.shift();
fila.pop();
fila.unshift(perrito.perrito);
document.write("<br>"+fila);
*/
//Objetos
var merakiSquad ={
  nombre1: 'Monse',
  nombre2: 'Kartea',
  nombre3: 'Mary',
  nombre4: 'Laura',
  nombre5: 'Elizabeth',
  nombre6: 'Inde',
  caracteristicasMonse:{altura:1.60, edad:23, colorPlayera: "azul"},
  nombre7: ["pera", "manzana", "sandia"],
  saludo: function () {
    alert ("alert")

  }
}
merakiSquad.saludo();
console.log(merakiSquad);
console.log(Object.keys(merakiSquad).length);
