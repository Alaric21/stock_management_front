import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {SubscriptionPageComponent} from "./pages/subscription-page/subscription-page.component";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {StatisticPageComponent} from "./pages/statistic-page/statistic-page.component";
import {ArticlePageComponent} from "./pages/articles/article-page/article-page.component";
import {NouvelArticleComponent} from "./pages/articles/nouvel-article/nouvel-article.component";
import {PageMvtstkComponent} from "./pages/mvtstk/page-mvtstk/page-mvtstk.component";
import {PageClientComponent} from "./pages/client/page-client/page-client.component";
import {PageFournisseurComponent} from "./pages/fournisseur/page-fournisseur/page-fournisseur.component";
import {
  NouveauClientFournisseurComponent
} from "./components/nouveau-client-fournisseur/nouveau-client-fournisseur.component";
import {
  PageCommandeClientFournisseurComponent
} from "./pages/page-commande-client-fournisseur/page-commande-client-fournisseur.component";
import {
  NouvelleCommandeClientFournisseurComponent
} from "./components/nouvelle-commande-client-fournisseur/nouvelle-commande-client-fournisseur.component";
import {PageCategorieComponent} from "./pages/categorie/page-categorie/page-categorie.component";
import {NouvelleCategorieComponent} from "./pages/categorie/nouvelle-categorie/nouvelle-categorie.component";
import {PageUtilisateurComponent} from "./pages/utilisateur/page-utilisateur/page-utilisateur.component";
import {NouvelUtilisateurComponent} from "./pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component";
import {PageProfilComponent} from "./pages/profil/page-profil/page-profil.component";
import {ChangerMotDePassComponent} from "./pages/profil/changer-mot-de-pass/changer-mot-de-pass.component";

const routes: Routes = [
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'subscribe',
    component:SubscriptionPageComponent
  },
  {
    path:'',
    component:DashboardPageComponent,
    children: [
      {
        path: 'statictics',
        component:StatisticPageComponent
      },
      {
        path: 'article',
        component:ArticlePageComponent
      },
      {
        path: 'nouvelarticle',
        component:NouvelArticleComponent
      },
      {
        path: 'mvtstk',
        component:PageMvtstkComponent
      },
      {
        path: 'clients',
        component:PageClientComponent
      },
      {
        path: 'nouveauClient',
        component:NouveauClientFournisseurComponent,
        data : {
          origine: 'client'
        }
      },
      {
        path: 'commandesClient',
        component:PageCommandeClientFournisseurComponent,
        data :{
          origine: 'client'
        }
      },
      {
        path: 'nouvelleCommandeClient',
        component:NouvelleCommandeClientFournisseurComponent,
        data :{
          origine: 'client'
        }
      },
      {
        path: 'fournisseurs',
        component:PageFournisseurComponent
      },
      {
        path: 'nouveauFournisseur',
        component:NouveauClientFournisseurComponent,
        data : {
          origine: 'fournisseur'
        }
      },
      {
        path: 'commandesFournisseur',
        component:PageCommandeClientFournisseurComponent,
        data :{
          origine: 'fournisseur'
        }
      },
      {
        path: 'nouvelleCommandeFournisseur',
        component:NouvelleCommandeClientFournisseurComponent,
        data :{
          origine: 'fournisseur'
        }
      },
      {
        path: 'categories',
        component:PageCategorieComponent
      },
      {
        path: 'nouvelleCategorie',
        component:NouvelleCategorieComponent
      },
      {
        path: 'utilisateurs',
        component:PageUtilisateurComponent
      },
      {
        path: 'nouvelUtilisateur',
        component:NouvelUtilisateurComponent
      },
      {
        path: 'profil',
        component:PageProfilComponent
      },
      {
        path: 'changerMotDePasse',
        component:ChangerMotDePassComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
