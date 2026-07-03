import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JourneyComponent } from './components/journey/journey.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home page default hoga jisme journey bhi dikhegi
  { path: 'education', component: JourneyComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: '' } // Kisi bhi galat URL par home par le jayega
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }