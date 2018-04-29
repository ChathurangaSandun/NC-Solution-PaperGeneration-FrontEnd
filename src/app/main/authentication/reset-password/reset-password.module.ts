import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password.component';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';




const routes = [
  {
      path     : 'auth/resetpassword',
      component: ResetPasswordComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,

        FuseSharedModule
  ],
  declarations: [ResetPasswordComponent]
})
export class ResetPasswordModule { }
