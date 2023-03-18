import {Component, OnInit} from '@angular/core';
import {faInfoCircle, faSave, faBan} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nouvelle-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent implements OnInit{
  constructor(
    private router : Router
  ) {
  }
  faInfo = faInfoCircle;
  faSave = faSave;
  faBan= faBan;

  cancel() : void{
    this.router.navigate(['article']);
  }

  ngOnInit(): void {
  }
}
