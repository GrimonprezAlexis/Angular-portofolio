import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalEditPortfolioComponent } from './components/modal-edit-project/modal-edit-portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { DarkModeComponent } from './components/darkMode/darkMode.component';
import { MenuMobileComponent } from './components/menuMobile/menuMobile.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { FilterCarouselComponent } from './components/filter-carousel/filter-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    ModalEditPortfolioComponent,
    DarkModeComponent,
    MenuMobileComponent,
    LoaderComponent,
    //ProjectModalComponent,
    FilterCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
