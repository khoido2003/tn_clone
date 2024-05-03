import { NgModule, importProvidersFrom } from '@angular/core';
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
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogDescriptionDirective,
  HlmDialogFooterComponent,
  HlmDialogHeaderComponent,
  HlmDialogTitleDirective,
} from './ui/ui-dialog-helm/src';
import {
  BrnDialogContentDirective,
  BrnDialogTriggerDirective,
} from '@spartan-ng/ui-dialog-brain';
import { HlmButtonDirective } from './ui/ui-button-helm/src/lib/hlm-button.directive';
import { HlmInputDirective } from './ui/ui-input-helm/src/lib/hlm-input.directive';
import { HlmLabelDirective } from './ui/ui-label-helm/src/lib/hlm-label.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HlmToasterComponent } from './ui/ui-sonner-helm/src/lib/hlm-toaster.component';
import {
  BrnAlertDialogContentDirective,
  BrnAlertDialogTriggerDirective,
} from '@spartan-ng/ui-alertdialog-brain';
import { HlmAlertDialogComponent } from './ui/ui-alertdialog-helm/src/lib/hlm-alert-dialog.component';
import { HlmAlertDialogOverlayDirective } from './ui/ui-alertdialog-helm/src/lib/hlm-alert-dialog-overlay.directive';
import { HlmAlertDialogHeaderComponent } from './ui/ui-alertdialog-helm/src/lib/hlm-alert-dialog-header.component';
import { HlmAlertDialogFooterComponent } from './ui/ui-alertdialog-helm/src/lib/hlm-alert-dialog-footer.component';
import { HlmAlertDialogTitleDirective } from './ui/ui-alertdialog-helm/src/lib/hlm-alert-dialog-title.directive';
import { HlmAlertDialogDescriptionDirective } from './ui/ui-alertdialog-helm/src/lib/hlm-alert-dialog-description.directive';
import { HlmAlertDialogCancelButtonDirective } from './ui/ui-alertdialog-helm/src/lib/hlm-alert-dialog-cancel-button.directive';
import { HlmAlertDialogActionButtonDirective } from './ui/ui-alertdialog-helm/src/lib/hlm-alert-dialog-action-button.directive';
import { HlmAlertDialogContentComponent } from './ui/ui-alertdialog-helm/src/lib/hlm-alert-dialog-content.component';

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
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HlmCarouselComponent,
    HlmCarouselContentComponent,
    HlmCarouselItemComponent,
    HlmCarouselNextComponent,
    HlmCarouselPreviousComponent,
    BrnDialogTriggerDirective,
    BrnDialogContentDirective,

    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogHeaderComponent,
    HlmDialogFooterComponent,
    HlmDialogTitleDirective,
    HlmDialogDescriptionDirective,

    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,
    HlmToasterComponent,

    BrnAlertDialogTriggerDirective,
    BrnAlertDialogContentDirective,

    HlmAlertDialogComponent,
    HlmAlertDialogOverlayDirective,
    HlmAlertDialogHeaderComponent,
    HlmAlertDialogFooterComponent,
    HlmAlertDialogTitleDirective,
    HlmAlertDialogDescriptionDirective,
    HlmAlertDialogCancelButtonDirective,
    HlmAlertDialogActionButtonDirective,
    HlmAlertDialogContentComponent,
  ],
  providers: [provideClientHydration(), importProvidersFrom(HttpClientModule)],
  bootstrap: [AppComponent],
})
export class AppModule {}
