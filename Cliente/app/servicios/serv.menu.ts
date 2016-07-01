import { Injectable } from '@angular/core';

import { clsMenu } from '../clases/clase.menu';
import { Menus } from '../servicios/serv.menu.mock';



@Injectable()

export class MenuServicio {
    getMenus() {
        return Promise.resolve(Menus);
    }
}

