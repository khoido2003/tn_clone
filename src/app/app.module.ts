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
