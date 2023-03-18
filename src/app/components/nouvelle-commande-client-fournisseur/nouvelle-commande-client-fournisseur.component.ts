import {Component, OnInit} from '@angular/core';
import { faPlus,faHourglassHalf,faPhone,faInfoCircle, faSave, faBan} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-nouvelle-commande-client-fournisseur',
  templateUrl: './nouvelle-commande-client-fournisseur.component.html',
  styleUrls: ['./nouvelle-commande-client-fournisseur.component.scss']
})
export class NouvelleCommandeClientFournisseurComponent implements OnInit{
  faInfo = faInfoCircle;
  faSave = faSave;
  faBan= faBan;
  faPhone=faPhone;
  faHourglassHalf=faHourglassHalf;
  faPlus=faPlus;
  origine = '';

  ngOnInit(): void {
    this.activetedRouter.data.subscribe(data => {
      this.origine = data['origine'];
    });
  }

  constructor(
    private activetedRouter: ActivatedRoute
  ) {
  }


}
