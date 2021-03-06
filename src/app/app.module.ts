import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { RecipientComponent } from './components/recipient/recipient.component';
import { WriterComponent } from './components/writer/writer.component';
import { StatsComponent } from './components/stats/stats.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatService } from './services/cat.service'
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HowItWorksComponent,
    RecipientComponent,
    WriterComponent,
    StatsComponent,
    PageNotFoundComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    ModalComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [CatService, AuthService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
