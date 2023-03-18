import { Component } from '@angular/core';
import {faInfo, faPhone,faShoppingCart, faCalendarDays,faQrcode, faDollar, faFlagCheckered, faPencil, faTrashCan,faRectangleList} from '@fortawesome/free-solid-svg-icons';
import {faDropbox} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-detail-commande-client-fournisseur',
  templateUrl: './detail-commande-client-fournisseur.component.html',
  styleUrls: ['./detail-commande-client-fournisseur.component.scss']
})
export class DetailCommandeClientFournisseurComponent {
  faInfo = faInfo;
  faPhone= faPhone;
  faCalendarDays=faCalendarDays;
  faShoppingCart=faShoppingCart;
  faQrcode=faQrcode;
  faDollar = faDollar;
  faFlagCheckered = faFlagCheckered;
  faPencil = faPencil;
  faTrashCan = faTrashCan;
  faRectangleList = faRectangleList;
  faDropbox = faDropbox;
}
