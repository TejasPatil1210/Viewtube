import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadercompComponent } from './headercomp/headercomp.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ThumbnailcompComponent } from './thumbnailcomp/thumbnailcomp.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ChipsBarCompComponent } from './chips-bar-comp/chips-bar-comp.component';
import { ViewtubeheaderComponent } from './viewtubeheader/viewtubeheader.component';
import { ViewtubecontentComponent } from './viewtubecontent/viewtubecontent.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { StudioUploadCompComponent } from './studio-upload-comp/studio-upload-comp.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatRippleModule} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoUrldirDirective } from './video-urldir.directive';
import { VideoDurationdirDirective } from './video-durationdir.directive';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatNativeDateModule} from '@angular/material/core';
import { StudioLivestreamCompComponent } from './studio-livestream-comp/studio-livestream-comp.component'
import {NgxMatDatetimePickerModule,NgxMatNativeDateModule,NgxMatTimepickerModule} from '@angular-material-components/datetime-picker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { StudioheaderComponent } from './studioheader/studioheader.component';
import { AccountsheaderComponent } from './accountsheader/accountsheader.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    HeadercompComponent,
    ThumbnailcompComponent,
    ChipsBarCompComponent,
    ViewtubeheaderComponent,
    ViewtubecontentComponent,
    StudioUploadCompComponent,
    VideoUrldirDirective,
    VideoDurationdirDirective,
    StudioLivestreamCompComponent,
    StudioheaderComponent,
    AccountsheaderComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatRippleModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    NgxMaterialTimepickerModule,
    MatAutocompleteModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
