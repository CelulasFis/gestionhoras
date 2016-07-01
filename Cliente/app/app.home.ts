import { Component } from '@angular/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { clsMenu } from './clases/clase.menu';
import { MenuServicio } from './servicios/serv.menu';

import { IonicComponent } from './rutas/app.ionic';
import { MenuComponent } from './rutas/app.menu';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.home.html',
  styleUrls: ["app/app.home.css"],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    MenuServicio,
    ROUTER_PROVIDERS
  ]
})

@RouteConfig([
  {
    path: '/ionic',
    name: 'Ionic',
    component: IonicComponent
  },
  {
    path: '/',
    name: 'Menu',
    component: MenuComponent
  }
])

export class AppComponent {
  private links: clsMenu[];
  private linkActivo: number;
  constructor(private menuServicio: MenuServicio) { }

  getMenus() {
    this.menuServicio
      .getMenus()
      .then(
      menus =>
        this.links = menus);
  }

  ngOnInit() {
    this
      .getMenus();
  }

  activarLink(numero: number) {
    this.linkActivo = numero;
  }

  compararClaseActiva(Link) {
    switch (Link.numero == this.linkActivo) {
      case true:
        return 'red';
      case false:
        return 'black';

    }



  }
}

