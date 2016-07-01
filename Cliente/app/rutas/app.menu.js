"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var serv_menu_1 = require('../servicios/serv.menu');
var MenuComponent = (function () {
    function MenuComponent(menuServicio) {
        this.menuServicio = menuServicio;
        this.nombreVista = "Menu";
    }
    MenuComponent.prototype.getMenus = function () {
        var _this = this;
        this.menuServicio
            .getMenus()
            .then(function (menus) {
            return _this.links = menus;
        });
    };
    MenuComponent.prototype.ngOnInit = function () {
        this.getMenus();
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'mc-menu',
            templateUrl: './app/rutas/app.menu.html'
        }), 
        __metadata('design:paramtypes', [serv_menu_1.MenuServicio])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=app.menu.js.map