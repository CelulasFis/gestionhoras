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
var router_deprecated_1 = require('@angular/router-deprecated');
var serv_menu_1 = require('./servicios/serv.menu');
var app_ionic_1 = require('./rutas/app.ionic');
var app_menu_1 = require('./rutas/app.menu');
var AppComponent = (function () {
    function AppComponent(menuServicio) {
        this.menuServicio = menuServicio;
    }
    AppComponent.prototype.getMenus = function () {
        var _this = this;
        this.menuServicio
            .getMenus()
            .then(function (menus) {
            return _this.links = menus;
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this
            .getMenus();
    };
    AppComponent.prototype.activarLink = function (numero) {
        this.linkActivo = numero;
    };
    AppComponent.prototype.compararClaseActiva = function (Link) {
        switch (Link.numero == this.linkActivo) {
            case true:
                return 'red';
            case false:
                return 'black';
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/app.home.html',
            styleUrls: ["app/app.home.css"],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                serv_menu_1.MenuServicio,
                router_deprecated_1.ROUTER_PROVIDERS
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/ionic',
                name: 'Ionic',
                component: app_ionic_1.IonicComponent
            },
            {
                path: '/',
                name: 'Menu',
                component: app_menu_1.MenuComponent
            }
        ]), 
        __metadata('design:paramtypes', [serv_menu_1.MenuServicio])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.home.js.map