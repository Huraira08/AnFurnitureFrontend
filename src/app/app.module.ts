import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { AchievementComponent } from './components/achievement/achievement.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductOfferComponent } from './components/product-offer/product-offer.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { PageHeadingComponent } from './components/page-heading/page-heading.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { CustomerServiceCardComponent } from './components/customer-service-card/customer-service-card.component';
import { TeamMemberCardComponent } from './components/team-member-card/team-member-card.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavMenuComponent,
    FeatureCardComponent,
    ProductCardComponent,
    TruncatePipe,
    AchievementComponent,
    TestimonialCardComponent,
    ArticleCardComponent,
    ProductsPageComponent,
    ProductOfferComponent,
    ServicesPageComponent,
    PageHeadingComponent,
    ServiceCardComponent,
    ArticlePageComponent,
    AboutUsPageComponent,
    CustomerServiceCardComponent,
    TeamMemberCardComponent,
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule,
    NzMenuModule,
    NzCardModule,
    NzCarouselModule,
    NzButtonModule,
    NzGridModule,
    NzBadgeModule,
    NzPaginationModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
