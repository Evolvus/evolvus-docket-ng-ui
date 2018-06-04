
// AngularModules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
// MaterialLibraryModules
import { MatNativeDateModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
// CustomServices
import { DocketSideNavService } from './docket-side-nav.service';
import { DocketTimelineContentService } from './docket-timeline-content/docket-timeline-content.service';
import { SideNavFormContentService } from './docket-side-navigation/docket-side-nav-form-content.service';


// SecondaryModules
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { DocketSideNavigationComponent } from './docket-side-navigation/docket-side-navigation.component';
import { DocketTimelineContentComponent } from './docket-timeline-content/docket-timeline-content.component';
import { LoginPageEvolvusComponent } from './login-page-evolvus/login-page-evolvus.component';
import { DocketHeaderComponent } from './docket-header/docket-header.component';
import { DocketTimelineContentDetailsComponent } from './docket-timeline-content/docket-timeline-content-details/docket-timeline-content-details.component';
import { TimelineSearchPipe } from './docket-timeline-content/timeline-search.pipe';
import { DocketHomeComponent } from './docket-home/docket-home.component';
import { DocketRegisterComponent } from './docket-register/docket-register.component';
import { TimelineSidenavfilterPipe } from './docket-timeline-content/timeline-sidenavfilter.pipe';
import { DocketTableContentComponent } from './docket-timeline-content/docket-table-content/docket-table-content.component';


@NgModule({
  declarations: [
    AppComponent,
    DocketSideNavigationComponent,
    DocketTimelineContentComponent,
    DocketHeaderComponent,
    LoginPageEvolvusComponent,
    DocketTimelineContentDetailsComponent,
    TimelineSearchPipe,
    DocketHomeComponent,
    DocketRegisterComponent,
    TimelineSidenavfilterPipe,
    DocketTableContentComponent


  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    AppRoutingModule

  ],
  entryComponents: [
    DocketTimelineContentDetailsComponent
  ],
  exports: [


  ],
  providers: [DocketSideNavService, DocketTimelineContentService, SideNavFormContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
