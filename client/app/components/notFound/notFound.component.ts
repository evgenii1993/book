import { Component } from '@angular/core';

declare let module: {
    id: string;
};

@Component({
    moduleId: module.id,
    selector: 'notFound',
    templateUrl: 'notFound.component.html'
})

export class notFound {

}