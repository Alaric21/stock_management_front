import {Component, OnInit} from '@angular/core';
import {faInfoCircle, faSave, faBan} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nouveau-client-fournisseur',
  templateUrl: './nouveau-client-fournisseur.component.html',
  styleUrls: ['./nouveau-client-fournisseur.component.scss']
})
export class NouveauClientFournisseurComponent implements OnInit{
  faInfo = faInfoCircle;
  faSave = faSave;
  faBan= faBan;
  origine = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router : Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data =>{
      this.origine = data['origine']
    });
  }

  sevaClick (): void {
  }
  cancelClick (): void {
    if (this.origine === 'client') {
      this.router.navigate(['clients'])
    } else if (this.origine === 'fournisseur') {
      this.router.navigate(['fournisseurs'])
    }
  }
}
