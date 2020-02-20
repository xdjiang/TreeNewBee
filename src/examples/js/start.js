const program = require("commander");
const process = require("process");
const ordersMapping = require("./ordersMapping");
const moveBrick = require("./testMoveBrick");
const newOrdersMapping = require("./newOrderMapping");
program.version("0.0.1");
program.usage("--help", "Show TreeNewBee help");
let _description = "TreeNewBee command line tools";
program.description(_description);
program.option("-O,--ordersMapping", "mapping orders from exchange to weidex");
program.option("-N,--newOrdersMapping", "mapping orders from exchange to weidex");
program.option("-M,--moveBrick", "select orders from exchange which has a best price,and place an order");
program.parse(process.argv);
if (!program.ordersMapping) {
  console.log("Must input ordersMapping");
  process.exit();
}
if (!program.newOrdersMapping) {
  console.log("Must input newOrdersMapping");
  process.exit();
}
if (!program.moveBrick) {
  console.log("Must input moveBrick");
  process.exit();
}
var start = function() {
  if (program.ordersMapping) {
    ordersMapping.init();
  }
  if (program.newOrdersMapping) {
    newOrdersMapping.init();
  }
  if (program.moveBrick) {
    moveBrick.init();
  }
};
start();
