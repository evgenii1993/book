import { Component } from '@angular/core';

declare let module: {
    id: string;
};

@Component({
    moduleId: module.id,
    selector: 'workspace',
    templateUrl: 'workspace.component.html'
})

export class workspace {

}