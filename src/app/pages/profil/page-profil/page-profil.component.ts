import { Component } from '@angular/core';
import {faLock, faEdit} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.scss']
})
export class PageProfilComponent {

  faLock=faLock;
  faEdit=faEdit;

  constructor(
    private router:Router
  ) {
  }
  modifierProfil():void {
      this.router.navigate(['subscribe'])
  }
}
