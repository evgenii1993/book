import { Component } from '@angular/core';

declare let module: {
    id: string;
};

@Component({
    moduleId: module.id,
    selector: 'nav',
    templateUrl: 'navigation.component.html',
})

export class NavigatorComponent {
    title = 'Navigator';
}