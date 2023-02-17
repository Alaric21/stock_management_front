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
    DetailMvtStkComponent
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
