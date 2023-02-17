import { Component } from '@angular/core';
import {faMagnifyingGlass, faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  faMagnifyingGlass = faMagnifyingGlass;
  faUser = faUser;
}
