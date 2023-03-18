import { Component } from '@angular/core';
import {faBan, faInfoCircle, faSave} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nouvelle-categorie',
  templateUrl: './nouvelle-categorie.component.html',
  styleUrls: ['./nouvelle-categorie.component.scss']
})
export class NouvelleCategorieComponent {
  constructor(
    private router : Router
  ) {
  }
  faInfo = faInfoCircle;
  faSave = faSave;
  faBan= faBan;

  cancel() : void {
    this.router.navigate(['categories'])
  }
}
