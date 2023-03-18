import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SubscriptionPageComponent } from './pages/subscription-page/subscription-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './components/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { ArticlePageComponent } from './pages/articles/article-page/article-page.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ButtonActionComponent } from './components/button-action/button-action.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { DetailMvtStkArticleComponent } from './components/detail-mvt-stk-article/detail-mvt-stk-article.component';
import { DetailMvtStkComponent } from './components/detail-mvt-stk/detail-mvt-stk.component';
import { DetailClientFouniseurComponent } from './components/detail-client-founiseur/detail-client-founiseur.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauClientFournisseurComponent } from './components/nouveau-client-fournisseur/nouveau-client-fournisseur.component';
import { DetailCommandeClientFournisseurComponent } from './components/detail-commande-client-fournisseur/detail-commande-client-fournisseur.component';
import { DetailCommandeComponent } from './components/detail-commande/detail-commande.component';
import { PageCommandeClientFournisseurComponent } from './pages/page-commande-client-fournisseur/page-commande-client-fournisseur.component';
import { NouvelleCommandeClientFournisseurComponent } from './components/nouvelle-commande-client-fournisseur/nouvelle-commande-client-fournisseur.component';
import { PageCategorieComponent } from './pages/categorie/page-categorie/page-categorie.component';
import { NouvelleCategorieComponent } from './pages/categorie/nouvelle-categorie/nouvelle-categorie.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';
import { DetailUtilisateurComponent } from './components/detail-utilisateur/detail-utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePassComponent } from './pages/profil/changer-mot-de-pass/changer-mot-de-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SubscriptionPageComponent,
    DashboardPageComponent,
    StatisticPageComponent,
    MenuComponent,
    HeaderComponent,
    ArticlePageComponent,
    ArticleDetailComponent,
    PaginationComponent,
    ButtonActionComponent,
    NouvelArticleComponent,
    PageMvtstkComponent,
    DetailMvtStkArticleComponent,
    DetailMvtStkComponent,
    DetailClientFouniseurComponent,
    PageClientComponent,
    PageFournisseurComponent,
    NouveauClientFournisseurComponent,
    DetailCommandeClientFournisseurComponent,
    DetailCommandeComponent,
    PageCommandeClientFournisseurComponent,
    NouvelleCommandeClientFournisseurComponent,
    PageCategorieComponent,
    NouvelleCategorieComponent,
    PageUtilisateurComponent,
    DetailUtilisateurComponent,
    NouvelUtilisateurComponent,
    PageProfilComponent,
    ChangerMotDePassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
