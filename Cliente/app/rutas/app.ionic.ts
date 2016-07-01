import { Component } from '@angular/core';

@Component({
  selector: 'mc-ionic',
  templateUrl: './app/rutas/app.ionic.html'
})


export class IonicComponent {
    private nombreVista:string;
    constructor(){
        this.nombreVista = "Ionic"
    }
}