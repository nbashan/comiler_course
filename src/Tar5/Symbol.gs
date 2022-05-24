package Tar5

class Symbol {
  static enum KIND {STATIC, FIELD, ARG, VAR, NONE};
  public static var _type:String as type
  public static var _kind:KIND as kind
  public static var _index:int as index

  public construct(cur_type : String, cur_kind: KIND, cur_index: int){
    this.type = cur_type
    this.kind = cur_kind
    this.index = cur_index
  }
}