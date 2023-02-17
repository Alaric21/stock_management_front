import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {SubscriptionPageComponent} from "./pages/subscription-page/subscription-page.component";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {StatisticPageComponent} from "./pages/statistic-page/statistic-page.component";
import {ArticlePageComponent} from "./pages/articles/article-page/article-page.component";
import {NouvelArticleComponent} from "./pages/articles/nouvel-article/nouvel-article.component";
import {PageMvtstkComponent} from "./pages/mvtstk/page-mvtstk/page-mvtstk.component";

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
