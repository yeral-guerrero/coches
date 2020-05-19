// Programa Javascript que pide el nombre del usuario y tres marcas de coche 
//y los muestra luego los muestra por pantalla.

//Declaracion de Variables del programa

var conductor;  //Variable que Representa el nombre del usuario.
var marcas=[]; // Arreglo que servira para guardar las tres marcas de coche.

conductor=prompt("Ecribe el nombre: ");  //comando por prompt que pide el nombre del conductor.


// Bucle para leer las 3  marcas de coche y llenar el array.

for(i=0;i<=2;i++)
{
    marcas[i]=prompt(`Introduzca marca de coche ${i+1}:`);
   
} 

// Bucle For para imprimir por consola el contenido del array.

console.log(`Marcas de autos que ha tenido el Usuaio ${conductor}: `);
for(i=0;i<=2;i++)
{
    
    console.log(` ${i+1}.- ${marcas[i]}`);
   
}

document.writeln(`Marca de los coches que ha tenido el usuario ${conductor}:  `);

//Bucle For para impirmir el contenido por navegador.

for(i=0;i<=2;i++)
{
    
    document.writeln(`  ${i+1}.-  ${marcas[i]}  `);
    document.writeln(`\n`);
}
