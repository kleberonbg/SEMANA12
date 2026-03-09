const readline = require("readline");

// Crear matriz 3x4
let asientos = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pedir fila
rl.question("Ingrese fila (0 a 2): ", function(f){

  // Pedir columna
  rl.question("Ingrese columna (0 a 3): ", function(c){

    f = parseInt(f);
    c = parseInt(c);

    // Reservar asiento
    asientos[f][c] = 1;

    console.log("Estado de la sala:");

    // Mostrar matriz con bucles anidados
    for(let i = 0; i < 3; i++){

      let fila = "";

      for(let j = 0; j < 4; j++){
        fila += asientos[i][j] + " ";
      }

      console.log(fila);
    }

    rl.close();

  });

});