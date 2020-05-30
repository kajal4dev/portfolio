import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './about-me/education/education.component';
import { FavoutiesComponent } from './about-me/favouties/favouties.component';
import { HobbiesComponent } from './about-me/hobbies/hobbies.component';
import { MamoriesComponent} from './about-me/mamories/mamories.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:"full"
  },
 {
    path:'home',
   component:HomeComponent
 },
 {
    path:'about-me',
   component:AboutMeComponent,
   
   children: [
    {
    path:'',
    redirectTo:'education',
    pathMatch:"full"
  }, 
  {
    path: "education",
    component: EducationComponent,
  },
  {
    path: "favouties",
    component: FavoutiesComponent,
  },
  {
    path: "hobbies",
    component: HobbiesComponent,
  },

  {
    path: "mamories",
    component: MamoriesComponent,
  },

  ]
 },
  {
   path:'projects',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
