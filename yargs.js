const agvd = require("yargs")
  .options({
    mdor: {
      alias: "multiplicando",
      type: "number",
      demandOption: true,
      default: 4,
      describe: "el multiplicando de la operacion",
    },
    mndo: {
      alias: "multiplicador",
      type: "number",
      demandOption: true,
      default: 2,
      describe: "el multiplicador de la operacion",
    },
    c: {
      alias: "cantidad",
      type: "number",
      demandOption: true,
      default: 5,
      describe: "cantidad de ejercicios",
    },
    l: {
      alias: "listar",
      type: "boolean",
      demandOption: false,
      default: false,
      describe: "muestra la tabla en consola",
    },
  })
  .check((argv, options) => {
    if (
      isNaN(argv.mdor) ||
      isNaN(argv.mndo) ||
      argv.mdor <= 0 ||
      argv.mndo <= 0
    ) {
      throw "el multiplicando o el multiplicador son erroneos";
    }
    return true;
  }).argv;

module.exports = agvd;
