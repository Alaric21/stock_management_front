import { Component } from '@angular/core';
import {faHome, faMapMarker, faInfo, faGlobe, faPencil, faTrashCan,faRectangleList, faPhone} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-detail-client-founiseur',
  templateUrl: './detail-client-founiseur.component.html',
  styleUrls: ['./detail-client-founiseur.component.scss']
})
export class DetailClientFouniseurComponent {


  faHome = faHome;
  faGlobe = faGlobe;
  faMapMarker = faMapMarker;
  faPencil = faPencil;
  faTrashCan = faTrashCan;
  faRectangleList = faRectangleList;

  faPhone = faPhone;

  faInfo= faInfo;
}
