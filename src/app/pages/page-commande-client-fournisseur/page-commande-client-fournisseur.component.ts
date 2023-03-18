import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-commande-client-fournisseur',
  templateUrl: './page-commande-client-fournisseur.component.html',
  styleUrls: ['./page-commande-client-fournisseur.component.scss']
})
export class PageCommandeClientFournisseurComponent implements OnInit{

  origine = '';
  constructor(
    private router : Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data=> {
     this.origine = data['origine'];
    });
  }

  nouvelleCommande(): void {
    if (this.origine === 'client') {
      this.router.navigate(['nouvelleCommandeClient'])
    }else if (this.origine === 'fournisseur') {
      this.router.navigate(['nouvelleCommandeFournisseur'])

    }
  }
}
