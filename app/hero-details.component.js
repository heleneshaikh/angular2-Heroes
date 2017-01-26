/**
 * Created by heleneshaikh on 24/01/2017.
 */
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
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var router_1 = require("@angular/router");
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var HeroDetailsComponent = (function () {
    function HeroDetailsComponent(heroService, location, route) {
        this.heroService = heroService;
        this.location = location;
        this.route = route;
    }
    HeroDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this.heroService.getHero(+params['id']); }).subscribe(function (hero) { return _this.hero = hero; });
    };
    // @Input() //input property because data flows from the binding expression into the directive
    // selectedHero: Hero;
    HeroDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailsComponent.prototype.save = function () {
        var _this = this;
        this.heroService.update(this.hero).then(function () { return _this.goBack(); });
    };
    HeroDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hero-details',
            template: " <div *ngIf=\"hero\">\n                  <h2>{{hero.name}}Details</h2>\n                  <div>\n                       <label> id: </label> {{hero.id}}\n                   </div>\n                  <div>\n                       <label> name: </label> \n                       <input [(ngModel)]=\"hero.name\">\n                  </div>\n                  <button (click)=\"goBack()\">Back</button>\n                  <button (click)=\"save()\">Save</button>\n               </div> \n",
            styleUrls: ['hero-details.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, common_1.Location, router_1.ActivatedRoute])
    ], HeroDetailsComponent);
    return HeroDetailsComponent;
}());
exports.HeroDetailsComponent = HeroDetailsComponent;
//# sourceMappingURL=hero-details.component.js.map