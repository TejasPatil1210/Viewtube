import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountGuard } from './account.guard';
import { AccountsheaderComponent } from './accountsheader/accountsheader.component';
import { LivstreamGuard } from './livstream.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudioLivestreamCompComponent } from './studio-livestream-comp/studio-livestream-comp.component';
import { StudioUploadCompComponent } from './studio-upload-comp/studio-upload-comp.component';
import { StudioheaderComponent } from './studioheader/studioheader.component';
import { ViewtubecontentComponent } from './viewtubecontent/viewtubecontent.component';
import { ViewtubeheaderComponent } from './viewtubeheader/viewtubeheader.component';

const routes: Routes = [

  {
    path:"home",
     component:ViewtubeheaderComponent,
    children:[
      {
        path:"",
        component:ViewtubecontentComponent
      }
    ]
  },
    {
    path:"studioUrl",
    component:StudioheaderComponent,
    canActivate:[AccountGuard],
    children:[
      {
        path:"uploadvid",
        component:StudioUploadCompComponent
      },
      {
        path:"livestream",
        component:StudioLivestreamCompComponent,
        canActivate:[LivstreamGuard]
      }
    ]
  },
  {
    path:"accounts",
    component:AccountsheaderComponent,
    children:[
      {
        path:"register",
        component:RegisterComponent
      },
      {
        path:"login",
        component:LoginComponent
      }
    ]
  },
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
