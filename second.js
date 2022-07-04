const { builtinModules } = require("module")
// this is called common js modules
// (function (exports,require,module,__filename,__dirname){
keerti={
name:"KEERTI GUPTA",
favNum:7,
developer:true
}
console.log(exports,require,module,__filename,__dirname);
module.exports=keerti;
// })