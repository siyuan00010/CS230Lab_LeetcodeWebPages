import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideRemoteConfig, getRemoteConfig } from '@angular/fire/remote-config';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutMainComponent } from './layout_main/layout_main.component';
import { LandingHeaderComponent } from './landingHeader/landingHeader.component';
import { landingFooterComponent } from './landingFooter/landingft.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PremiumComponent } from './Premium/premium.component';
import { ExploreComponent } from './body/startExplore.component';
import { ExploreLayoutComponent } from './explore-layout/explore-layout.component';
import { ProblemSetComponent } from './problemSet/problemSet.component';
import { SigninComponent } from './Signin/signin.component';
import { ipadComponent } from './body/ipad.component';
import { TextContentComponent } from './body/textContent.component';
import { companyComponent } from './body/company.component';
import { joinUsComponent } from './body/joinUs.component';
import { QuestionsComponent } from './body/questions.component';
import { PriceComponent } from './Premium/price.component';
import { developerComponent } from './body/developer.component';
import { BusinessComponent } from './business/business.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ExploreCardComponent } from './body/explore-card/explore-card.component';
import { jobsComponent } from './jobs/jobs.component';
import { SignupComponent } from './SignUp/signup.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';


@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    UserInfoComponent,
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ExploreLayoutComponent,
    LandingHeaderComponent,
    landingFooterComponent,
    PremiumComponent,
    ProblemSetComponent,
    SigninComponent,
    SignupComponent,
    LayoutMainComponent,
    ipadComponent,
    TextContentComponent,
    companyComponent,
    joinUsComponent,
    jobsComponent,
    ExploreComponent,
    QuestionsComponent,
    PriceComponent,
    developerComponent,
    BusinessComponent,
    ExploreCardComponent,
    AuthenticationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
