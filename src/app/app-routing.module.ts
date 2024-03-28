import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:"/landing" },
  {path:'landing', component: LandingPageComponent},
  {path: 'products', component: ProductsPageComponent},
  {path: 'services', component: ServicesPageComponent},
  {path: 'article', component: ArticlePageComponent},
  {path: 'about-us', component: AboutUsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
