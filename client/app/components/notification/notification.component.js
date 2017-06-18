"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NotificationComponent = (function () {
    function NotificationComponent() {
        this.list = [{
                title: "begin",
                text: "begin test"
            }];
    }
    NotificationComponent.prototype.addMsg = function (msg) {
        this.list.push(msg);
    };
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    core_1.Component({
        selector: 'notification',
        moduleId: module.id,
        templateUrl: 'notification.component.html'
    })
], NotificationComponent);
exports.NotificationComponent = NotificationComponent;
//# sourceMappingURL=notification.component.js.map