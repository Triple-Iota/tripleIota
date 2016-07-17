import { Component } from '@angular/core';
import { Router,ROUTER_DIRECTIVES } from '@angular/router';

const template = require('./app.component.html');

@Component({
    selector: 'my-app',
    template: template,
    directives: [ROUTER_DIRECTIVES]
})


export class AppComponent {

    constructor(public router:Router) {
    }

}