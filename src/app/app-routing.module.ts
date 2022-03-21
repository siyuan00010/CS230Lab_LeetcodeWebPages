import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PremiumComponent } from './Premium/premium.component';
import { SigninComponent } from './Signin/signin.component';
import { ProblemSetComponent } from './problemSet/problemSet.component';
import { BusinessComponent } from './business/business.component';
import { ExploreLayoutComponent } from "./explore-layout/explore-layout.component";
import { jobsComponent } from './jobs/jobs.component';
import { LayoutMainComponent } from './layout_main/layout_main.component';

const routes: Routes = [
  { path: '', component: LayoutMainComponent},
  { path: 'subscribe', component: PremiumComponent },
  { path: 'accounts/signin', component: SigninComponent },
  { path: 'explore', component:ExploreLayoutComponent},
  { path: 'problemSet', component: ProblemSetComponent },
  { path: 'business/contact', component: BusinessComponent },
  { path: 'jobs', component:jobsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
export class Route{
  Routes: any;
}
