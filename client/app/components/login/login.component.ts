import { Component }            from '@angular/core';
import {User}                   from "../../Data/User";
import {NotificationComponent}  from "../notification/notification.component";
import {DefaultService}         from "../../service/default.service";

declare let module: {
    id: string;
};

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    providers: [
        DefaultService,
        NotificationComponent
    ]
})

export class loginComponent {
    client = new User;
    response = {};

    constructor(private _service:DefaultService, public msg:NotificationComponent){

    }
    login(){
        event.preventDefault();
        this._service.sendData('login', this.client)
            .subscribe(user => {
                console.log("user: ", user);
                this.response = user;
            });
    }
    test(){
        this.msg.addMsg({
            title: "TEST",
            text: "text"
        });
        console.log("event test: ",  this.msg);
    }
    clear(){
        this.client.username = '';
        this.client.password = '';
    }
}