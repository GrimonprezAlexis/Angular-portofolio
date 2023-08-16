import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarkModeComponent } from './components/darkMode/darkMode.component';
import { FilterCarouselComponent } from './components/filterCarousel/filterCarousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MenuMobileComponent } from './components/menuMobile/menuMobile.component';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ModalService } from './providers/modal/Modal.service';
import { ModalProjectComponent } from './components/modalProject/modalProject.component';
import { ModalCloseService } from './providers/modal/ModalClose.service';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    DarkModeComponent,
    MenuMobileComponent,
    LoaderComponent,
    FilterCarouselComponent,
    ModalProjectComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
  ],
  providers: [ModalService, ModalCloseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
