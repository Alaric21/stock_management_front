
export interface MenuList{
  id?:String;
  title?: String;
  icon?: any;
  url?:String

  active?:boolean

  sousMenu?:Array<MenuList>;
}
