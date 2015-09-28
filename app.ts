/// <reference path="typings/angular2/angular2.d.ts" />
import { Component, View, Directive, EventEmitter,bootstrap, FORM_DIRECTIVES } from 'angular2/angular2';
@Directive({
  selector: '[ng-model]',
  properties: ['ngModel'],
  events: ['ngModelChanged: ngModel'],
  host: {
    "[value]": 'ngModel',
    "(input)": "ngModelChanged.next($event.target.value)"
  }
})

@Component({
  selector: 'my-app'  
})
@View({
	template: "<input [(ng-model)]='val' ></input>Hi {{val}}",
	directives : [FORM_DIRECTIVES]
})
class MyAppComponent {
  val ='aa';  
  constructor(){    
  }
}
bootstrap(MyAppComponent);