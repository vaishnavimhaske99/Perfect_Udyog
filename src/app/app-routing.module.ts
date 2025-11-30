import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'home_page', component:HomePageComponent},
  {path:'footer', component:FooterComponent},
  {path:'our-team', component:OurTeamComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'Services', component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
