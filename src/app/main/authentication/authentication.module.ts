import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FuseSharedModule } from "@fuse/shared.module";

import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { LoginModule } from "./login/login.module";
import { RegisterModule } from "./register/register.module";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { LockComponent } from "./lock/lock.component";
import { LockModule } from "./lock/lock.module";
import { ForgotPasswordModule } from "./forgot-password/forgot-password.module";
import { MailConfirmComponent } from "./mail-confirm/mail-confirm.component";
import { MailConfirmModule } from "./mail-confirm/mail-confirm.module";
import { ResetPasswordModule } from "./reset-password/reset-password.module";

@NgModule({
  imports: [
    LoginModule,
    RegisterModule,
    LockModule,
    ForgotPasswordModule,
    MailConfirmModule,
    ResetPasswordModule,
    CommonModule,
    FuseSharedModule
  ],
  declarations: []
})
export class AuthenticationModule {}
