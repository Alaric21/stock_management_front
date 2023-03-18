import { Component } from '@angular/core';
import {faAnglesLeft, faAnglesRight, faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  faAnglesRight = faAnglesRight;
  faAnglesLeft = faAnglesLeft;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
}
