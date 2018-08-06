import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [AuthGuardService, AuthenticationService],
  declarations: [HeaderComponent, NavComponent],
  exports: [HeaderComponent, NavComponent]
})
export class CoreModule { }
