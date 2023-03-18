import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent {


  constructor(
    private router: Router
  ) {
  }

  nouvelArticle(): void {
    this.router.navigate(['nouvelarticle'])
  }
}
