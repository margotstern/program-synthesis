// // (define-fun max2 ((x Int) (y Int)) Int (ite (<= x y) y x))


//  To ensure presevation of presendence, sometimes we need to add parens
//  TODO would be nice to actually track presendence of operations
//  is there some kind of library for this?
function astToJsStructureP(ast){

  if (ast> 1) {
    return "(" + astToJsStructure(ast) + ")"
  }
  else {
    return astToJsStructure(ast);
  }
}

//  is the best way to do this just hard coding rules for each operation?
//  given that js is such a mess, might be...
function astToJsStructure(ast){
  // terminal symbol
  if( typeof ast == "string" || typeof ast == "number") {
    return ast;
  }
  else if (ast.length == 1) {
    return ast[0];
  }

  else if(ast[0] == "ite"){
    const condition = "if(" + astToJsStructure(ast[2]) + " " + astToJsStructure(ast[1]) + " " + astToJsStructure(ast[3]) + "){\n";
    const condition_true = "\treturn " + astToJsStructure(ast[4]) + "\n}\n";
    const condition_false = "\treturn " + astToJsStructure(ast[5]) + "\n}\n";
    return condition + condition_true + condition_false;
  }

  else if(ast[0] == "Int"){
    return "return " + astToJsStructure(ast[1]); 
  }

  else if(ast[0] == "Bool" && ast.length == 2){
    return "return " + astToJsStructure(ast[1]);
  }

  else if(ast[0] == "Bool" && ast.length > 2){
    return "return " + parseBoolean(ast[1])
  }

  else if (ast[0] == "str.at") {
    return astToJsStructureP(ast[1]) + "[" + astToJsStructure(ast[2]) + "]";
  }
  else if (ast[0] == "str.++" || ast[0] == "+") {
    return astToJsStructureP(ast[1]) + " + " + astToJsStructureP(ast[2]);
  }
  else if (ast[0] == "str.substr") {
    return astToJsStructureP(ast[1]) +
           ".substring(" + astToJsStructure(ast[2]) + " , " + astToJsStructure(ast[3]) + "+1)";
  }
  else if (ast[0] == "str.len") {
    return astToJsStructureP(ast[1]) +
           ".length";
  }
  else if (ast[0] == "mod") {
    return astToJsStructureP(ast[1]) +
           " % " +
           astToJsStructureP(ast[2]);
  }
  else if (ast[0] == "-") {
    return astToJsStructure(ast[1]) + " - " + astToJsStructureP(ast[2]);
  }
  else if (ast[0] == "*") {
      return astToJsStructureP(ast[1]) + " * " + astToJsStructureP(ast[2]);
  }
  else if (ast[0] == "str.replace") {
    return astToJsStructureP(ast[1]) +
           ".replace(" +
           astToJsStructure(ast[2]) +
           ", " +
           astToJsStructure(ast[3]) +
           ")";
  }
  else if (ast[0] == "str.prefixof") {
    return astToJsStructureP(ast[2]) +
           ".includes(" +  astToJsStructure(ast[1]) + ")" + " && " + astToJsStructureP(ast[1]) +
                  ".includes(" + astToJsStructure(ast[2]) + "[0])";
  }
  else if (ast[0] == "str.suffixof") {
    return astToJsStructureP(ast[2]) +
           ".includes(" +  astToJsStructure(ast[1]) + ")" + " && " + astToJsStructureP(ast[1]) +
                  ".includes(" + astToJsStructure(ast[2]) + "["+ astToJsStructureP(ast[2]) + ".length-1])";
  }
  else if (ast[0] == "str.indexof") {
    return astToJsStructureP(ast[1]) +
           ".indexOf(" +  astToJsStructure(ast[2]) + "," + astToJsStructure(ast[3]) + ")";
  }
  else {
    console.error("Unhandled AST form: "+ast+" : "+(typeof ast));
  }
};

function parseBoolean(ast){
  return ast;
}

astToJs = function(ast) {
  return "  return " + astToJsStructure(ast) + ";";
};



const ast = "define-fun max2 ((x Int) (y Int)) Int (ite (<= x y) y x)"
const ast_processed = "ite <= x y y x"
const ast_processed2 = "Int y"
const ast_processed3 = "Bool false"
// (and (< a b) (= a 10)))
    // (ite (and (>= a b) (>= a c)) a
    //   (ite (and (>= b a) (>= b c)) b
    //     (ite (and (>= c a) (>= c b)) c 0))))
//(+ (* x x) (* y y)))
const ast_processed4 = ""
var ast_split = ast_processed.split(" ")
var ast_split2 = ast_processed2.split(" ")
var ast_split3 = ast_processed3.split(" ")
console.log(astToJsStructureP(ast_split3))
// console.log(astToJsStructureP(ast_split))
