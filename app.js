const { generarEjercicios } = require("./multiplicaciones");
const agvd = require("./yargs");
generarEjercicios(agvd.mdor, agvd.mndo, agvd.c, agvd.l)
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));
