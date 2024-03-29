import {Component, OnInit} from '@angular/core';
import {MenuList} from "./menu-list";
import {Router} from "@angular/router";
import {faUserTie,faChartLine, faChartColumn,faShoppingBag, faPeopleCarryBox ,faPersonChalkboard, faPersonWalkingLuggage, faUser,faGear} from '@fortawesome/free-solid-svg-icons';
import {faWpexplorer, faElementor } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  myCharLine = faChartLine;
  faWpexplorer = faWpexplorer;
  faChartColumn = faChartColumn;
  faShoppingBag = faShoppingBag;
  faPeopleCarryBox = faPeopleCarryBox;
  faPersonChalkboard = faPersonChalkboard;
  faPersonWalkingLuggage = faPersonWalkingLuggage;
  faUser = faUser;
  faGear = faGear;
  faElementor = faElementor;
  faUserTie = faUserTie;
  public menuProperties: Array<MenuList> =[{
      id:'1',
      title: 'tableau de bord',
      icon: this.myCharLine,
      url:'',
      sousMenu:[
        {
          id:'11',
          title: 'Vue d\'ensemble',
          icon: this.faWpexplorer,
          url:''
        },{
          id:'12',
          title: 'statistique',
          icon: this.faChartColumn,
          url:'statictics'
        }

      ]
  },
    {
      id:'2',
      title: 'Articles',
      icon: this.faShoppingBag,
      url:'',
      sousMenu:[
        {
          id:'21',
          title: 'Articles',
          icon: this.faShoppingBag,
          url:'article'
        },{
          id:'22',
          title: 'Mouvement du stock',
          icon: this.faPeopleCarryBox,
          url:'mvtstk'
        }

      ]
    },
    {
      id:'3',
      title: 'Clients',
      icon: this.faPersonChalkboard,
      url:'',
      sousMenu:[
        {
          id:'31',
          title: 'Clients',
          icon: this.faPersonChalkboard,
          url:'clients'
        },{
          id:'32',
          title: 'Commandes Clients',
          icon: this.faPersonWalkingLuggage,
          url:'commandesClient'
        }

      ]
    },
    {
      id:'4',
      title: 'Fournisseurs',
      icon: this.faUser,
      url:'',
      sousMenu:[
        {
          id:'41',
          title: 'Fournisseurs',
          icon: this.faUser,
          url:'fournisseurs'
        },{
          id:'42',
          title: 'Commandes Fournisseurs',
          icon: this.faPersonWalkingLuggage,
          url:'commandesFournisseur'
        }
      ]
    },
    {
      id:'5',
      title: 'Parametrages',
      icon: this.faGear,
      url:'',
      sousMenu:[
        {
          id:'51',
          title: 'Categories',
          icon: this.faElementor,
          url:'categories'
        },{
          id:'52',
          title: 'Utilisateurs',
          icon: this.faUserTie ,
          url:'utilisateurs'
        }

      ]
    }
  ]

  constructor(
    private router : Router
  ) {
  }

  navigate(url?: String) :void{
    this.router.navigate([url])
  }

 /* private lastselectedMenu : MenuList | undefined;
  navigate(menu: MenuList) : void {

    if (this.lastselectedMenu) {
      this.lastselectedMenu.active = false;
    }
    menu.active = true;
    this.lastselectedMenu = menu;
    this.router.navigate([menu.url]);
  }*/
  ngOnInit(): void {
  }
}

