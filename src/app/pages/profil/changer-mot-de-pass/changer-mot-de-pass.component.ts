import { Component } from '@angular/core';
import {faBan, faSave} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-changer-mot-de-pass',
  templateUrl: './changer-mot-de-pass.component.html',
  styleUrls: ['./changer-mot-de-pass.component.scss']
})
export class ChangerMotDePassComponent {
  constructor(
    private router : Router
  ) {
  }

  faSave = faSave;
  faBan = faBan;

  cancel() : void{
    this.router.navigate(['profil'])
  }
}
