/*
 * The purpose of this file is to interface with the
 * c/c++ libraries that were compiled and loaded using WebASM.
 * See webasm directory.
*/
export default class DasherWebASM {
    constructor() {
    }
    testAPI(){
      this.testWebASM();
    }
    testWebASM(){
      var result = Module.ccall(
          'myFunction',	// name of C function
          null,	// return type
          null,	// argument types
          null	// arguments
      );
    }
}