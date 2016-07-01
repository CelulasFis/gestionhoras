import { Component } from '@angular/core';

import { clsMenu } from '../clases/clase.menu';

import { MenuServicio } from '../servicios/serv.menu';

@Component({
    selector: 'mc-menu',
    templateUrl: './app/rutas/app.menu.html'
})


export class MenuComponent {
    private nombreVista: string;
    private links: clsMenu[];

    constructor(private menuServicio: MenuServicio) {
        this.nombreVista = "Menu"
    }

    getMenus() {
        this.menuServicio
            .getMenus()
            .then(
            menus =>
                this.links = menus);
    }

    ngOnInit() {
        this.getMenus();
    }

}