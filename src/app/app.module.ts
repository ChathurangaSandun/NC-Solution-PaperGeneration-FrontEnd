import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';

import { fuseConfig } from './fuse-config';

import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { FuseSampleModule } from './main/content/sample/sample.module';
import { AdminModule } from './main/content/admin/admin.module'
import { AuthenticationModule } from './main/authentication/authentication.module';



const appRoutes: Routes = [   
    {
        path      : '',
        redirectTo: 'admin/algorithms',
        pathMatch: 'full'

     },
    // {
    //     path      : '',
    //     redirectTo: 'sample'
    // },
    {
        path      : 'admin', 
        loadChildren: './main/content/admin/admin.module#AdminModule'
    }

];

@NgModule({
    declarations: [
        AppComponent,        
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),

        // Fuse Main and Shared modules
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,
        FuseMainModule,
        FuseSampleModule,
        AuthenticationModule,
        AdminModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
