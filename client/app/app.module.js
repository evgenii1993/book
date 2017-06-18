"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var book_component_1 = require("./components/book/book.component");
var navigation_component_1 = require("./components/navigation/navigation.component");
var workspace_component_1 = require("./components/workspace/workspace.component");
var notFound_component_1 = require("./components/notFound/notFound.component");
var login_component_1 = require("./components/login/login.component");
var notification_component_1 = require("./components/notification/notification.component");
var default_service_1 = require("./service/default.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot([
                { path: "welcome", component: workspace_component_1.workspace },
                { path: "", redirectTo: "welcome", pathMatch: "full" },
                { path: "login", component: login_component_1.loginComponent },
                { path: "**", component: notFound_component_1.notFound }
            ]),
            platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            book_component_1.BookComponent,
            navigation_component_1.NavigatorComponent,
            notification_component_1.NotificationComponent,
            workspace_component_1.workspace,
            login_component_1.loginComponent,
            notFound_component_1.notFound
        ],
        providers: [
            default_service_1.DefaultService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map