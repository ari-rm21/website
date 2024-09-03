import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:'home' , component: HomeComponent},
    {path:'about-me' , component: AboutMeComponent},
    {path:'projects' , component: ProjectsComponent},
    {path:'contact-me' , component: ContactMeComponent},
    {path:'**' , component: AboutMeComponent},
];