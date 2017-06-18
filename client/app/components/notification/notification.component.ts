import { Component } from '@angular/core';

declare let module: {
    id: string;
};

@Component({
    selector: 'notification',
    moduleId: module.id,
    templateUrl: 'notification.component.html'
})
export class NotificationComponent {
    list = [{
        title: "begin",
        text: "begin test"
    }];

    addMsg(msg){
        this.list.push(msg);
    }
}
