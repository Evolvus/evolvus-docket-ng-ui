import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageEvolvusComponent } from './login-page-evolvus/login-page-evolvus.component';
import { DocketHomeComponent } from './docket-home/docket-home.component';
import { DocketRegisterComponent } from './docket-register/docket-register.component';
import { DocketTableContentComponent } from './docket-timeline-content/docket-table-content/docket-table-content.component';

const appRoutes: Routes = [

  { path: '', component: DocketHomeComponent },
  // { path: 'logout', redirectTo: 'loginPage', pathMatch: 'full' },
  // { path: 'loginPage', component: LoginPageEvolvusComponent },
  { path: 'homePage', component: DocketHomeComponent },
  { path: 'registerPage', component: DocketRegisterComponent },
  { path: 'table', component: DocketTableContentComponent }
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
