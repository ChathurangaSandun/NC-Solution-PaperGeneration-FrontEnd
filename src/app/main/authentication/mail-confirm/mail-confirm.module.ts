import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { MailConfirmComponent } from './mail-confirm.component';

const routes = [
  {
      path     : 'auth/mailconfirm',
      component: MailConfirmComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
        MatIconModule,
        FuseSharedModule
  ],
  declarations: [MailConfirmComponent]
})
export class MailConfirmModule { }
