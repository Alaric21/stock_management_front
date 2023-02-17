import {IconDefinition} from "@fortawesome/free-brands-svg-icons";

export interface MenuList{
  id?:String;
  title?: String;
  icon?: any;
  url?:String

  sousMenu?:Array<MenuList>;
}
