import { Component } from '@angular/core';
import {faInfo, faDollar, faFlagCheckered, faPencil, faTrashCan,faRectangleList} from '@fortawesome/free-solid-svg-icons';
import {faDropbox} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-detail-mvt-stk-article',
  templateUrl: './detail-mvt-stk-article.component.html',
  styleUrls: ['./detail-mvt-stk-article.component.scss']
})
export class DetailMvtStkArticleComponent {
  faInfo = faInfo;
  faDollar = faDollar;
  faFlagCheckered = faFlagCheckered;
  faPencil = faPencil;
  faTrashCan = faTrashCan;
  faRectangleList = faRectangleList;
  faDropbox = faDropbox;
}
