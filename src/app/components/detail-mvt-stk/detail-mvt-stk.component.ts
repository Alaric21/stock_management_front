import { Component } from '@angular/core';
import {faInfo, faDollar, faFlagCheckered, faPencil, faTrashCan,faRectangleList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail-mvt-stk',
  templateUrl: './detail-mvt-stk.component.html',
  styleUrls: ['./detail-mvt-stk.component.scss']
})
export class DetailMvtStkComponent {
  faInfo = faInfo;
  faDollar = faDollar;
  faFlagCheckered = faFlagCheckered;
  faPencil = faPencil;
  faTrashCan = faTrashCan;
  faRectangleList = faRectangleList;

}
