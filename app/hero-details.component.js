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
var app_component_1 = require("./app.component");
var HeroDetailsComponent = (function () {
    function HeroDetailsComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', app_component_1.Hero)
    ], HeroDetailsComponent.prototype, "selectedHero", void 0);
    HeroDetailsComponent = __decorate([
        core_1.Component({
            selector: 'hero-details',
            template: " <h2>Details</h2>\n               <div *ngIf=\"selectedHero\">\n                   <div>\n                       <label> id: </label> {{selectedHero.id}}\n                   </div>\n                    <div>\n                       <label> name: </label> \n                       <input [(ngModel)]=\"selectedHero.name\">\n                     </div>\n               </div> \n"
        }), 
        __metadata('design:paramtypes', [])
    ], HeroDetailsComponent);
    return HeroDetailsComponent;
}());
exports.HeroDetailsComponent = HeroDetailsComponent;
//# sourceMappingURL=hero-details.component.js.map