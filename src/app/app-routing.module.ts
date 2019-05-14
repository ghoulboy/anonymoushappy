import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { RecipientComponent } from './components/recipient/recipient.component';
import { WriterComponent } from './components/writer/writer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StatsComponent } from './components/stats/stats.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'recipient', component: RecipientComponent },
  { path: 'writer', component: WriterComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
