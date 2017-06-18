import { Component }    from '@angular/core';
import {DefaultService} from './service/default.service';

declare let module: {
    id: string;
};

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers:[
        DefaultService
    ]
})

export class AppComponent { }