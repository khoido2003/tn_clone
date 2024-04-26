import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoComponent } from './main/info/info.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './main/components/hero/hero.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import {
  HlmCarouselComponent,
  HlmCarouselContentComponent,
  HlmCarouselItemComponent,
  HlmCarouselNextComponent,
  HlmCarouselPreviousComponent,
} from './ui/ui-carousel-helm/src';
import { MenuBarComponent } from './main/components/menu-bar/menu-bar.component';
import { MainContentComponent } from './main/components/main-content/main-content.component';
import { StepDetailComponent } from './main/components/step-detail/step-detail.component';
import { ContentDetailComponent } from './main/components/content-detail/content-detail.component';
import { ContentDetailHeaderComponent } from './main/components/content-detail-header/content-detail-header.component';
import { DetailDiaryComponent } from './main/components/detail-diary/detail-diary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InfoComponent,
    NavigationComponent,
    HeroComponent,
    CarouselComponent,
    MenuBarComponent,
    MainContentComponent,
    StepDetailComponent,
    ContentDetailComponent,
    ContentDetailHeaderComponent,
    DetailDiaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HlmCarouselComponent,
    HlmCarouselContentComponent,
    HlmCarouselItemComponent,
    HlmCarouselNextComponent,
    HlmCarouselPreviousComponent,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
