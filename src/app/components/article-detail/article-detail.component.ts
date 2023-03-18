import { Component } from '@angular/core';
import {faInfo, faDollar, faFlagCheckered, faPencil, faTrashCan,faRectangleList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent {
 faInfo = faInfo;
  faDollar = faDollar;
  faFlagCheckered = faFlagCheckered;
  faPencil = faPencil;
  faTrashCan = faTrashCan;
  faRectangleList = faRectangleList;


}
