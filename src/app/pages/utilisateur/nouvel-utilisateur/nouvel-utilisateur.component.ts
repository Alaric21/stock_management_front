import { Component } from '@angular/core';
import {faInfoCircle,faSave,faBan} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nouvel-utilisateur',
  templateUrl: './nouvel-utilisateur.component.html',
  styleUrls: ['./nouvel-utilisateur.component.scss']
})
export class NouvelUtilisateurComponent {
  constructor(
    private router:Router
  ) {
  }
  faInfo = faInfoCircle;
  faSave = faSave;
  faBan= faBan;

  cancel() : void{
      this.router.navigate(['utilisateurs'])
  }
}
