const fs = require("fs");
const numero = Math.floor(Math.random() * 1000);
let salida = "";

// generar las cifras de las multiplicaciones
const cifras = (multiplicando = 4, multiplicador = 2) => {
  // funcionamiento
  const limites = {
    limiteInfUp: 1,
    limiteSupUp: 1,

    limiteInfDown: 1,
    limiteSupDown: 1,
  };
  let j = 0;
  // limite multiplicando
  while (j < multiplicando) {
    limites.limiteSupUp *= 10;
    j++;
  }
  limites.limiteInfUp = limites.limiteSupUp / 10;
  j = 0;

  // limite multiplicador
  while (j < multiplicador) {
    limites.limiteSupDown *= 10;
    j++;
  }
  limites.limiteInfDown = limites.limiteSupDown / 10;
  return limites;
};

// generar los ejercicios
const generarEjercicios = async (
  multiplicando = 4,
  multiplicador = 2,
  cantidad = 5,
  listar
) => {
  console.clear();
  try {
    // validaciones
    if (isNaN(multiplicador) || isNaN(multiplicando))
      throw "los valores que digitaste no son numeros";
    if (multiplicador <= 0 || multiplicando <= 0)
      throw "los valores deben ser mayores a cero (0)";
    if (typeof multiplicador !== "number" || typeof multiplicando !== "number")
      throw "los valores que digitaste no son numeros";
    // desestructurar objeto
    const { limiteInfUp, limiteSupUp, limiteInfDown, limiteSupDown } = cifras(
      multiplicando,
      multiplicador
    );
    // generar ejercicios
    for (let i = 0; i < cantidad; i++) {
      salida += `${i + 1}° ${Math.floor(
        Math.random() * (limiteSupUp - limiteInfUp) + limiteInfUp
      )} X  ${Math.floor(
        Math.random() * (limiteSupDown - limiteInfDown) + limiteInfDown
      )}=\n\n`;
    }
    // valida si existe la carpeta para almacenar ejercicios
    if (!fs.existsSync("./Ejercicios")) fs.mkdirSync('./Ejercicios/',{recursive:true});
    
    fs.writeFileSync(`Ejercicios/ejericios-${numero}.txt`, salida);
    if (listar) {
      console.log("********** Operaciones ***********");
      console.log(salida);
    }
    return `ejericios-${numero}.txt creado con exito`;
  } catch (e) {
    throw e;
  }
};
module.exports = {
  generarEjercicios,
};
