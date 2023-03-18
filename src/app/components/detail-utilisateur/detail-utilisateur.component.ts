import { Component } from '@angular/core';
import { faRectangleList } from '@fortawesome/free-regular-svg-icons';
import {faGlobe, faHome, faInfo, faMapMarker, faPencil, faPhone, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.scss']
})
export class DetailUtilisateurComponent {
  faHome = faHome;
  faGlobe = faGlobe;
  faMapMarker = faMapMarker;
  faPencil = faPencil;
  faTrashCan = faTrashCan;
  faRectangleList = faRectangleList;

  faPhone = faPhone;

  faInfo= faInfo;
}
