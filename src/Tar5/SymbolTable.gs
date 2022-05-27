package Tar5

class SymbolTable {
  public var classTableMap: HashMap<String,Symbol>
  public var subroutineTableMap: HashMap<String,Symbol>
  public var indicesMap:HashMap<Symbol.KIND,int> = {
          Symbol.KIND.ARG-> 0,
          (Symbol.KIND.FIELD)-> 0,
          (Symbol.KIND.STATIC)-> 0,
          (Symbol.KIND.VAR)-> 0
  }

  public construct(){
    classTableMap = new HashMap<String,Symbol>()
    subroutineTableMap = new HashMap<String,Symbol>()
  }

  public function startSubroutine(){
    subroutineTableMap.clear()
    indicesMap[Symbol.KIND.VAR] = 0
    indicesMap[Symbol.KIND.ARG] = 0
  }
  public function define(name :String, type: String, kind: Symbol.KIND){
    if (kind == Symbol.KIND.ARG || kind == Symbol.KIND.VAR) {
      var index = indicesMap[kind]
      var symbol = new Symbol(type, kind, index)
      subroutineTableMap[name] = symbol
      indicesMap[kind] +=1
    }
    else{
      var index = indicesMap[kind]
      var symbol = new Symbol(type,kind,index)
      indicesMap[kind] +=1
      classTableMap[name] = symbol
    }
  }
  public function VarCount(kind: Symbol.KIND): int{
    return indicesMap[kind]
  }
  public function KindOf(name: String): Symbol.KIND {
    var symbol = lookUp(name)
    if(symbol != null)
      return symbol.kind
    return Symbol.KIND.NONE
  }
  public function TypeOf(name: String):String{
    var symbol = lookUp(name)

    if (symbol != null)
      return symbol.type

    return ""
  }
  public function IndexOf(name: String):int{
    var symbol = lookUp(name)

    if (symbol != null)
      return symbol.index

    return -1
  }
  public function lookUp(name: String):Symbol{
    if (classTableMap[name] != null){
      return classTableMap[name]
    }
    else if (subroutineTableMap[name] != null){
      return subroutineTableMap[name]
    }
    else {
      return null;
    }
  }
}