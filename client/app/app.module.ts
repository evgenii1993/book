import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import {HttpModule}                 from '@angular/http';
import {FormsModule}                from '@angular/forms';
import {RouterModule}               from "@angular/router";

import {AppComponent}               from './app.component';
import {BookComponent}              from './components/book/book.component';
import {NavigatorComponent}         from './components/navigation/navigation.component';
import {workspace}                  from './components/workspace/workspace.component';
import {notFound}                   from './components/notFound/notFound.component';
import {loginComponent}             from './components/login/login.component';
import {NotificationComponent}      from './components/notification/notification.component';


import {DefaultService} from "./service/default.service";

@NgModule({
    imports:      [
        RouterModule.forRoot([
            {path:"welcome",    component: workspace},
            {path:"",           redirectTo:"welcome", pathMatch:"full"},
            {path:"login",      component:loginComponent},
            {path:"**",         component: notFound}
        ]),
        BrowserModule, HttpModule, FormsModule
    ],
    declarations: [
        AppComponent,
        BookComponent,
        NavigatorComponent,
        NotificationComponent,
        workspace,
        loginComponent,
        notFound
    ],
    providers: [
        DefaultService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }