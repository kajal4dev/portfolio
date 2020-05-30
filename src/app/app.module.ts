import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './about-me/education/education.component';
import { HobbiesComponent } from './about-me/hobbies/hobbies.component';
import { FavoutiesComponent } from './about-me/favouties/favouties.component';
import { MamoriesComponent } from './about-me/mamories/mamories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    EducationComponent,
    HobbiesComponent,
    FavoutiesComponent,
    MamoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
