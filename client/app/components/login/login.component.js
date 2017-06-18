"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User_1 = require("../../Data/User");
var notification_component_1 = require("../notification/notification.component");
var default_service_1 = require("../../service/default.service");
var loginComponent = (function () {
    function loginComponent(_service, msg) {
        this._service = _service;
        this.msg = msg;
        this.client = new User_1.User;
        this.response = {};
    }
    loginComponent.prototype.login = function () {
        var _this = this;
        event.preventDefault();
        this._service.sendData('login', this.client)
            .subscribe(function (user) {
            console.log("user: ", user);
            _this.response = user;
        });
    };
    loginComponent.prototype.test = function () {
        this.msg.addMsg({
            title: "TEST",
            text: "text"
        });
        console.log("event test: ", this.msg);
    };
    loginComponent.prototype.clear = function () {
        this.client.username = '';
        this.client.password = '';
    };
    return loginComponent;
}());
loginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: 'login.component.html',
        providers: [
            default_service_1.DefaultService,
            notification_component_1.NotificationComponent
        ]
    }),
    __metadata("design:paramtypes", [default_service_1.DefaultService, notification_component_1.NotificationComponent])
], loginComponent);
exports.loginComponent = loginComponent;
//# sourceMappingURL=login.component.js.map