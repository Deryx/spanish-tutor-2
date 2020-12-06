(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/5gL":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/conjugator-overlay-form/conjugator-overlay-form.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <form class=\"col-lg-4\">\n    <fieldset class=\"col-lg-12\">\n      <dl>\n        <dt class=\"col-lg-6\">What verb tense do you want to conjugate?</dt>\n        <dd class=\"col-lg-6\">\n          <select id=\"tenseSelect\" class=\"col-xs-12\" name=\"tenseSelect\" [(ngModel)]=\"tenseSelect\"></select>\n        </dd>\n      </dl>\n      <dl>\n        <dt>Do you want you want to conjugate random verb(s) or one specific verb?</dt>\n        <dd class=\"col-lg-6\">\n          <label for=\"random\" class=\"container-v\">random\n            <input type=\"radio\" id=\"random\" name=\"conjugationType\" [(ngModel)]=\"conjugationType\" value=\"random\" (ngModelChange)=\"onChange()\" />\n            <span class=\"radioCategory\"></span>\n          </label>\n\n          <label for=\"single\" class=\"container-v\">single\n            <input type=\"radio\" id=\"single\" name=\"conjugationType\" [(ngModel)]=\"conjugationType\" value=\"single\" (ngModelChange)=\"onChange()\" />\n            <span class=\"radioCategory\"></span>\n          </label>\n        </dd>\n      </dl>\n      <dl *ngIf=\"showRandom\">\n        <dt class=\"col-lg-6\">How many verbs do you want to conjugate?</dt>\n        <dd class=\"col-lg-6\">\n          <label for=\"verbs1\" class=\"container\">1\n            <input type=\"radio\" id=\"verbs1\" name=\"numberVerbs\" [(ngModel)]=\"numberVerbs\" value=\"1\" />\n            <span class=\"radioCategory\"></span>\n          </label>\n\n          <label for=\"verbs5\" class=\"container\">5\n            <input type=\"radio\" id=\"verbs5\" name=\"numberVerbs\" [(ngModel)]=\"numberVerbs\" value=\"5\" />\n            <span class=\"radioCategory\"></span>\n          </label>\n\n          <label for=\"verbs10\" class=\"container\">10\n            <input type=\"radio\" id=\"verbs10\" name=\"numberVerbs\" [(ngModel)]=\"numberVerbs\" value=\"10\" />\n            <span class=\"radioCategory\"></span>\n          </label>\n\n          <label for=\"verbs15\" class=\"container\">15\n            <input type=\"radio\" id=\"verbs15\" name=\"numberVerbs\" [(ngModel)]=\"numberVerbs\" value=\"15\" />\n            <span class=\"radioCategory\"></span>\n          </label>\n\n          <label for=\"verbs20\" class=\"container\">20\n            <input type=\"radio\" id=\"verbs20\" name=\"numberVerbs\" [(ngModel)]=\"numberVerbs\" value=\"20\" />\n            <span class=\"radioCategory\"></span>\n          </label>\n      </dl>\n      <dl *ngIf=\"showSingle\">\n        <dt class=\"col-lg-6\">What verb do you want to conjugate?</dt>\n        <dd class=\"col-lg-6\">\n          <select id=\"verbSelect\" class=\"col-xs-12\" name=\"verbSelect\" [(ngModel)]=\"verbSelect\"></select>\n        </dd>\n      </dl>\n      <div id=\"buttons\">\n        <input type=\"button\" id=\"submitBtn\" name=\"submitBtn\" value=\"continue\" (click)=\"onClick()\" />\n      </div>\n    </fieldset>\n  </form>\n</section>\n");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\deryx\SpanishTutor\src\main.ts */"zUnb");


/***/ }),

/***/ "0AKt":
/*!*****************************************************************************!*\
  !*** ./src/app/components/verb-overlay-form/verb-overlay-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: VerbOverlayFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerbOverlayFormComponent", function() { return VerbOverlayFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verb_overlay_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verb-overlay-form.component.html */ "oEzV");
/* harmony import */ var _verb_overlay_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verb-overlay-form.component.css */ "zH21");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _services_verb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/verb.service */ "UZr7");






var VerbOverlayFormComponent = /** @class */ (function () {
    function VerbOverlayFormComponent(apollo, vs) {
        var _this = this;
        this.apollo = apollo;
        this.vs = vs;
        this.isVisible = true;
        this.showRandom = false;
        this.showSingle = false;
        this.disableVerbSelect = false;
        this.formChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.getTenses = function () {
            _this.queryTenses = _this.apollo.watchQuery({
                query: _this.vs.Tenses
            })
                .valueChanges
                .subscribe(function (result) {
                var tensesData = JSON.parse(JSON.stringify(result.data));
                _this.tenses = tensesData.tenses;
                _this.setTenses();
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        };
        this.setTenses = function () {
            var tenseSelect = document.getElementById('tenseSelect');
            var firstOption = document.createElement('option');
            firstOption = document.createElement('option');
            firstOption.disabled = true;
            firstOption.selected = true;
            firstOption.innerHTML = 'SELECT A TENSE ...';
            tenseSelect.appendChild(firstOption);
            var numTenses = _this.tenses.length;
            for (var i = 0; i < numTenses; i++) {
                var tense = _this.tenses[i];
                var option = document.createElement('option');
                option.label = tense['tense'];
                option.value = tense['id'];
                tenseSelect.appendChild(option);
            }
        };
    }
    VerbOverlayFormComponent.prototype.ngOnInit = function () {
        this.getTenses();
    };
    VerbOverlayFormComponent.prototype.onClick = function () {
        var overlayData = {
            isVisible: !this.isVisible,
            numberVerbs: this.numberQuestions,
            tense: this.tenseSelect
        };
        var tenseSelected = this.tenseSelect;
        var numberQuestions = this.numberQuestions;
        if (tenseSelected && numberQuestions)
            this.formChange.emit(overlayData);
    };
    VerbOverlayFormComponent.ctorParameters = function () { return [
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"] },
        { type: _services_verb_service__WEBPACK_IMPORTED_MODULE_5__["VerbService"] }
    ]; };
    VerbOverlayFormComponent.propDecorators = {
        formChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    VerbOverlayFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-verb-overlay-form',
            template: _raw_loader_verb_overlay_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_verb_overlay_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"], _services_verb_service__WEBPACK_IMPORTED_MODULE_5__["VerbService"]])
    ], VerbOverlayFormComponent);
    return VerbOverlayFormComponent;
}());



/***/ }),

/***/ "0bzL":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/conjugator-report/conjugator-report.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"col-lg-12\">\n  <div class=\"col-lg-8 col-md-8 col-xs-12\">\n    <h2>{{ reportInfo.title }}</h2>\n    <h3>Your score: {{ reportInfo.score }}% ( {{reportInfo.correctAnswers}} / {{reportInfo.numberQuestions}} )</h3>\n    <table id=\"conjugatorReport\">\n      <thead>\n        <tr>\n          <th *ngFor=\"let heading of reportInfo.headings\">\n            {{heading}}\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let data of reportInfo.reportData\">\n          <td>\n            {{data.verb}}\n          </td>\n          <td>\n            {{data.userAnswers.yo}}\n            <br />\n            {{data.answers.yo}}\n          </td>\n          <td>\n            {{data.userAnswers.tu}}\n            <br />\n            {{data.answers.tu}}\n          </td>\n          <td>\n            {{data.userAnswers.el}}\n            <br />\n            {{data.answers.el}}\n          </td>\n          <td>\n            {{data.userAnswers.nosotros}}\n            <br />\n            {{data.answers.nosotros}}\n          </td>\n          <td>\n            {{data.userAnswers.els}}\n            <br />\n            {{data.answers.els}}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"form\">\n      <form>\n        <div id=\"buttons\" class=\"col-xs-12 buttons\">\n          <input type=\"button\" id=\"replayBtn\" value=\"replay\" (click)=\"replay()\" />\n          <input type=\"button\" id=\"quitBtn\" value=\"quit\" (click)=\"quit()\" />\n        </div>\n      </form>\n    </div>\n</div>\n</section>");

/***/ }),

/***/ "0oYm":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu.component.html */ "AabN");
/* harmony import */ var _menu_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component.css */ "P9Xw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations_slide_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../animations/slide.animation */ "UF8T");





var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.animationState = 'top';
        this.showCloseIcon = false;
        this.createLink = function (text, href) {
            var newLink = document.createElement('a');
            var linkText = document.createTextNode(text);
            newLink.setAttribute('href', href);
            newLink.appendChild(linkText);
            return newLink;
        };
        this.siteLinks = [
            { 'link': 'verb flashcard', 'ref': '/verb-flashcard' },
            { 'link': 'vocabulary flashcard', 'ref': '/vocabulary-flashcard' },
            { 'link': 'verb conjugator', 'ref': '/verb-conjugator' },
            { 'link': 'vocabulary completion', 'ref': 'vocabulary-completion' },
            { 'link': 'vocabulary quiz', 'ref': '/vocabulary-quiz' },
            { 'link': 'vocabulary scramble', 'ref': '/vocabulary-scramble' },
            { 'link': 'vocabulary slider', 'ref': '/vocabulary-slider' },
            { 'link': 'verb input', 'ref': '/verb-input' },
            { 'link': 'vocabulary input', 'ref': '/vocabulary-input' },
            { 'link': 'vocabulary fill-in', 'ref': '/vocabulary-fill-in' },
            { 'link': 'verb slider', 'ref': '/verb-slider' }
        ];
    }
    MenuComponent.prototype.toggleShowMenu = function () {
        this.animationState = this.animationState === 'top' ? 'bottom' : 'top';
        this.showCloseIcon = this.showCloseIcon === false ? true : false;
    };
    MenuComponent.ctorParameters = function () { return []; };
    MenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-menu',
            template: _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [_animations_slide_animation__WEBPACK_IMPORTED_MODULE_4__["SlideInOutAnimation"]],
            styles: [_menu_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "0z2C":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-image: url('bull-fighting.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWiwwQ0FBK0Q7RUFDL0QsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2J1bGwtZmlnaHRpbmcuanBnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "yxfS");
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.css */ "sx49");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.titleMy = 'My';
        this.titleST = 'SpanishTutor';
    }
    HeaderComponent.ctorParameters = function () { return []; };
    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-header',
            template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "46HW":
/*!*********************************************************************!*\
  !*** ./src/app/components/slider-report/slider-report.component.ts ***!
  \*********************************************************************/
/*! exports provided: SliderReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderReportComponent", function() { return SliderReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_slider_report_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./slider-report.component.html */ "ZOO+");
/* harmony import */ var _slider_report_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider-report.component.css */ "9z8T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






var SliderReportComponent = /** @class */ (function () {
    function SliderReportComponent(document, router) {
        this.document = document;
        this.router = router;
    }
    SliderReportComponent.prototype.replay = function () {
        this.document.location.reload();
    };
    SliderReportComponent.prototype.quit = function () {
        this.router.navigateByUrl('');
    };
    SliderReportComponent.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    SliderReportComponent.propDecorators = {
        reportInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    SliderReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-slider-report',
            template: _raw_loader_slider_report_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_slider_report_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SliderReportComponent);
    return SliderReportComponent;
}());



/***/ }),

/***/ "5+Ap":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vocabulary-flashcard/vocabulary-flashcard.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <h1>vocabulary flashcard</h1>\n\n  <div class=\"col-lg-5 col-md-8 col-sm-10\">\n    <form class=\"col-lg-12 col-xs-12\">\n      <fieldset class=\"col-lg-10\">\n        <div class=\"col-lg-12\">\n          <select id=\"category\" class=\"col-xs-3 col-sm-6 col-lg-6\" name=\"category\" [(ngModel)]=\"category\" (change)=\"changeCategory()\"></select>\n        </div>\n        <div class=\"col-lg-12 or\">OR</div>\n        <div class=\"col-lg-12\">\n          <input type=\"text\" name=\"searchWord\" class=\"col-xs-3 col-sm-6 col-lg-6\" id=\"searchWord\" [(ngModel)]=\"searchWord\" placeholder=\"INPUT A ENGLISH/SPANISH WORD\" />\n          <input id=\"btnSearch\" type=\"button\" class=\"button search\" value=\"search\" (click)=\"getWord()\">\n        </div>\n        <div class=\"card col-lg-12\" [@flipState]=\"flip\">\n          <div class=\"face front col-lg-12\">\n            <h2>[ {{word}} ]</h2>\n            <h3>{{pronunciation}}</h3>\n          </div>\n          <div class=\"face back col-lg-12\">\n            <h2>{{translation}}</h2>\n            <img src={{image}} *ngIf=\"showImage\"/>\n          </div>\n        </div>\n      </fieldset>\n      <div class=\"buttons\">\n        <input id=\"btnReset\" class=\"button reset\" type=\"reset\" value=\"reset\">\n        <input id=\"btnFlip\" class=\"button flip\" type=\"button\" value=\"flip card\" (click)=\"flipCard()\">\n        <input id=\"btnNext\" class=\"button next\" type=\"button\" value=\"next\" *ngIf=\"!searchWord\" (click)=\"next()\">\n      </div>\n    </form>\n  </div>\n</section>\n");

/***/ }),

/***/ "6CR1":
/*!******************************************!*\
  !*** ./src/animations/fade.animation.ts ***!
  \******************************************/
/*! exports provided: FadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FadeAnimation", function() { return FadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

var FadeAnimation = /** @class */ (function () {
    function FadeAnimation() {
    }
    FadeAnimation.getAnimations = function () {
        return [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s'))
            ]),
        ];
    };
    FadeAnimation.animations = FadeAnimation.getAnimations();
    return FadeAnimation;
}());



/***/ }),

/***/ "7/oO":
/*!****************************************************!*\
  !*** ./src/app/components/card/card.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\r\n    width: 20.0rem;\r\n    height: 18.0rem;\r\n    border: 1px solid #CCCCCC;\r\n    margin-top: 5.0rem;\r\n    background: rgb(240, 240, 240);\r\n}\r\n\r\n.card h3 {\r\n    text-align: center;\r\n    color: rgb(255, 255, 255);\r\n    text-transform: capitalize;\r\n    font-family: 'Roboto', sans-serif;\r\n    background: rgb(255, 7, 7);\r\n    padding-top: 0.625rem;\r\n    padding-bottom: 0.625rem;\r\n    margin: 0 auto;\r\n    margin-top: -1.5rem;\r\n    margin-bottom: 1.0rem;\r\n    width: 90%;\r\n    font-size: inherit;\r\n}\r\n\r\n.card .summary {\r\n    padding-left: 1.5rem;\r\n    padding-right: 1.5rem;\r\n    font-size: 1.0rem;\r\n    font-family: 'Roboto', sans-serif;\r\n    text-align: justify;\r\n    font-size: inherit;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixpQ0FBaUM7SUFDakMsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIHdpZHRoOiAyMC4wcmVtO1xyXG4gICAgaGVpZ2h0OiAxOC4wcmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcclxuICAgIG1hcmdpbi10b3A6IDUuMHJlbTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDAsIDI0MCwgMjQwKTtcclxufVxyXG5cclxuLmNhcmQgaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgNywgNyk7XHJcbiAgICBwYWRkaW5nLXRvcDogMC42MjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC42MjVyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IC0xLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjByZW07XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG4uY2FyZCAuc3VtbWFyeSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufSJdfQ== */");

/***/ }),

/***/ "7fg8":
/*!***************************************************************************!*\
  !*** ./src/app/components/vocabulary-input/vocabulary-input.component.ts ***!
  \***************************************************************************/
/*! exports provided: VocabularyInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VocabularyInputComponent", function() { return VocabularyInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vocabulary_input_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vocabulary-input.component.html */ "HJVP");
/* harmony import */ var _vocabulary_input_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vocabulary-input.component.css */ "daRE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_vocabulary_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/vocabulary-categories.service */ "JLPh");
/* harmony import */ var _services_vocabulary_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/vocabulary.service */ "N+FS");
/* harmony import */ var _vocabulary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../vocabulary */ "IkK/");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-angular */ "/IUn");








var VocabularyInputComponent = /** @class */ (function () {
    function VocabularyInputComponent(vs, vcs, apollo) {
        var _this = this;
        this.vs = vs;
        this.vcs = vcs;
        this.apollo = apollo;
        this.vocabulary = new _vocabulary__WEBPACK_IMPORTED_MODULE_6__["Vocabulary"]();
        this.retrieveCategories = function () {
            _this.queryCategories = _this.apollo.watchQuery({
                query: _this.vcs.Categories
            }).valueChanges
                .subscribe(function (result) {
                var categoryData = JSON.parse(JSON.stringify(result.data));
                _this.categories = categoryData.categories.sort(function (a, b) {
                    var wordA = a.category;
                    var wordB = b.category;
                    var comparison = 0;
                    if (wordA > wordB) {
                        comparison = 1;
                    }
                    else if (wordA < wordB) {
                        comparison = -1;
                    }
                    return comparison;
                });
                _this.setCategories();
            });
        };
        this.setCategories = function () {
            var categorySelect = document.getElementById('category');
            var firstOption = document.createElement('option');
            firstOption.disabled = true;
            firstOption.selected = true;
            firstOption.label = 'SELECT A CATEGORY';
            categorySelect.appendChild(firstOption);
            for (var i = 0; i < _this.categories.length; i++) {
                var category = _this.categories[i];
                var option = document.createElement('option');
                option.style.textTransform = "Capitalize";
                option.label = category['category'];
                option.value = category['id'];
                categorySelect.appendChild(option);
            }
        };
        this.addWord = function (word) {
            _this.apollo.mutate({
                mutation: _this.vs.CreateWord,
                variables: {
                    word: word.word,
                    translation: word.translation,
                    pronunciation: word.pronunciation,
                    category: word.category,
                    gender: word.gender,
                    image: word.image
                }
            }).subscribe(function (data) {
                console.log(data);
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        };
    }
    VocabularyInputComponent.prototype.ngOnInit = function () {
        this.retrieveCategories();
    };
    VocabularyInputComponent.prototype.placeAccent = function (event) {
        var inputBox = document.getElementById('word');
        this.accent = event;
        var currentPosition = inputBox.selectionStart;
        var originalValue = this.word;
        var newValue = originalValue.substring(0, currentPosition) + this.accent + originalValue.substring(currentPosition);
        this.word = newValue;
    };
    VocabularyInputComponent.prototype.resetForm = function () {
        this.category = '';
        this.word = '';
        this.translation = '';
        this.gender = '';
        this.image = '';
        this.pronunciation = '';
    };
    VocabularyInputComponent.prototype.onSubmit = function () {
        this.vocabulary.setCategory(parseInt(this.category));
        this.vocabulary.setWord(this.word);
        this.vocabulary.setTranslation(this.translation);
        this.vocabulary.setGender(this.gender);
        var image = this.image.match(/fakepath\\(.*)/);
        var folder = 'assets/images/';
        image =  false || folder + image[1];
        this.vocabulary.setImage(image);
        this.vocabulary.setPronunciation(this.pronunciation);
        this.addWord(this.vocabulary);
        this.resetForm();
    };
    VocabularyInputComponent.ctorParameters = function () { return [
        { type: _services_vocabulary_service__WEBPACK_IMPORTED_MODULE_5__["VocabularyService"] },
        { type: _services_vocabulary_categories_service__WEBPACK_IMPORTED_MODULE_4__["VocabularyCategoriesService"] },
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"] }
    ]; };
    VocabularyInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-vocabulary-input',
            template: _raw_loader_vocabulary_input_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_vocabulary_input_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vocabulary_service__WEBPACK_IMPORTED_MODULE_5__["VocabularyService"], _services_vocabulary_categories_service__WEBPACK_IMPORTED_MODULE_4__["VocabularyCategoriesService"], apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"]])
    ], VocabularyInputComponent);
    return VocabularyInputComponent;
}());



/***/ }),

/***/ "7l9Q":
/*!******************************************************************************!*\
  !*** ./src/app/components/conjugator-report/conjugator-report.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 97;\r\n    position: absolute;\r\n}\r\n\r\nsection > div {\r\n    margin: 0 auto;\r\n    padding: 1.8rem;\r\n    z-index: 98;\r\n    position: absolute;\r\n    background: rgb(255, 255, 255);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    border-radius: 0.75rem;\r\n}\r\n\r\ndiv h2, h3 {\r\n    text-align: center;\r\n}\r\n\r\nh3 {\r\n    margin-bottom: 2.0rem;\r\n}\r\n\r\ntable {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    background: rgb(255, 255, 255);\r\n}\r\n\r\ntable tr {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    border-bottom: 1px solid rgb(0, 0, 0);\r\n}\r\n\r\ntable tr th {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    flex-grow: 1;\r\n    width: 16%;\r\n}\r\n\r\ntable tr td {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    flex-grow: 1;\r\n    width: 16%;\r\n}\r\n\r\ntable tbody tr td:first-child {\r\n    align-items: center;\r\n}\r\n\r\n.form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\nform {\r\n    margin: 0;\r\n    width: 100%;\r\n}\r\n\r\n.buttons {\r\n    margin-top: 50px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\n.buttons input {\r\n    margin-right: 0.15rem;\r\n    margin-left:  0.15rem;\r\n    padding: 0.625rem;\r\n    border: none;\r\n    text-transform: uppercase;\r\n    color: rgb(255, 255, 255);\r\n    font-weight: bold;\r\n    font-size: 0.75em;\r\n    font-family: \"Roboto\", sans-serif;\r\n    border-radius: 5px;\r\n    font-size: 100%;\r\n}\r\n\r\n#replayBtn {\r\n    background: rgb(52, 58, 64);\r\n}\r\n\r\n#quitBtn {\r\n    background: rgb(220, 53, 69);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25qdWdhdG9yLXJlcG9ydC9jb25qdWdhdG9yLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb25qdWdhdG9yLXJlcG9ydC9jb25qdWdhdG9yLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG5zZWN0aW9uID4gZGl2IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMS44cmVtO1xyXG4gICAgei1pbmRleDogOTg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcclxufVxyXG5cclxuZGl2IGgyLCBoMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuMHJlbTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxudGFibGUgdHIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XHJcbn1cclxuXHJcbnRhYmxlIHRyIHRoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB3aWR0aDogMTYlO1xyXG59XHJcblxyXG50YWJsZSB0ciB0ZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgd2lkdGg6IDE2JTtcclxufVxyXG5cclxudGFibGUgdGJvZHkgdHIgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4gIFxyXG4uYnV0dG9ucyBpbnB1dCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMTVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogIDAuMTVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjYyNXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG59XHJcbiAgXHJcbiNyZXBsYXlCdG4ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDUyLCA1OCwgNjQpO1xyXG59XHJcbiAgXHJcbiNxdWl0QnRuIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMjAsIDUzLCA2OSk7XHJcbn0iXX0= */");

/***/ }),

/***/ "9H/r":
/*!**************************************************************************************!*\
  !*** ./src/app/components/vocabulary-completion/vocabulary-completion.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Roboto', sans-serif;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n  \r\nsection h1 {\r\n    margin-top: 8.0rem;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    padding-bottom: 50px;\r\n    font-family: \"Open Sans\", serif;\r\n    text-transform: capitalize;\r\n    font-weight: normal;\r\n    font-size: 175%;\r\n}\r\n  \r\nform {\r\n    margin-top: 5rem;\r\n    margin: 0 auto;\r\n}\r\n  \r\nfieldset {\r\n    border: none;\r\n    font-family: \"Roboto\", sans-serif;\r\n    margin: 0 auto;\r\n    word-wrap: break-word;\r\n    border-top: 1px solid rgb(198, 10, 30);\r\n    border-bottom: 1px solid rgb(198, 10, 30);\r\n    padding-top: 2.5rem;\r\n    padding-bottom: 2.5rem;\r\n}\r\n  \r\nfieldset h2 {\r\n    text-align: center;\r\n    margin: 0;\r\n    margin-bottom: 1.5rem;\r\n    padding: 0;\r\n    text-transform: uppercase;\r\n    color:  rgb(198, 10, 30);\r\n}\r\n  \r\nfieldset div {\r\n    margin-top: 1.75rem;\r\n    margin-bottom: 1.75rem;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n  \r\nimg {\r\n    width: 40%;\r\n    height: 40%;\r\n}\r\n  \r\nul {\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    justify-content: center;\r\n}\r\n  \r\nul li {\r\n    margin: 15px;\r\n    list-style: none;\r\n    width: 20px;\r\n    height: 20px;\r\n    text-align: center;\r\n}\r\n  \r\nul li:first-child {\r\n    margin-left: 0;\r\n}\r\n  \r\nli h3 {\r\n    text-transform: uppercase;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n  \r\n.buttons {\r\n    margin-top: 50px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n  \r\n.buttons input {\r\n    margin-right: 0.15rem;\r\n    margin-left:  0.15rem;\r\n    padding: 0.625rem;\r\n    width: 100px;\r\n    border: none;\r\n    text-transform: uppercase;\r\n    color: rgb(255, 255, 255);\r\n    font-weight: bold;\r\n    font-size: 0.75em;\r\n    font-family: \"Roboto\", sans-serif;\r\n    border-radius: 5px;\r\n    font-size: 100%;\r\n}\r\n  \r\n#answerBtn {\r\n    margin-left: 30px;\r\n    background: rgb(40, 167, 69);\r\n}\r\n  \r\n#resetBtn {\r\n    background: rgb(52, 58, 64);\r\n}\r\n  \r\n#quitBtn {\r\n    background: rgb(220, 53, 69);\r\n}\r\n  \r\n#accentBtn {\r\n    background: rgb(23, 162, 184);\r\n    color: rgb(255, 255, 255);\r\n    width: 125px;\r\n    margin-top: -3.5em;\r\n  }\r\n  \r\ninput[type='text'] {\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    width: 2.0rem;\r\n    height: 2.0rem;\r\n    font-size: 1.0rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92b2NhYnVsYXJ5LWNvbXBsZXRpb24vdm9jYWJ1bGFyeS1jb21wbGV0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHNDQUFzQztJQUN0Qyx5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZvY2FidWxhcnktY29tcGxldGlvbi92b2NhYnVsYXJ5LWNvbXBsZXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiAgXHJcbnNlY3Rpb24gaDEge1xyXG4gICAgbWFyZ2luLXRvcDogOC4wcmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNzUlO1xyXG59XHJcbiAgXHJcbmZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbiAgXHJcbmZpZWxkc2V0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDE5OCwgMTAsIDMwKTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTk4LCAxMCwgMzApO1xyXG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XHJcbn1cclxuXHJcbmZpZWxkc2V0IGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICByZ2IoMTk4LCAxMCwgMzApO1xyXG59XHJcblxyXG5maWVsZHNldCBkaXYge1xyXG4gICAgbWFyZ2luLXRvcDogMS43NXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogNDAlO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG51bCBsaSB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnVsIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG5saSBoMyB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4gIFxyXG4uYnV0dG9ucyBpbnB1dCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMTVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogIDAuMTVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjYyNXJlbTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG59XHJcbiAgXHJcbiNhbnN3ZXJCdG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDAsIDE2NywgNjkpO1xyXG59XHJcbiAgXHJcbiNyZXNldEJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTIsIDU4LCA2NCk7XHJcbn1cclxuICBcclxuI3F1aXRCdG4ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIyMCwgNTMsIDY5KTtcclxufVxyXG5cclxuI2FjY2VudEJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMsIDE2MiwgMTg0KTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB3aWR0aDogMTI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMy41ZW07XHJcbiAgfVxyXG4gIFxyXG5pbnB1dFt0eXBlPSd0ZXh0J10ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyLjByZW07XHJcbiAgICBoZWlnaHQ6IDIuMHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG59Il19 */");

/***/ }),

/***/ "9z8T":
/*!**********************************************************************!*\
  !*** ./src/app/components/slider-report/slider-report.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 97;\r\n    position: absolute;\r\n  }\r\n\r\nsection > div {\r\n    margin: 0 auto;\r\n    padding: 1.8rem;\r\n    z-index: 98;\r\n    position: absolute;\r\n    background: rgb(255, 255, 255);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    border-radius: 0.75rem;\r\n}\r\n\r\nh2, h3 {\r\n    text-align: center;\r\n}\r\n\r\ndiv div {\r\n    text-align: center;\r\n}\r\n\r\n.header {\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    margin-top: 1.8rem;\r\n    margin-bottom: 0.5rem;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\n.row {\r\n    margin-bottom: 1.2rem;\r\n    padding-top: 0.625rem;\r\n    padding-bottom: 0.625rem;\r\n    border-bottom: 1px solid rgb(0, 0, 0);\r\n}\r\n\r\n.buttons {\r\n    margin-top: 50px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\n.buttons input {\r\n    margin-right: 0.15rem;\r\n    margin-left:  0.15rem;\r\n    padding: 0.625rem;\r\n    border: none;\r\n    text-transform: uppercase;\r\n    color: rgb(255, 255, 255);\r\n    font-weight: bold;\r\n    font-size: 0.75em;\r\n    font-family: \"Roboto\", sans-serif;\r\n    border-radius: 5px;\r\n    font-size: 100%;\r\n}\r\n\r\n#replayBtn {\r\n    background: rgb(52, 58, 64);\r\n}\r\n\r\n#quitBtn {\r\n    background: rgb(220, 53, 69);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXItcmVwb3J0L3NsaWRlci1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXItcmVwb3J0L3NsaWRlci1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5NztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcblxyXG5zZWN0aW9uID4gZGl2IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMS44cmVtO1xyXG4gICAgei1pbmRleDogOTg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcclxufVxyXG5cclxuaDIsIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZGl2IGRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLXRvcDogMS44cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMC42MjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC42MjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiAgXHJcbi5idXR0b25zIGlucHV0IHtcclxuICAgIG1hcmdpbi1yaWdodDogMC4xNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAgMC4xNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNjI1cmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbn1cclxuICBcclxuI3JlcGxheUJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTIsIDU4LCA2NCk7XHJcbn1cclxuICBcclxuI3F1aXRCdG4ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIyMCwgNTMsIDY5KTtcclxufSJdfQ== */");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body {\r\n    font-size: 100%;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5IHtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxufVxyXG4gICJdfQ== */");

/***/ }),

/***/ "AFGH":
/*!******************************************************************!*\
  !*** ./src/app/components/verb-slider/verb-slider.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    font-family: 'Roboto', sans-serif;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n  \r\nsection h1 {\r\n    margin-top: 8.0rem;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    padding-bottom: 50px;\r\n    font-family: \"Open Sans\", serif;\r\n    text-transform: capitalize;\r\n    font-weight: normal;\r\n    font-size: 175%;\r\n}\r\n  \r\nform {\r\n    margin: 0 auto;\r\n    padding: 1.5rem 0;\r\n    border: none;\r\n    font-family: \"Roboto\", sans-serif;\r\n}\r\n  \r\nfieldset {\r\n    margin: 0 auto;\r\n    border: none;\r\n    width: 100%;\r\n    border-top: 1px solid rgb(198, 10, 30);\r\n    border-bottom: 1px solid rgb(198, 10, 30);\r\n    padding-top: 2.5rem;\r\n    padding-bottom: 2.5rem;\r\n}\r\n  \r\nfieldset h2 {\r\n    color: rgb(198, 10, 30);\r\n    text-align: center;\r\n    margin-bottom: 2.0rem;\r\n}\r\n  \r\n.static-container, .slide-list {\r\n    display: inline-block;\r\n    width: 50%;\r\n    max-width: 50%;\r\n    min-height: 60px;\r\n    overflow: hidden;\r\n}\r\n  \r\n.static-tile, .slide-box {\r\n    padding: 0.5rem;\r\n    background: rgba(6, 75, 202, 0.75);\r\n    color: rgb(255, 255, 255);\r\n    border-bottom: 1px solid #CCC;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    box-sizing: border-box;\r\n    font-size: 125%;\r\n}\r\n  \r\n.slide-box {\r\n    cursor: move;\r\n}\r\n  \r\n.static-tile {\r\n    background: rgb(0, 0, 0);\r\n    color: rgb(255, 255, 255);\r\n}\r\n  \r\n.slide-box:last-child {\r\n    border-bottom: none;\r\n}\r\n  \r\n.cdk-drag-preview {\r\n    box-sizing: border-box;\r\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n  }\r\n  \r\n.cdk-drag-placeholder {\r\n    opacity: 0;\r\n  }\r\n  \r\n.cdk-drag-animating {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n  \r\n.slide-list.cdk-drop-list-dragging .slide-box:not(.cdk-drag-placeholder) {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n  \r\n#buttons {\r\n    margin: 1.75rem 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n  \r\n#buttons input {\r\n    margin-right: 0.15rem;\r\n    margin-left:  0.15rem;\r\n    padding: 0.75rem;\r\n    width: 100px;\r\n    border: none;\r\n    text-transform: uppercase;\r\n    color: rgb(255, 255, 255);\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    font-family: \"Roboto\", sans-serif;\r\n    border-radius: 5px;\r\n    font-size: 100%;\r\n}\r\n  \r\n#answerBtn {\r\n    margin-left: 30px;\r\n    background: rgb(40, 167, 69);\r\n}\r\n  \r\n#resetBtn {\r\n    background: rgb(52, 58, 64);\r\n}\r\n  \r\n#quitBtn {\r\n    background: rgb(198, 10, 30);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZXJiLXNsaWRlci92ZXJiLXNsaWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLHNDQUFzQztJQUN0Qyx5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCOztrREFFOEM7RUFDaEQ7O0FBRUE7SUFDRSxVQUFVO0VBQ1o7O0FBRUE7SUFDRSxzREFBc0Q7RUFDeEQ7O0FBRUE7SUFDRSxzREFBc0Q7RUFDeEQ7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZlcmItc2xpZGVyL3ZlcmItc2xpZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiAgXHJcbnNlY3Rpb24gaDEge1xyXG4gICAgbWFyZ2luLXRvcDogOC4wcmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNzUlO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMS41cmVtIDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxufVxyXG4gIFxyXG5maWVsZHNldCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxOTgsIDEwLCAzMCk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE5OCwgMTAsIDMwKTtcclxuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xyXG59XHJcblxyXG5maWVsZHNldCBoMiB7XHJcbiAgICBjb2xvcjogcmdiKDE5OCwgMTAsIDMwKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuMHJlbTtcclxufVxyXG5cclxuLnN0YXRpYy1jb250YWluZXIsIC5zbGlkZS1saXN0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc3RhdGljLXRpbGUsIC5zbGlkZS1ib3gge1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg2LCA3NSwgMjAyLCAwLjc1KTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiAxMjUlO1xyXG59XHJcblxyXG4uc2xpZGUtYm94IHtcclxuICAgIGN1cnNvcjogbW92ZTtcclxufVxyXG5cclxuLnN0YXRpYy10aWxlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi5zbGlkZS1ib3g6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxuICAuY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuc2xpZGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9XHJcblxyXG4jYnV0dG9ucyB7XHJcbiAgICBtYXJnaW46IDEuNzVyZW0gMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuICBcclxuI2J1dHRvbnMgaW5wdXQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjE1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6ICAwLjE1cmVtO1xyXG4gICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbn1cclxuICBcclxuI2Fuc3dlckJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYig0MCwgMTY3LCA2OSk7XHJcbn1cclxuICBcclxuI3Jlc2V0QnRuIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1MiwgNTgsIDY0KTtcclxufVxyXG4gIFxyXG4jcXVpdEJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk4LCAxMCwgMzApO1xyXG59Il19 */");

/***/ }),

/***/ "AabN":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\r\n  <ul id=\"menu\">\r\n    <li>\r\n      <a (click)=\"toggleShowMenu()\">\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n      </a>\r\n      <span class=\"closeIcon\" *ngIf=\"showCloseIcon\" (click)=\"toggleShowMenu()\"></span>\r\n      <ul id=\"subMenu\" [@slideInOut]=\"animationState\">\r\n        <!-- <li><a routerLink=\"/letter-pronunciation\" routerLinkActive=\"active\">letter pronunciation</a></li> -->\r\n        <li>\r\n          <span class=\"heading\">verbs</span>\r\n          <ul>\r\n            <li><a routerLink=\"/verb-input\" routerLinkActive=\"active\">input</a></li>\r\n            <li><a routerLink=\"/verb-flashcard\" routerLinkActive=\"active\">flashcard</a></li>\r\n            <li><a routerLink=\"/verb-conjugator\" routerLinkActive=\"active\">conjugator</a></li>\r\n            <li><a routerLink=\"/verb-slider\" routerLinkActive=\"active\">slider</a></li>\r\n          </ul>\r\n        </li>\r\n        <li>\r\n          <span class=\"heading\">vocabulary</span>\r\n          <ul>\r\n            <li><a routerLink=\"/vocabulary-input\" routerLinkActive=\"active\">input</a></li>\r\n            <li><a routerLink=\"/vocabulary-flashcard\" routerLinkActive=\"active\">flashcard</a></li>\r\n            <li><a routerLink=\"/vocabulary-completion\" routerLinkActive=\"active\">completion</a></li>\r\n            <li><a routerLink=\"/vocabulary-fill-in\" routerLinkActive=\"active\">fill-in</a></li>\r\n            <li><a routerLink=\"/vocabulary-quiz\" routerLinkActive=\"active\">quiz</a></li>\r\n            <li><a routerLink=\"/vocabulary-scramble\" routerLinkActive=\"active\">scramble</a></li>\r\n            <li><a routerLink=\"/vocabulary-slider\" routerLinkActive=\"active\">slider</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n  </ul>\r\n</nav>");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "BU0i":
/*!**********************************************************************************!*\
  !*** ./src/app/components/vocabulary-scramble/vocabulary-scramble.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Roboto', sans-serif;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n  \r\nsection h1 {\r\n    margin-top: 8.0rem;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    font-family: \"Open Sans\", serif;\r\n    text-transform: capitalize;\r\n    font-weight: normal;\r\n    font-size: 175%;\r\n}\r\n  \r\nform {\r\n    margin-top: 5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    font-family: \"Roboto\", sans-serif;\r\n}\r\n  \r\nfieldset {\r\n    border: none;\r\n    margin: 0 auto;\r\n    border-top: 1px solid rgb(198, 10, 30);\r\n    border-bottom: 1px solid rgb(198, 10, 30);\r\n    padding-top: 2.5rem;\r\n    padding-bottom: 2.5rem;\r\n  }\r\n  \r\nfieldset h2 {\r\n    text-align: center;\r\n    margin: 0;\r\n    margin-top: 1.0rem;\r\n    margin-bottom: 2.0rem;\r\n    padding: 0;\r\n    color:rgb(198, 10, 30);\r\n}\r\n  \r\n.tile-list {\r\n    width: 100%;\r\n    margin-top: 0.5rem;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    padding-bottom: 0.5rem;\r\n  }\r\n  \r\n.letter-box {\r\n    padding: 0.5rem 1.0rem;\r\n    color: rgb(255, 255, 255);\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    box-sizing: border-box;\r\n    border-right: solid 1px #ccc;\r\n    cursor: move;\r\n    background: rgba(6, 75, 202, 0.75);\r\n    font-size: 125%;\r\n}\r\n  \r\n.letter-tile {\r\n    border-right: none;\r\n}\r\n  \r\n.cdk-drag-preview {\r\n    box-sizing: border-box;\r\n}\r\n  \r\n.cdk-drag-placeholder {\r\n    opacity: 0;\r\n}\r\n  \r\n.cdk-drag-animating {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n  \r\n.tile-list.cdk-drop-list-dragging .letter-box:not(.cdk-drag-placeholder) {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n  \r\n#buttons {\r\n    margin-top: 25px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n  \r\n#buttons input {\r\n    margin-right: 0.15rem;\r\n    margin-left:  0.15rem;\r\n    padding: 0.75rem;\r\n    border: none;\r\n    text-transform: uppercase;\r\n    color: rgb(255, 255, 255);\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    font-family: \"Roboto\", sans-serif;\r\n    border-radius: 5px;\r\n    font-size: 100%;\r\n  }\r\n  \r\n#answerBtn {\r\n    margin-left: 30px;\r\n    background: rgb(40, 167, 69);\r\n}\r\n  \r\n#resetBtn {\r\n    background: rgb(52, 58, 64);\r\n}\r\n  \r\n#quitBtn {\r\n    background:rgb(198, 10, 30);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92b2NhYnVsYXJ5LXNjcmFtYmxlL3ZvY2FidWxhcnktc2NyYW1ibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHNDQUFzQztJQUN0Qyx5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4Qjs7QUFFRjtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsc0JBQXNCO0VBQ3hCOztBQUVGO0lBQ0ksc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92b2NhYnVsYXJ5LXNjcmFtYmxlL3ZvY2FidWxhcnktc2NyYW1ibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4gIFxyXG5zZWN0aW9uIGgxIHtcclxuICAgIG1hcmdpbi10b3A6IDguMHJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE3NSU7XHJcbn1cclxuICBcclxuZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcbiAgXHJcbmZpZWxkc2V0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxOTgsIDEwLCAzMCk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE5OCwgMTAsIDMwKTtcclxuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xyXG4gIH1cclxuXHJcbmZpZWxkc2V0IGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IDEuMHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuMHJlbTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjb2xvcjpyZ2IoMTk4LCAxMCwgMzApO1xyXG59XHJcblxyXG4udGlsZS1saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxuXHJcbi5sZXR0ZXItYm94IHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjByZW07XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2NjYztcclxuICAgIGN1cnNvcjogbW92ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNiwgNzUsIDIwMiwgMC43NSk7XHJcbiAgICBmb250LXNpemU6IDEyNSU7XHJcbn1cclxuXHJcbi5sZXR0ZXItdGlsZSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuICBcclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4udGlsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmxldHRlci1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4jYnV0dG9ucyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiAgXHJcbiNidXR0b25zIGlucHV0IHtcclxuICAgIG1hcmdpbi1yaWdodDogMC4xNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAgMC4xNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gIH1cclxuICBcclxuI2Fuc3dlckJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYig0MCwgMTY3LCA2OSk7XHJcbn1cclxuICBcclxuI3Jlc2V0QnRuIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1MiwgNTgsIDY0KTtcclxufVxyXG4gIFxyXG4jcXVpdEJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYigxOTgsIDEwLCAzMCk7XHJcbn0iXX0= */");

/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "tXZI");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "0z2C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.pronunciationCard = {
            image: '../../../assets/images/home/letter-pronunciation.png',
            header: 'letter pronunciation',
            summary: ''
        };
        this.verbFlashcardCard = {
            image: '../../../assets/images/home/verb-flashcard.png',
            header: 'verb flashcard',
            summary: 'Before you dive into the Verb Conjugator, study over 100 most commonly used spanish verbs with the Verb Flashcard.'
        };
        this.vocabularyFlashcardCard = {
            image: '../../../assets/images/home/vocabulary-flashcard.png',
            header: 'vocabulary flashcard',
            summary: 'Want to study spanish vocabulary before you take the Vocabulary Quiz or play the Vocabulary Slider, Vocabulary Scramble or Vocabulary Completion games? Study up with the Vocabulary Flashcard'
        };
        this.verbConjugatorCard = {
            image: '../../../assets/images/home/verb-conjugator.png',
            header: 'verb conjugator',
            summary: 'Studied the most commonly used spanish verbs with the Verb Flashcard and want to test your skills? Well, test your skills with the Verb Conjugator!'
        };
        this.vocabularyCompletionCard = {
            image: '../../../assets/images/home/vocabulary-completion.png',
            header: 'vocabulary Completion',
            summary: 'Vocabulary Scramble too easy because all of the letters are there? Try your luck with Vocabulary Completion!'
        };
        this.vocabularyQuizCard = {
            image: '../../../assets/images/home/vocabulary-quiz.png',
            header: 'vocabulary quiz',
            summary: 'Studied the Vocabulary Flashcards and want to perform a standard test of your spanish vocabulary skills? Go to the Vocabulary Quiz!'
        };
        this.vocabularyScrambleCard = {
            image: '../../../assets/images/home/vocabulary-scramble.png',
            header: 'vocabulary scramble',
            summary: 'Think you have a handle on your spanish vocabulary and want to test your ability to spell the words? Then try the Vocabulary Scramble!'
        };
        this.vocabularySliderCard = {
            image: '../../../assets/images/home/vocabulary-slider.png',
            header: 'vocabulary slider',
            summary: 'Want to test your knowledge of spanish vocabulary by matching spanish words with their corresponding translation? Then play with the Vocabulary Slider.'
        };
    }
    HomeComponent.ctorParameters = function () { return []; };
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "DTc3":
/*!**************************************************************************!*\
  !*** ./src/app/components/spanish-accents/spanish-accents.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\r\n    margin-top: 1.2rem;\r\n}\r\n\r\nfieldset {\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    text-align: center;\r\n}\r\n\r\nfieldset div {\r\n    display: inline-block;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\ndiv button {\r\n    background: rgb(0, 123, 255);\r\n    color: rgb(255, 255, 255);\r\n    border: none;\r\n    border-radius: 0.25rem;\r\n    min-width: 2.5rem;\r\n    min-height: 2.5rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcGFuaXNoLWFjY2VudHMvc3BhbmlzaC1hY2NlbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NwYW5pc2gtYWNjZW50cy9zcGFuaXNoLWFjY2VudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogMS4ycmVtO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZpZWxkc2V0IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZGl2IGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTIzLCAyNTUpO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICBtaW4td2lkdGg6IDIuNXJlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDIuNXJlbTtcclxufSJdfQ== */");

/***/ }),

/***/ "DjCE":
/*!****************************************************************!*\
  !*** ./src/app/components/verb-input/verb-input.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Roboto', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nsection h1 {\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  margin-top: 8.0rem;\r\n  padding-bottom: 50px;\r\n  font-family: \"Open Sans\", serif;\r\n  text-transform: capitalize;\r\n  font-weight: normal;\r\n  font-size: 175%;\r\n}\r\n\r\nsection h4 {\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  background: rgb(198, 10, 30);\r\n  color: rgb(255, 196, 0);\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  padding: 10px 0;\r\n  letter-spacing: 2px;\r\n  width: 105%;\r\n  font-size: 100%;\r\n}\r\n\r\nsection form {\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nfieldset {\r\n  border: 10px solid rgb(198, 10, 30);\r\n  background:  rgb(255, 196, 0);\r\n  border-radius: 2.0rem;\r\n  margin: 0 auto;\r\n}\r\n\r\nsection div {\r\n  margin: 30px 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n}\r\n\r\ndl {\r\n  padding: 1.0rem 0;\r\n  margin: 0;\r\n  margin-top: -1px;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-top: 1px solid -;\r\n  border-bottom: 1px solid rgb(198, 10, 30);\r\n}\r\n\r\ndl:first-child, dl:nth-child(2) {\r\n  border-top: none;\r\n}\r\n\r\ndl:last-child, dl:nth-child(2) {\r\n  border-bottom: none;\r\n}\r\n\r\ndl:nth-child(4) dt {\r\n  margin-top: 5px;\r\n}\r\n\r\ndt {\r\n  margin: 0;\r\n  margin-top: 5px;\r\n  margin-right: 1.25rem;\r\n  padding: 0;\r\n  width: 30%;\r\n  font-weight: bold;\r\n  text-transform: capitalize;\r\n  text-align: right;\r\n  justify-content: flex-end;\r\n  font-size: 125%;\r\n}\r\n\r\ndd {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 70%;\r\n}\r\n\r\ndd input {\r\n  margin: 0;\r\n  padding: 8px;\r\n  border-radius: 0.8rem;\r\n  border: 2px solid #CCC;\r\n}\r\n\r\ndl:nth-of-type(3) dt {\r\n  margin-top: -1px;\r\n}\r\n\r\ninput[type=\"button\"], input[type=\"submit\"] {\r\n  border: none;\r\n  padding: 0.5rem 1.0rem;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  font-family: 'Roboto', sans-serif;\r\n  letter-spacing: 0.09rem;\r\n  border-radius: 0.0625rem;\r\n}\r\n\r\n#nextBtn {\r\n  background: rgb(0, 123, 255);\r\n  color: rgb(255, 255, 255);\r\n}\r\n\r\n#submitBtn {\r\n  background: rgb(40, 167, 69);\r\n  color: rgb(255, 255, 255);\r\n  border: none;\r\n}\r\n\r\n#accentBtn {\r\n  background: rgb(23, 162, 184);\r\n  color: rgb(255, 255, 255);\r\n  width: 135px;\r\n  margin-top: -1.5em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZXJiLWlucHV0L3ZlcmItaW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsK0JBQStCO0VBQy9CLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVyYi1pbnB1dC92ZXJiLWlucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5zZWN0aW9uIGgxIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA4LjByZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNlcmlmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNzUlO1xyXG59XHJcblxyXG5zZWN0aW9uIGg0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTk4LCAxMCwgMzApO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAxOTYsIDApO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB3aWR0aDogMTA1JTtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbn1cclxuXHJcbnNlY3Rpb24gZm9ybSB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYigxOTgsIDEwLCAzMCk7XHJcbiAgYmFja2dyb3VuZDogIHJnYigyNTUsIDE5NiwgMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMi4wcmVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5zZWN0aW9uIGRpdiB7XHJcbiAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmRsIHtcclxuICBwYWRkaW5nOiAxLjByZW0gMDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLXRvcDogLTFweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIC07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxOTgsIDEwLCAzMCk7XHJcbn1cclxuXHJcbmRsOmZpcnN0LWNoaWxkLCBkbDpudGgtY2hpbGQoMikge1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuXHJcbmRsOmxhc3QtY2hpbGQsIGRsOm50aC1jaGlsZCgyKSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuZGw6bnRoLWNoaWxkKDQpIGR0IHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbmR0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMS4yNXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBmb250LXNpemU6IDEyNSU7XHJcbn1cclxuXHJcbmRkIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG5kZCBpbnB1dCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgI0NDQztcclxufVxyXG5cclxuZGw6bnRoLW9mLXR5cGUoMykgZHQge1xyXG4gIG1hcmdpbi10b3A6IC0xcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMS4wcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA5cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMDYyNXJlbTtcclxufVxyXG5cclxuI25leHRCdG4ge1xyXG4gIGJhY2tncm91bmQ6IHJnYigwLCAxMjMsIDI1NSk7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuI3N1Ym1pdEJ0biB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDQwLCAxNjcsIDY5KTtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuI2FjY2VudEJ0biB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIzLCAxNjIsIDE4NCk7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB3aWR0aDogMTM1cHg7XHJcbiAgbWFyZ2luLXRvcDogLTEuNWVtO1xyXG59Il19 */");

/***/ }),

/***/ "DlzV":
/*!*****************************************************************!*\
  !*** ./src/app/components/verb-slider/verb-slider.component.ts ***!
  \*****************************************************************/
/*! exports provided: VerbSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerbSliderComponent", function() { return VerbSliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verb_slider_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verb-slider.component.html */ "JdvD");
/* harmony import */ var _verb_slider_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verb-slider.component.css */ "AFGH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_verb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/verb.service */ "UZr7");
/* harmony import */ var _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/random-number-generator.service */ "W26Q");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-angular */ "/IUn");









var VerbSliderComponent = /** @class */ (function () {
    function VerbSliderComponent(vs, apollo, randomNumberService, router) {
        var _this = this;
        this.vs = vs;
        this.apollo = apollo;
        this.randomNumberService = randomNumberService;
        this.router = router;
        this.showOverlay = true;
        this.showVerbOverlay = true;
        this.showForm = false;
        this.showReport = false;
        this.currentSlideSet = 0;
        this.numberCorrect = 0;
        this.infinitive = '';
        this.questionSet = {};
        this.slideSet = [];
        this.pronounCards = [];
        this.verbSlides = [];
        this.currentAnswers = [];
        this.answers = [];
        this.report = {};
        this.responses = [];
        this.createQuestionSet = function () {
            _this.queryVerbs = _this.apollo.watchQuery({
                query: _this.vs.Verbs
            })
                .valueChanges
                .subscribe(function (result) {
                var infinitivesData = JSON.parse(JSON.stringify(result.data));
                _this.verbs = infinitivesData.verbs;
                console.log(_this.verbs);
                _this.getQuestionSet(_this.numberSlides, _this.verbs.length);
                _this.displaySlideSet(_this.currentSlideSet);
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        };
        this.getCurrentVerb = function (verb, tense) {
            _this.queryVerb = _this.apollo.watchQuery({
                query: _this.vs.Conjugation,
                variables: {
                    verb: parseInt(verb.toString()),
                    tense: parseInt(tense.toString())
                }
            })
                .valueChanges
                .subscribe(function (result) {
                var scrambledSlides = [];
                var conjugationData = JSON.parse(JSON.stringify(result.data));
                var conjugations = conjugationData.conjugation;
                _this.currentAnswers.push(conjugations[0].yo);
                _this.currentAnswers.push(conjugations[0].tu);
                _this.currentAnswers.push(conjugations[0].el);
                _this.currentAnswers.push(conjugations[0].nosotros);
                _this.currentAnswers.push(conjugations[0].els);
                _this.randomNumberService.generateRandomNumberArray(_this.currentAnswers.length, _this.currentAnswers.length, scrambledSlides);
                for (var i = 0; i < scrambledSlides.length; i++) {
                    var scrambledSlide = scrambledSlides[i];
                    _this.verbSlides.push(_this.currentAnswers[scrambledSlide]);
                }
                scrambledSlides = [];
                _this.answers.push(_this.currentAnswers);
                _this.currentAnswers = [];
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        };
    }
    VerbSliderComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["moveItemInArray"])(this.verbSlides, event.previousIndex, event.currentIndex);
    };
    VerbSliderComponent.prototype.getOverlayData = function (data) {
        if (!data.isVisible) {
            this.showOverlay = data.isVisible;
            this.showVerbOverlay = data.isVisible;
            this.showForm = true;
            this.numberSlides = data.numberVerbs;
            this.tenseSelect = data.tense;
            this.createQuestionSet();
        }
    };
    VerbSliderComponent.prototype.getQuestionSet = function (numQuestions, maxNumber) {
        var slideSet = [];
        for (var i = 0; i < numQuestions; i++) {
            this.randomNumberService.generateRandomNumberArray(numQuestions, maxNumber, slideSet);
        }
        this.questionSet = slideSet;
    };
    VerbSliderComponent.prototype.displaySlideSet = function (numberQuestion) {
        var question = this.questionSet[numberQuestion];
        this.infinitive = this.verbs[question].infinitive;
        this.getCurrentVerb(this.verbs[question].id, this.tenseSelect);
    };
    VerbSliderComponent.prototype.getNextSet = function () {
        this.verbSlides = [];
        var numberQuestions = Object.keys(this.questionSet).length;
        if (this.currentSlideSet < numberQuestions) {
            this.currentSlideSet++;
            this.displaySlideSet(this.currentSlideSet);
        }
    };
    VerbSliderComponent.prototype.getAnswer = function () {
        var responseObj = {};
        var score = 0;
        var answer = this.answers[this.currentSlideSet];
        var response = this.verbSlides;
        for (var i = 0; i < response.length; i++) {
            console.log(answer[i], response[i]);
            if (answer[i] === response[i])
                this.numberCorrect++;
        }
        var answerObject = {};
        var answers = [];
        var responses = [];
        responseObj.slideSet = this.currentSlideSet + 1;
        responseObj.answers = this.answers[this.currentSlideSet];
        responseObj.responses = response;
        this.responses.push(responseObj);
        if (this.currentSlideSet === this.numberSlides - 1) {
            this.showForm = false;
            this.showReport = true;
            this.showOverlay = true;
            score = Math.round((this.numberCorrect / (this.numberSlides * 5)) * 100);
            this.report.title = 'Verb Slider Report';
            this.report.scoreMessage = 'You scored ' + score + '%';
            this.report.headings = ['slide set', 'tile 1', 'tile 2', 'tile 3', 'tile 4', 'tile 5'];
            this.report.responses = this.responses;
        }
        else {
            this.getNextSet();
        }
    };
    VerbSliderComponent.prototype.reset = function () {
        this.numberCorrect = 0;
    };
    VerbSliderComponent.prototype.quit = function () {
        this.router.navigateByUrl('');
    };
    VerbSliderComponent.ctorParameters = function () { return [
        { type: _services_verb_service__WEBPACK_IMPORTED_MODULE_4__["VerbService"] },
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_8__["Apollo"] },
        { type: _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__["RandomNumberGeneratorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    VerbSliderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-verb-slider',
            template: _raw_loader_verb_slider_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_verb_slider_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_verb_service__WEBPACK_IMPORTED_MODULE_4__["VerbService"], apollo_angular__WEBPACK_IMPORTED_MODULE_8__["Apollo"], _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__["RandomNumberGeneratorService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], VerbSliderComponent);
    return VerbSliderComponent;
}());



/***/ }),

/***/ "GpEA":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "HJVP":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vocabulary-input/vocabulary-input.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <h1>Vocabulary Input</h1>\n  <form (ngSubmit)=\"onSubmit()\" class=\"col-lg-4 col-md-6 col-xs-12\">\n    <fieldset class=\"col-lg-10\">\n      <dl>\n        <dt class=\"select\">category:</dt>\n        <dd>\n          <select id=\"category\" required [(ngModel)]=\"category\" class=\"col-lg-12\" name=\"category\"></select>\n        </dd>\n      </dl>\n      <dl *ngIf=\"( category === 'other' )\">\n        <dt>new category:</dt>\n        <dd>\n          <input type=\"text\" id=\"newCategory\" name=\"newCategory\" class=\"col-lg-12\" [(ngModel)]=\"newCategory\" />\n        </dd>\n      </dl>\n      <dl>\n        <dt>word:</dt>\n        <dd>\n          <input type=\"text\" [(ngModel)]=\"word\" id=\"word\" class=\"col-lg-12\" name=\"word\" required />\n        </dd>\n      </dl>\n      <dl>\n        <dt>translation:</dt> \n        <dd>\n          <input type=\"text\" [(ngModel)]=\"translation\" id=\"translation\" class=\"col-lg-12\" name=\"translation\" required />\n        </dd>\n      </dl>\n      <dl>\n        <dt class=\"select\">gender:</dt>\n        <dd>\n          <input type=\"text\" required [(ngModel)]=\"gender\" id=\"gender\" class=\"col-lg-12\" name=\"gender\" />\n        </dd>\n      </dl>\n      <dl>\n        <dt>image:</dt>\n        <dd>\n          <input type=\"file\" [(ngModel)]=\"image\" id=\"image\" class=\"col-lg-12\" name=\"image\" />\n        </dd>\n      </dl>\n      <dl>\n        <dt>pronunciation:</dt>\n        <dd>\n          <input type=\"text\" [(ngModel)]=\"pronunciation\" id=\"pronunciation\" class=\"col-lg-12\" name=\"pronunciation\" />\n        </dd>\n      </dl>\n    </fieldset>\n    <app-spanish-accents (accentMessage)=\"placeAccent($event)\"></app-spanish-accents>\n    <div>\n        <input type=\"submit\" id=\"submitBtn\" value=\"ADD WORD\">\n      </div>\n    </form>\n</section>");

/***/ }),

/***/ "Ht0n":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vocabulary-slider/vocabulary-slider.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-overlay *ngIf='showOverlay'></app-overlay>\n<app-vocabulary-overlay-form (formChange)='getOverlayData($event)' *ngIf='showVocabularyOverlay'></app-vocabulary-overlay-form>\n<app-slider-report [reportInfo]=\"report\" *ngIf='showReport'></app-slider-report>\n<section>\n    <h1>vocabulary slider</h1>\n    <form *ngIf='showForm'>\n        <fieldset class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\n            <div class=\"static-container col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                <div class=\"static-tile\" *ngFor=\"let translationCard of translationCards\">\n                    {{translationCard.translation}}\n                </div>\n            </div>\n\n            <div class=\"slide-list col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                <div cdkDropList class=\"word-list\" (cdkDropListDropped)=\"drop($event)\">\n                    <div class=\"slide-box\" *ngFor=\"let wordSlide of wordSlides\" cdkDrag>\n                        {{wordSlide}}\n                    </div>\n                </div>\n            </div>\n        </fieldset>\n        <div id=\"buttons\" class=\"col-lg-12 col-xs-12\">\n            <input type=\"button\" id=\"answerBtn\" value=\"answer\" (click)=\"getAnswer()\" />\n            <input type=\"button\" id=\"resetBtn\" value=\"reset\" (click)=\"reset()\" />\n            <input type=\"button\" id=\"quitBtn\" value=\"quit\" (click)=\"quit()\" />\n        </div>\n    </form>\n</section>\n");

/***/ }),

/***/ "IcPY":
/*!*****************************************************************************!*\
  !*** ./src/app/components/vocabulary-slider/vocabulary-slider.component.ts ***!
  \*****************************************************************************/
/*! exports provided: VocabularySliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VocabularySliderComponent", function() { return VocabularySliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vocabulary_slider_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vocabulary-slider.component.html */ "Ht0n");
/* harmony import */ var _vocabulary_slider_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vocabulary-slider.component.css */ "olUV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_vocabulary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/vocabulary.service */ "N+FS");
/* harmony import */ var _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/random-number-generator.service */ "W26Q");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-angular */ "/IUn");









var VocabularySliderComponent = /** @class */ (function () {
    function VocabularySliderComponent(vs, apollo, randomNumberService, router) {
        var _this = this;
        this.vs = vs;
        this.apollo = apollo;
        this.randomNumberService = randomNumberService;
        this.router = router;
        this.showOverlay = true;
        this.showVocabularyOverlay = true;
        this.showForm = false;
        this.showReport = false;
        this.numberSlides = 0;
        this.currentSlideSet = 0;
        this.numberCorrect = 0;
        this.translation = '';
        this.image = '';
        this.word = '';
        this.questionSet = {};
        this.slideSet = [];
        this.translationCards = [];
        this.wordSlides = [];
        this.report = {};
        this.responses = [];
        this.createQuestionSet = function () {
            var numberCards = 5;
            var categoryObject = {
                query: _this.vs.Category,
                variables: {
                    category: parseInt(_this.selectedCategory)
                }
            };
            var dictionaryObject = {
                query: _this.vs.Dictionary
            };
            var queryObject = (_this.selectedCategory) ? categoryObject : dictionaryObject;
            _this.queryDictionary = _this.apollo.watchQuery(queryObject)
                .valueChanges
                .subscribe(function (result) {
                var dictionaryData = JSON.parse(JSON.stringify(result.data));
                _this.dictionary = (_this.selectedCategory) ? dictionaryData.category : dictionaryData.dictionary;
                _this.getQuestionSet(_this.numberSlides, numberCards, _this.dictionary.length);
                _this.displaySlideSet(_this.currentSlideSet);
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        };
    }
    VocabularySliderComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["moveItemInArray"])(this.wordSlides, event.previousIndex, event.currentIndex);
    };
    VocabularySliderComponent.prototype.getOverlayData = function (data) {
        if (!data.isVisible) {
            this.showOverlay = data.isVisible;
            this.showVocabularyOverlay = data.isVisible;
            this.showForm = true;
            this.selectedCategory = data.category;
            this.numberSlides = data.numberQuestions;
            this.createQuestionSet();
        }
    };
    VocabularySliderComponent.prototype.getQuestionSet = function (numQuestions, setSize, maxNumber) {
        for (var i = 0; i < numQuestions; i++) {
            var slideSet = [];
            this.randomNumberService.generateRandomNumberArray(setSize, maxNumber, slideSet);
            this.questionSet[i] = slideSet;
        }
    };
    VocabularySliderComponent.prototype.displaySlideSet = function (numberQuestion) {
        this.translationCards = this.getTranslationCards(this.questionSet[numberQuestion], this.dictionary);
        this.wordSlides = this.getWordSliders(this.questionSet[numberQuestion], this.dictionary);
    };
    VocabularySliderComponent.prototype.getTranslationCards = function (cardSet, vocabulary) {
        var cards = [];
        var _loop_1 = function (i) {
            var card = {};
            var vocabularyId = cardSet[i];
            card.translation = vocabulary[vocabularyId].translation;
            card.image = vocabulary[vocabularyId].image;
            card.answer = vocabulary[vocabularyId].word;
            (function (index) {
                cards[index] = card;
            })(i);
        };
        for (var i = 0; i < cardSet.length; i++) {
            _loop_1(i);
        }
        ;
        return cards;
    };
    VocabularySliderComponent.prototype.getWordSliders = function (cardSet, vocabulary) {
        var sliders = [];
        var words = [];
        var wordSliders = [];
        this.randomNumberService.generateRandomNumberArray(cardSet.length, cardSet.length, sliders);
        for (var i = 0; i < sliders.length; i++) {
            var sliderIndex = sliders[i];
            words[i] = cardSet[sliderIndex];
        }
        var _loop_2 = function (i) {
            var vocabularyId = words[i];
            (function (index) {
                wordSliders[index] = vocabulary[vocabularyId].word;
            })(i);
        };
        for (var i = 0; i < words.length; i++) {
            _loop_2(i);
        }
        return wordSliders;
    };
    VocabularySliderComponent.prototype.getNextSet = function () {
        var numberQuestions = Object.keys(this.questionSet).length;
        if (this.currentSlideSet < numberQuestions) {
            this.currentSlideSet++;
            this.displaySlideSet(this.currentSlideSet);
        }
    };
    VocabularySliderComponent.prototype.getAnswer = function () {
        var responseObj = {};
        var score = 0;
        var response = this.wordSlides;
        for (var i = 0; i < response.length; i++) {
            if (this.translationCards[i].answer === response[i])
                this.numberCorrect++;
        }
        var answerObject = {};
        var translations = [];
        var answers = [];
        for (var i = 0; i < this.translationCards.length; i++) {
            translations.push(this.translationCards[i].translation);
            answers.push(this.translationCards[i].answer);
        }
        responseObj.slideSet = this.currentSlideSet + 1;
        responseObj.translations = translations;
        responseObj.answers = response;
        this.responses.push(responseObj);
        if (this.currentSlideSet === this.numberSlides - 1) {
            this.showForm = false;
            this.showReport = true;
            this.showOverlay = true;
            score = Math.round((this.numberCorrect / (this.numberSlides * 5)) * 100);
            this.report.title = 'Vocabulary Slider Report';
            this.report.scoreMessage = 'You scored ' + score + '%';
            this.report.headings = ['slide set', 'tile 1', 'tile 2', 'tile 3', 'tile 4', 'tile 5'];
            this.report.responses = this.responses;
        }
        else {
            this.getNextSet();
        }
    };
    VocabularySliderComponent.prototype.reset = function () {
        this.numberCorrect = 0;
        this.wordSlides = this.getWordSliders(this.questionSet[this.currentSlideSet], this.dictionary);
    };
    VocabularySliderComponent.prototype.quit = function () {
        this.router.navigateByUrl('');
    };
    VocabularySliderComponent.ctorParameters = function () { return [
        { type: _services_vocabulary_service__WEBPACK_IMPORTED_MODULE_4__["VocabularyService"] },
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_8__["Apollo"] },
        { type: _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__["RandomNumberGeneratorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    VocabularySliderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-vocabulary-slider',
            template: _raw_loader_vocabulary_slider_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_vocabulary_slider_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vocabulary_service__WEBPACK_IMPORTED_MODULE_4__["VocabularyService"], apollo_angular__WEBPACK_IMPORTED_MODULE_8__["Apollo"], _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__["RandomNumberGeneratorService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], VocabularySliderComponent);
    return VocabularySliderComponent;
}());



/***/ }),

/***/ "IkK/":
/*!*******************************!*\
  !*** ./src/app/vocabulary.ts ***!
  \*******************************/
/*! exports provided: Vocabulary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vocabulary", function() { return Vocabulary; });
var Vocabulary = /** @class */ (function () {
    function Vocabulary() {
        this.category = 0;
        this.word = '';
        this.translation = '';
        this.gender = '';
        this.image = '';
        this.pronunciation = '';
    }
    Vocabulary.prototype.setCategory = function (category) {
        this.category = category;
    };
    Vocabulary.prototype.setWord = function (word) {
        this.word = word;
    };
    Vocabulary.prototype.setTranslation = function (translation) {
        this.translation = translation;
    };
    Vocabulary.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    Vocabulary.prototype.setImage = function (image) {
        this.image = image;
    };
    Vocabulary.prototype.setPronunciation = function (pronunciation) {
        this.pronunciation = pronunciation;
    };
    return Vocabulary;
}());



/***/ }),

/***/ "Imyx":
/*!*************************!*\
  !*** ./src/app/verb.ts ***!
  \*************************/
/*! exports provided: Verb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Verb", function() { return Verb; });
var Verb = /** @class */ (function () {
    function Verb() {
        this.infinitive = '';
        this.translation = '';
        this.pronunciation = '';
    }
    Verb.prototype.setInfinitive = function (infinitive) {
        this.infinitive = infinitive;
    };
    Verb.prototype.setTranslation = function (translation) {
        this.translation = translation;
    };
    Verb.prototype.setPronunciation = function (pronunciation) {
        this.pronunciation = pronunciation;
    };
    return Verb;
}());



/***/ }),

/***/ "IzZq":
/*!***************************************************************!*\
  !*** ./src/app/components/verb-input/verb-input.component.ts ***!
  \***************************************************************/
/*! exports provided: VerbInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerbInputComponent", function() { return VerbInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verb_input_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verb-input.component.html */ "tb/q");
/* harmony import */ var _verb_input_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verb-input.component.css */ "DjCE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_verb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/verb.service */ "UZr7");
/* harmony import */ var _verb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../verb */ "Imyx");
/* harmony import */ var _conjugation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../conjugation */ "Jh6j");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-angular */ "/IUn");








var VerbInputComponent = /** @class */ (function () {
    function VerbInputComponent(vs, apollo) {
        var _this = this;
        this.vs = vs;
        this.apollo = apollo;
        this.currentTense = 'present';
        this.infinitive = '';
        this.translation = '';
        this.pronunciation = '';
        this.presentYo = '';
        this.presentTu = '';
        this.presentEl = '';
        this.presentNosotros = '';
        this.presentEls = '';
        this.preteriteYo = '';
        this.preteriteTu = '';
        this.preteriteEl = '';
        this.preteriteNosotros = '';
        this.preteriteEls = '';
        this.imperfectYo = '';
        this.imperfectTu = '';
        this.imperfectEl = '';
        this.imperfectNosotros = '';
        this.imperfectEls = '';
        this.futureYo = '';
        this.futureTu = '';
        this.futureEl = '';
        this.futureNosotros = '';
        this.futureEls = '';
        this.conditionalYo = '';
        this.conditionalTu = '';
        this.conditionalEl = '';
        this.conditionalNosotros = '';
        this.conditionalEls = '';
        this.newVerb = new _verb__WEBPACK_IMPORTED_MODULE_5__["Verb"]();
        this.presentConjugation = new _conjugation__WEBPACK_IMPORTED_MODULE_6__["Conjugation"]();
        this.preteriteConjugation = new _conjugation__WEBPACK_IMPORTED_MODULE_6__["Conjugation"]();
        this.imperfectConjugation = new _conjugation__WEBPACK_IMPORTED_MODULE_6__["Conjugation"]();
        this.futureConjugation = new _conjugation__WEBPACK_IMPORTED_MODULE_6__["Conjugation"]();
        this.conditionalConjugation = new _conjugation__WEBPACK_IMPORTED_MODULE_6__["Conjugation"]();
        this.addVerb = function (verb) {
            _this.apollo.mutate({
                mutation: _this.vs.CreateVerb,
                variables: {
                    infinitive: verb.infinitive,
                    translation: verb.translation,
                    pronunciation: verb.pronunciation
                }
            }).subscribe(function (data) {
                console.log(data);
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        };
        this.addConjugation = function (conjugation) {
            _this.apollo.mutate({
                mutation: _this.vs.CreateConjugation,
                variables: {
                    verb: conjugation.verb,
                    tense: conjugation.tense,
                    yo: conjugation.yo,
                    tu: conjugation.tu,
                    el: conjugation.el,
                    nosotros: conjugation.nosotros,
                    els: conjugation.els
                }
            }).subscribe(function (data) {
                console.log(data);
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        };
    }
    VerbInputComponent.prototype.resetForm = function () {
        this.currentTense = 'present';
        this.infinitive = '';
        this.translation = '';
        this.pronunciation = '';
        this.presentYo = '';
        this.presentTu = '';
        this.presentEl = '';
        this.presentNosotros = '';
        this.presentEls = '';
        this.preteriteYo = '';
        this.preteriteTu = '';
        this.preteriteEl = '';
        this.preteriteNosotros = '';
        this.preteriteEls = '';
        this.imperfectYo = '';
        this.imperfectTu = '';
        this.imperfectEl = '';
        this.imperfectNosotros = '';
        this.imperfectEls = '';
        this.futureYo = '';
        this.futureTu = '';
        this.futureEl = '';
        this.futureNosotros = '';
        this.futureEls = '';
        this.conditionalYo = '';
        this.conditionalTu = '';
        this.conditionalEl = '';
        this.conditionalNosotros = '';
        this.conditionalEls = '';
    };
    VerbInputComponent.prototype.changeTense = function (tense) {
        this.currentTense = tense;
    };
    VerbInputComponent.prototype.next = function () {
        if (this.currentTense === 'present') {
            this.changeTense('preterite');
        }
        else if (this.currentTense === 'preterite') {
            this.changeTense('imperfect');
        }
        else if (this.currentTense === 'imperfect') {
            this.changeTense('future');
        }
        else if (this.currentTense === 'future') {
            this.changeTense('conditional');
        }
    };
    VerbInputComponent.prototype.onSubmit = function () {
        var _this = this;
        this.newVerb.setInfinitive(this.infinitive);
        this.newVerb.setTranslation(this.translation);
        this.newVerb.setPronunciation(this.pronunciation);
        this.presentConjugation.setTense(parseInt('1'));
        this.presentConjugation.setYo(this.presentYo);
        this.presentConjugation.setTu(this.presentTu);
        this.presentConjugation.setEl(this.presentEl);
        this.presentConjugation.setNosotros(this.presentNosotros);
        this.presentConjugation.setEls(this.presentEls);
        this.preteriteConjugation.setTense(parseInt('2'));
        this.preteriteConjugation.setYo(this.preteriteYo);
        this.preteriteConjugation.setTu(this.preteriteTu);
        this.preteriteConjugation.setEl(this.preteriteEl);
        this.preteriteConjugation.setNosotros(this.preteriteNosotros);
        this.preteriteConjugation.setEls(this.preteriteEls);
        this.imperfectConjugation.setTense(parseInt('3'));
        this.imperfectConjugation.setYo(this.imperfectYo);
        this.imperfectConjugation.setTu(this.imperfectTu);
        this.imperfectConjugation.setEl(this.imperfectEl);
        this.imperfectConjugation.setNosotros(this.imperfectNosotros);
        this.imperfectConjugation.setEls(this.imperfectEls);
        this.futureConjugation.setTense(parseInt('4'));
        this.futureConjugation.setYo(this.futureYo);
        this.futureConjugation.setTu(this.futureTu);
        this.futureConjugation.setEl(this.futureEl);
        this.futureConjugation.setNosotros(this.futureNosotros);
        this.futureConjugation.setEls(this.futureEls);
        this.conditionalConjugation.setTense(parseInt('5'));
        this.conditionalConjugation.setYo(this.conditionalYo);
        this.conditionalConjugation.setTu(this.conditionalTu);
        this.conditionalConjugation.setEl(this.conditionalEl);
        this.conditionalConjugation.setNosotros(this.conditionalNosotros);
        this.conditionalConjugation.setEls(this.conditionalEls);
        this.addVerb(this.newVerb);
        this.queryVerb = this.apollo.watchQuery({
            query: this.vs.VerbId,
            variables: {
                verb: this.infinitive
            }
        }).valueChanges
            .subscribe(function (result) {
            var verbData = JSON.parse(JSON.stringify(result.data));
            var verbId = JSON.parse(JSON.stringify(verbData.verbId));
            _this.id = parseInt(verbId['id']);
            _this.presentConjugation.setVerb(_this.id);
            _this.addConjugation(_this.presentConjugation);
            _this.preteriteConjugation.setVerb(_this.id);
            _this.addConjugation(_this.preteriteConjugation);
            _this.imperfectConjugation.setVerb(_this.id);
            _this.addConjugation(_this.imperfectConjugation);
            _this.futureConjugation.setVerb(_this.id);
            _this.addConjugation(_this.futureConjugation);
            _this.conditionalConjugation.setVerb(_this.id);
            _this.addConjugation(_this.conditionalConjugation);
        });
        this.resetForm();
    };
    VerbInputComponent.prototype.getSelectedTextbox = function (textboxID) {
        this.selectedTextbox = textboxID;
    };
    VerbInputComponent.prototype.placeAccent = function (event) {
        var selectedTextbox = document.getElementById(this.selectedTextbox);
        this.accent = event;
        var currentPosition = selectedTextbox.selectionStart;
        var originalValue = selectedTextbox.value;
        var newValue = originalValue.substring(0, currentPosition) + this.accent + originalValue.substring(currentPosition);
        selectedTextbox.value = newValue;
    };
    VerbInputComponent.ctorParameters = function () { return [
        { type: _services_verb_service__WEBPACK_IMPORTED_MODULE_4__["VerbService"] },
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"] }
    ]; };
    VerbInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-verb-input',
            template: _raw_loader_verb_input_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_verb_input_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_verb_service__WEBPACK_IMPORTED_MODULE_4__["VerbService"], apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"]])
    ], VerbInputComponent);
    return VerbInputComponent;
}());



/***/ }),

/***/ "JLPh":
/*!***********************************************************!*\
  !*** ./src/app/services/vocabulary-categories.service.ts ***!
  \***********************************************************/
/*! exports provided: VocabularyCategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VocabularyCategoriesService", function() { return VocabularyCategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);




var VocabularyCategoriesService = /** @class */ (function () {
    function VocabularyCategoriesService(apollo) {
        this.apollo = apollo;
        this.Categories = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    query categories {\n        categories {\n          id,\n          category\n        }\n    }"], ["\n    query categories {\n        categories {\n          id,\n          category\n        }\n    }"])));
    }
    VocabularyCategoriesService.ctorParameters = function () { return [
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"] }
    ]; };
    VocabularyCategoriesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]])
    ], VocabularyCategoriesService);
    return VocabularyCategoriesService;
}());

var templateObject_1;


/***/ }),

/***/ "JdvD":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/verb-slider/verb-slider.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-overlay *ngIf='showOverlay'></app-overlay>\n<app-verb-overlay-form (formChange)='getOverlayData($event)' *ngIf='showVerbOverlay'></app-verb-overlay-form>\n<app-verb-slider-report [reportInfo]=\"report\" *ngIf='showReport'></app-verb-slider-report>\n<section>\n  <h1>verb slider</h1>\n  <form *ngIf='showForm' class=\"col-lg-5 col-md-8 col-sm-10\">\n    <fieldset class=\"col-lg-10 col-md-10 col-sm-12 col-xs-12\">\n        <h2>[ {{infinitive}} ]</h2>\n        <div class=\"static-container col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n            <div class=\"static-tile\">Yo</div>\n            <div class=\"static-tile\">Tu</div>\n            <div class=\"static-tile\">El, Ella, Usted</div>\n            <div class=\"static-tile\">Nosotros</div>\n            <div class=\"static-tile\">Els, Ellas, Ustedes</div>\n        </div>\n\n        <div class=\"slide-list col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n            <div cdkDropList class=\"word-list\" (cdkDropListDropped)=\"drop($event)\">\n                <div class=\"slide-box\" *ngFor=\"let verbSlide of verbSlides\" cdkDrag>\n                    {{verbSlide}}\n                </div>\n            </div>\n        </div>\n    </fieldset>\n    <div id=\"buttons\" class=\"col-lg-12 col-xs-12\">\n        <input type=\"button\" id=\"answerBtn\" value=\"answer\" (click)=\"getAnswer()\" />\n        <input type=\"button\" id=\"resetBtn\" value=\"reset\" (click)=\"reset()\" />\n        <input type=\"button\" id=\"quitBtn\" value=\"quit\" (click)=\"quit()\" />\n    </div>\n</form>\n</section>");

/***/ }),

/***/ "Jh6j":
/*!********************************!*\
  !*** ./src/app/conjugation.ts ***!
  \********************************/
/*! exports provided: Conjugation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Conjugation", function() { return Conjugation; });
var Conjugation = /** @class */ (function () {
    function Conjugation() {
        this.verb = 0;
        this.tense = 0;
        this.yo = '';
        this.tu = '';
        this.el = '';
        this.nosotros = '';
        this.els = '';
    }
    Conjugation.prototype.setVerb = function (verb) {
        this.verb = verb;
    };
    Conjugation.prototype.setTense = function (tense) {
        this.tense = tense;
    };
    Conjugation.prototype.setYo = function (yo) {
        this.yo = yo;
    };
    Conjugation.prototype.setTu = function (tu) {
        this.tu = tu;
    };
    Conjugation.prototype.setEl = function (el) {
        this.el = el;
    };
    Conjugation.prototype.setNosotros = function (nosotros) {
        this.nosotros = nosotros;
    };
    Conjugation.prototype.setEls = function (els) {
        this.els = els;
    };
    return Conjugation;
}());



/***/ }),

/***/ "JsSZ":
/*!********************************************************!*\
  !*** ./src/app/components/report/report.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 97;\r\n    position: absolute;\r\n  }\r\n\r\nsection > div {\r\n    margin: 0 auto;\r\n    padding: 1.8rem;\r\n    z-index: 98;\r\n    position: absolute;\r\n    background: rgb(255, 255, 255);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    width: 40%;\r\n    border-radius: 0.75rem;\r\n}\r\n\r\nh2, h3 {\r\n    text-align: center;\r\n}\r\n\r\ndiv div {\r\n    text-align: center;\r\n}\r\n\r\n.header {\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    margin-top: 1.8rem;\r\n    margin-bottom: 0.5rem;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\n.row {\r\n    margin-bottom: 1.2rem;\r\n    padding-bottom: 0.625rem;\r\n    border-bottom: 1px solid rgb(0, 0, 0);\r\n}\r\n\r\n.buttons {\r\n    margin-top: 1.75rem;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\n.buttons input {\r\n    margin-right: 0.15rem;\r\n    margin-left:  0.15rem;\r\n    padding: 0.625rem;\r\n    border: none;\r\n    text-transform: uppercase;\r\n    color: rgb(255, 255, 255);\r\n    font-weight: bold;\r\n    font-size: 0.75em;\r\n    font-family: \"Roboto\", sans-serif;\r\n    border-radius: 5px;\r\n    font-size: 100%;\r\n}\r\n\r\n#replayBtn {\r\n    background: rgb(52, 58, 64);\r\n}\r\n\r\n#quitBtn {\r\n    background: rgb(220, 53, 69);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogOTc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG5cclxuc2VjdGlvbiA+IGRpdiB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDEuOHJlbTtcclxuICAgIHotaW5kZXg6IDk4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG59XHJcblxyXG5oMiwgaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5kaXYgZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjhyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjYyNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIG1hcmdpbi10b3A6IDEuNzVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuICBcclxuLmJ1dHRvbnMgaW5wdXQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjE1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6ICAwLjE1cmVtO1xyXG4gICAgcGFkZGluZzogMC42MjVyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxufVxyXG4gIFxyXG4jcmVwbGF5QnRuIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1MiwgNTgsIDY0KTtcclxufVxyXG4gIFxyXG4jcXVpdEJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjIwLCA1MywgNjkpO1xyXG59Il19 */");

/***/ }),

/***/ "KtLp":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vocabulary-fill-in/vocabulary-fill-in.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-overlay *ngIf='showOverlay'></app-overlay>\n<app-vocabulary-overlay-form (formChange)='getOverlayData($event)' *ngIf='showVocabularyOverlay'></app-vocabulary-overlay-form>\n<app-report [reportInfo]=\"report\" *ngIf='showReport'></app-report>\n<section>\n  <h1>vocabulary fill-in</h1>\n  <form *ngIf='showForm' class=\"col-lg-5 col-md-8 col-sm-10\">\n    <fieldset class=\"col-lg-10 col-md-10 col-sm-12 col-xs-12\">\n      <h2>\n        [ {{translation}} ]\n      </h2>\n      <div class=\"col-xs-12 col-lg-8\">\n        <input type=\"text\" [(ngModel)]=\"inputAnswer\" id=\"inputAnswer\" class=\"col-lg-12\" name=\"inputAnswer\" />\n      </div>\n      <div class=\"reminder\">Reminder: Don't forget the accents or your answer will be wrong!</div>\n    </fieldset>\n    <app-spanish-accents (accentMessage)=\"placeAccent($event)\"></app-spanish-accents>\n    <div id=\"buttons\">\n      <input type=\"button\" id=\"answerBtn\" value=\"answer\" (click)=\"getAnswer()\" />\n      <input type=\"button\" id=\"resetBtn\" value=\"reset\" (click)=\"reset()\" />\n      <input type=\"button\" id=\"quitBtn\" value=\"quit\" (click)=\"quit()\" />\n    </div>\n  </form>\n</section>");

/***/ }),

/***/ "Kw5F":
/*!************************************************************************!*\
  !*** ./src/app/components/verb-flashcard/verb-flashcard.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-family: 'Roboto', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nsection > h1 {\r\n  margin-top: 8.0rem;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  padding-bottom: 50px;\r\n  font-family: \"Open Sans\", serif;\r\n  text-transform: capitalize;\r\n  font-weight: normal;\r\n  font-size: 175%;\r\n}\r\n\r\nsection > div {\r\n  margin: 0 auto;\r\n  padding: 0;\r\n}\r\n\r\nfieldset {\r\n  border: none;\r\n  margin-bottom: 25px;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n}\r\n\r\ndiv.buttons {\r\n  margin: 0;\r\n  padding-top: 25px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.button {\r\n  margin-right: 0.15rem;\r\n  margin-left:  0.15rem;\r\n  padding: 0.75rem;\r\n  border: none;\r\n  text-transform: uppercase;\r\n  color: rgb(255, 255, 255);\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  font-family: \"Roboto\", sans-serif;\r\n  border-radius: 5px;\r\n  font-size: 100%;\r\n}\r\n\r\n.search {\r\n  margin-left: 0.75rem;\r\n}\r\n\r\n.flip {\r\n  background: rgb(30, 126, 52);\r\n}\r\n\r\n.reset {\r\n  background: rgb(52, 58, 64);\r\n}\r\n\r\nselect {\r\n  padding: 10px;\r\n  margin-bottom: 25px;\r\n  border-radius: 0.8rem;\r\n  border: 2px solid #CCC;\r\n}\r\n\r\n.or {\r\n  margin: 10px 0;\r\n  font-size: 125%;\r\n  font-weight: bold;\r\n}\r\n\r\n.and {\r\n  margin-top: -15px;\r\n  margin-bottom: 10px;\r\n  font-size: 125%;\r\n  font-weight: bold;\r\n}\r\n\r\n[type='text'] {\r\n  padding: 10px;\r\n  border-radius: 0.8rem;\r\n  border: 2px solid #CCC;\r\n}\r\n\r\n.next, .search {\r\n  background: rgb(30, 126, 52);\r\n}\r\n\r\ndl {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  margin-top: 0.01em;\r\n  margin-bottom: 0.01em;\r\n  font-size: 1.0em;\r\n}\r\n\r\ndt {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  width: 50%;\r\n  margin-right: 0.5em;\r\n}\r\n\r\ndd {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  width: 50%;\r\n  margin-left: 0.5em;\r\n  font-weight: bold;\r\n}\r\n\r\n.card {\r\n  margin: 0 auto;\r\n  padding: 0;\r\n  height: 25rem;\r\n  background: rgb(255, 255, 255);\r\n  position: relative;\r\n  transform-style: preserve-3d;\r\n  transform: transform 1s;\r\n  border: 1px solid rgb(112,128,144);\r\n  border-radius: 2.0rem;\r\n}\r\n\r\n.face {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  position: absolute;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n  margin: 0 auto;\r\n  border-radius: 2.0rem;\r\n}\r\n\r\n.front {\r\n  transform: rotateX(0deg);\r\n  background: rgb(0, 0, 0);\r\n  color: rgb(255, 255, 255);\r\n  padding-top: 2.0rem;\r\n  border-radius: 2.0rem;\r\n}\r\n\r\n.back {\r\n  transform: rotateX(180deg);\r\n  background: rgb(198, 10, 30);\r\n  color: rgb(255, 255, 255);\r\n}\r\n\r\n.back h3 {\r\n  margin-bottom: 20px;\r\n}\r\n\r\nh2 {\r\n  margin-bottom: 0;\r\n  font-size: 3em;\r\n}\r\n\r\nh3 {\r\n  margin-top: 0;\r\n  font-size: 2em;\r\n}\r\n\r\nh4 {\r\n  color: rgb(255, 0, 0);\r\n  font-style: italic;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZXJiLWZsYXNoY2FyZC92ZXJiLWZsYXNoY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0IsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQix5QkFBaUI7S0FBakIsc0JBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZlcmItZmxhc2hjYXJkL3ZlcmItZmxhc2hjYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5zZWN0aW9uID4gaDEge1xyXG4gIG1hcmdpbi10b3A6IDguMHJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE3NSU7XHJcbn1cclxuXHJcbnNlY3Rpb24gPiBkaXYge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmRpdi5idXR0b25zIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjE1cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAgMC4xNXJlbTtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICBtYXJnaW4tbGVmdDogMC43NXJlbTtcclxufVxyXG5cclxuLmZsaXAge1xyXG4gIGJhY2tncm91bmQ6IHJnYigzMCwgMTI2LCA1Mik7XHJcbn1cclxuXHJcbi5yZXNldCB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDUyLCA1OCwgNjQpO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgI0NDQztcclxufVxyXG5cclxuLm9yIHtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBmb250LXNpemU6IDEyNSU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5hbmQge1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxMjUlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5bdHlwZT0ndGV4dCddIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjQ0NDO1xyXG59XHJcblxyXG4ubmV4dCwgLnNlYXJjaCB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDMwLCAxMjYsIDUyKTtcclxufVxyXG5cclxuZGwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAwLjAxZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4wMWVtO1xyXG4gIGZvbnQtc2l6ZTogMS4wZW07XHJcbn1cclxuXHJcbmR0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbn1cclxuXHJcbmRkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICBoZWlnaHQ6IDI1cmVtO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB0cmFuc2Zvcm06IHRyYW5zZm9ybSAxcztcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTEyLDEyOCwxNDQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIuMHJlbTtcclxufVxyXG5cclxuLmZhY2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIuMHJlbTtcclxufVxyXG5cclxuLmZyb250IHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgcGFkZGluZy10b3A6IDIuMHJlbTtcclxuICBib3JkZXItcmFkaXVzOiAyLjByZW07XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTk4LCAxMCwgMzApO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi5iYWNrIGgzIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LXNpemU6IDNlbTtcclxufVxyXG5cclxuaDMge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbmg0IHtcclxuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59Il19 */");

/***/ }),

/***/ "LApo":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/marquee/marquee.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div></div>");

/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.css */ "GpEA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "N+FS":
/*!************************************************!*\
  !*** ./src/app/services/vocabulary.service.ts ***!
  \************************************************/
/*! exports provided: VocabularyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VocabularyService", function() { return VocabularyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);




var VocabularyService = /** @class */ (function () {
    function VocabularyService(apollo) {
        this.apollo = apollo;
        this.Dictionary = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    query dictionary { \n        dictionary {\n          id,\n          word,\n          translation,\n          pronunciation,\n          category,\n          gender,\n          image\n        }\n      }"], ["\n    query dictionary { \n        dictionary {\n          id,\n          word,\n          translation,\n          pronunciation,\n          category,\n          gender,\n          image\n        }\n      }"])));
        this.Category = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    query category($category: Int!) {\n      category(category: $category) {\n          id,\n          word,\n          translation,\n          pronunciation,\n          category,\n          gender,\n          image\n      }\n    }"], ["\n    query category($category: Int!) {\n      category(category: $category) {\n          id,\n          word,\n          translation,\n          pronunciation,\n          category,\n          gender,\n          image\n      }\n    }"])));
        this.Word = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    query word($word: String!) {\n      word(word: $word) {\n          id,\n          word,\n          translation,\n          pronunciation,\n          category,\n          gender,\n          image\n      }\n    }"], ["\n    query word($word: String!) {\n      word(word: $word) {\n          id,\n          word,\n          translation,\n          pronunciation,\n          category,\n          gender,\n          image\n      }\n    }"])));
        this.CreateWord = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    mutation ($word: String!, $translation: String!, $pronunciation: String!, $category: Int!, $gender: String!, $image: String!) {\n      createWord(word: $word, translation: $translation, pronunciation: $pronunciation, category: $category, gender: $gender, image: $image) {\n        word,\n        translation,\n        pronunciation,\n        category,\n        gender,\n        image\n      }\n    }"], ["\n    mutation ($word: String!, $translation: String!, $pronunciation: String!, $category: Int!, $gender: String!, $image: String!) {\n      createWord(word: $word, translation: $translation, pronunciation: $pronunciation, category: $category, gender: $gender, image: $image) {\n        word,\n        translation,\n        pronunciation,\n        category,\n        gender,\n        image\n      }\n    }"])));
    }
    VocabularyService.ctorParameters = function () { return [
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"] }
    ]; };
    VocabularyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]])
    ], VocabularyService);
    return VocabularyService;
}());

var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "P9Xw":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav {\r\n  margin: -0.5rem;\r\n  padding: 0;\r\n  width: 0;\r\n  text-transform: uppercase;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n#menu  {\r\n  margin: 0;\r\n  margin-top: -0.8rem;\r\n  padding: 0;\r\n  width: 230px;\r\n  list-style-type: none;\r\n  z-index: 100;\r\n  position: absolute;\r\n  right: -140px;\r\n}\r\n\r\n@media (max-width: 1199.98px) {\r\n  #menu {\r\n    margin-right: -2.0rem;\r\n  }\r\n}\r\n\r\n.closeIcon {\r\n  float: right;\r\n}\r\n\r\n#menu li a {\r\n  text-decoration: none;\r\n  font-size: 125%;\r\n  font-weight: bold;\r\n  letter-spacing: 0.2em;\r\n  display: block;\r\n  padding: 0.1875rem 0.375rem;\r\n}\r\n\r\n#menu li a div {\r\n  width: 2.5rem;\r\n  height: 5px;\r\n  background: rgb(0 0 0);\r\n  background-color:  rgb(255, 196, 0);\r\n  margin: 6px 0;\r\n}\r\n\r\nul#subMenu {\r\n  width: 230px;\r\n  list-style-type: none;\r\n  left: -180px;\r\n  margin-top: 0.75rem;\r\n  margin-left: 0;\r\n  padding: 0;\r\n  z-index: 100;\r\n  position: absolute;\r\n  background: rgb(198, 10, 30);\r\n  font-weight: 800;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nul#subMenu li {\r\n  width: 100%;\r\n  padding-top: 5px;\r\n}\r\n\r\nul#subMenu li .heading {\r\n  color: rgb(255, 196, 0);\r\n  margin: 0;\r\n  padding-top: 8px;\r\n  padding-bottom: 8px;\r\n  padding-left: 5px;\r\n  width: 100%;\r\n  display: block;\r\n  font-size: 115%;\r\n  border-top: 1px solid  rgb(255, 196, 0);\r\n  border-bottom: 1px solid  rgb(255, 196, 0);\r\n}\r\n\r\nul#subMenu li a {\r\n  width: 100%;\r\n  display: block;\r\n  background: rgb(198, 10, 30);\r\n  color: rgb(255, 196, 0);\r\n  font-weight: normal;\r\n  letter-spacing: 0;\r\n}\r\n\r\nul#subMenu li a:hover {\r\n  background: rgb(255, 196, 0);\r\n  color: rgb(198, 10, 30);\r\n}\r\n\r\nul#subMenu ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nul#subMenu ul li {\r\n  text-indent: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsUUFBUTtFQUNSLHlCQUF5QjtFQUN6QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZix1Q0FBdUM7RUFDdkMsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICBtYXJnaW46IC0wLjVyZW07XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI21lbnUgIHtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLXRvcDogLTAuOHJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTE0MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XHJcbiAgI21lbnUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMi4wcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmNsb3NlSWNvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4jbWVudSBsaSBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxMjUlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAwLjE4NzVyZW0gMC4zNzVyZW07XHJcbn1cclxuXHJcbiNtZW51IGxpIGEgZGl2IHtcclxuICB3aWR0aDogMi41cmVtO1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYigwIDAgMCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIHJnYigyNTUsIDE5NiwgMCk7XHJcbiAgbWFyZ2luOiA2cHggMDtcclxufVxyXG5cclxudWwjc3ViTWVudSB7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBsZWZ0OiAtMTgwcHg7XHJcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDE5OCwgMTAsIDMwKTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxudWwjc3ViTWVudSBsaSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxudWwjc3ViTWVudSBsaSAuaGVhZGluZyB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDE5NiwgMCk7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDExNSU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICByZ2IoMjU1LCAxOTYsIDApO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAgcmdiKDI1NSwgMTk2LCAwKTtcclxufVxyXG5cclxudWwjc3ViTWVudSBsaSBhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTk4LCAxMCwgMzApO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAxOTYsIDApO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbnVsI3N1Yk1lbnUgbGkgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTk2LCAwKTtcclxuICBjb2xvcjogcmdiKDE5OCwgMTAsIDMwKTtcclxufVxyXG51bCNzdWJNZW51IHVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbnVsI3N1Yk1lbnUgdWwgbGkge1xyXG4gIHRleHQtaW5kZW50OiBub25lO1xyXG59Il19 */");

/***/ }),

/***/ "PZjB":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vocabulary-scramble/vocabulary-scramble.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-overlay *ngIf='showOverlay'></app-overlay>\n<app-vocabulary-overlay-form (formChange)='getOverlayData($event)' *ngIf='showVocabularyOverlay'></app-vocabulary-overlay-form>\n<app-report [reportInfo]=\"report\" *ngIf='showReport'></app-report>\n<section>\n    <h1>vocabulary scramble</h1>\n\n    <form *ngIf='showForm' ngClass=\"col-lg-4 col-md-6 col-xs-12\">\n        <fieldset class=\"col-lg-12 col-xs-12\">\n            <h2>[ {{translation}} ]</h2>\n            <div cdkDropList class=\"tile-list\" cdkDropListOrientation=\"horizontal\" (cdkDropListDropped)=\"drop($event)\">\n                <div ngClass=\"letter-box\" *ngFor=\"let letter of scrambledWord\" cdkDrag>\n                    {{letter}}\n                </div>\n            </div>\n        </fieldset>\n        <div id=\"buttons\">\n            <input type=\"button\" id=\"answerBtn\" value=\"answer\" (click)=\"getAnswer()\" />\n            <input type=\"button\" id=\"resetBtn\" value=\"reset\" (click)=\"reset()\" />\n            <input type=\"button\" id=\"quitBtn\" value=\"quit\" (click)=\"quit()\" />\n        </div>\n    </form>\n</section>");

/***/ }),

/***/ "Pb33":
/*!*************************************************************************************!*\
  !*** ./src/app/components/vocabulary-completion/vocabulary-completion.component.ts ***!
  \*************************************************************************************/
/*! exports provided: VocabularyCompletionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VocabularyCompletionComponent", function() { return VocabularyCompletionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vocabulary_completion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vocabulary-completion.component.html */ "qZVD");
/* harmony import */ var _vocabulary_completion_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vocabulary-completion.component.css */ "9H/r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_vocabulary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/vocabulary.service */ "N+FS");
/* harmony import */ var _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/random-number-generator.service */ "W26Q");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-angular */ "/IUn");








var VocabularyCompletionComponent = /** @class */ (function () {
    function VocabularyCompletionComponent(vs, apollo, randomNumberService, router) {
        var _this = this;
        this.vs = vs;
        this.apollo = apollo;
        this.randomNumberService = randomNumberService;
        this.router = router;
        this.showOverlay = true;
        this.showVocabularyOverlay = true;
        this.showForm = false;
        this.showReport = false;
        this.numberQuestions = 0;
        this.translation = '';
        this.image = '';
        this.incompleteWord = [];
        this.questionSet = [];
        this.currentWord = 0;
        this.numberCorrect = 0;
        this.report = {};
        this.responses = [];
        this.createQuestionSet = function () {
            var categoryObject = {
                query: _this.vs.Category,
                variables: {
                    category: parseInt(_this.selectedCategory)
                }
            };
            var dictionaryObject = {
                query: _this.vs.Dictionary
            };
            var queryObject = (_this.selectedCategory) ? categoryObject : dictionaryObject;
            _this.queryDictionary = _this.apollo.watchQuery(queryObject)
                .valueChanges
                .subscribe(function (result) {
                var dictionaryData = JSON.parse(JSON.stringify(result.data));
                _this.dictionary = (_this.selectedCategory) ? dictionaryData.category : dictionaryData.dictionary;
                _this.numberQuestions = _this.numberQuestions;
                _this.randomNumberService.generateRandomNumberArray(_this.numberQuestions, _this.dictionary.length, _this.questionSet);
                _this.getCurrentWord(_this.currentWord);
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        };
    }
    VocabularyCompletionComponent.prototype.getOverlayData = function (data) {
        if (!data.isVisible) {
            this.showOverlay = data.isVisible;
            this.showVocabularyOverlay = data.isVisible;
            this.showForm = true;
            this.selectedCategory = data.category;
            this.numberQuestions = data.numberQuestions;
            this.createQuestionSet();
        }
    };
    VocabularyCompletionComponent.prototype.getCurrentWord = function (word) {
        var currentWord = this.questionSet[word];
        this.translation = this.dictionary[currentWord].translation;
        this.image = this.dictionary[currentWord].image;
        this.answer = this.dictionary[currentWord].word;
        this.createIncompleteWord(this.answer);
    };
    VocabularyCompletionComponent.prototype.createIncompleteWord = function (word) {
        var BLANK = '';
        var BLANK_PERCENTAGE = 0.50;
        var numberBlanks = Math.ceil(word.length * BLANK_PERCENTAGE);
        var wordArray = [];
        var incompleteArray = [];
        wordArray = word.split('');
        this.randomNumberService.generateRandomNumberArray(numberBlanks, word.length, incompleteArray);
        for (var i = 0; i < incompleteArray.length; i++) {
            var blankSpace = incompleteArray[i];
            wordArray[blankSpace] = BLANK;
        }
        this.incompleteWord = wordArray.slice(0);
    };
    VocabularyCompletionComponent.prototype.getNextQuestion = function () {
        var numberQuestions = this.questionSet.length;
        if (this.currentWord < numberQuestions) {
            this.currentWord++;
            this.getCurrentWord(this.currentWord);
        }
    };
    VocabularyCompletionComponent.prototype.getAnswer = function () {
        var responseObj = {};
        var score = 0;
        var response = this.incompleteWord.join('');
        if (this.answer === response)
            this.numberCorrect++;
        responseObj.question = this.translation;
        responseObj.answer = this.answer;
        responseObj.response = response;
        this.responses.push(responseObj);
        if (this.currentWord === this.numberQuestions - 1) {
            this.showForm = false;
            this.showReport = true;
            this.showOverlay = true;
            score = Math.round((this.numberCorrect / this.numberQuestions) * 100);
            this.report.title = 'Vocabulary Completion Report';
            this.report.scoreMessage = 'You scored ' + score + '%';
            this.report.headings = ['word', 'answer', 'response'];
            this.report.responses = this.responses;
        }
        else {
            this.selectedTextbox = -1;
            this.getNextQuestion();
        }
    };
    VocabularyCompletionComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    VocabularyCompletionComponent.prototype.reset = function () {
        this.answer = '';
        this.currentWord = 0;
        this.numberCorrect = 0;
        this.getNextQuestion();
    };
    VocabularyCompletionComponent.prototype.quit = function () {
        this.router.navigateByUrl('');
    };
    VocabularyCompletionComponent.prototype.getSelectedTextbox = function (textboxID) {
        this.selectedTextbox = textboxID;
    };
    VocabularyCompletionComponent.prototype.placeAccent = function (event) {
        this.accent = event;
        this.incompleteWord[this.selectedTextbox] = this.accent;
    };
    VocabularyCompletionComponent.ctorParameters = function () { return [
        { type: _services_vocabulary_service__WEBPACK_IMPORTED_MODULE_4__["VocabularyService"] },
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"] },
        { type: _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__["RandomNumberGeneratorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    VocabularyCompletionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-vocabulary-completion',
            template: _raw_loader_vocabulary_completion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_vocabulary_completion_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vocabulary_service__WEBPACK_IMPORTED_MODULE_4__["VocabularyService"], apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"], _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__["RandomNumberGeneratorService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], VocabularyCompletionComponent);
    return VocabularyCompletionComponent;
}());



/***/ }),

/***/ "Qb+V":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/verb-conjugator/verb-conjugator.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-overlay *ngIf='showOverlay'></app-overlay>\r\n<app-conjugator-overlay-form (formChange)='getOverlayData($event)' *ngIf='showConjugatorOverlay'></app-conjugator-overlay-form>\r\n<app-conjugator-report [reportInfo]=\"report\" *ngIf='showReport'></app-conjugator-report>\r\n<section>\r\n  <h1>verb conjugator</h1>\r\n  <form *ngIf='showForm' class=\"col-lg-5 col-md-8 col-sm-10\">\r\n    <fieldset class=\"col-lg-10 col-md-10 col-sm-12 col-xs-12\">\r\n      <h2>{{infinitive}}</h2>\r\n      <h3>{{translation}}</h3>\r\n      <h4>{{tense}} tense</h4>\r\n      <dl>\r\n        <dt>Yo</dt>\r\n        <dd><input type=\"text\" id=\"yo\" (focus)=\"getSelectedTextbox('yo')\" class=\"col-lg-12\" name=\"yo\" [(ngModel)]=\"inputAnswers.yo\" /></dd>\r\n      </dl>\r\n      <dl>\r\n        <dt>Tu</dt>\r\n        <dd><input type=\"text\" id=\"tu\" (focus)=\"getSelectedTextbox('tu')\" class=\"col-lg-12\" name=\"tu\" [(ngModel)]=\"inputAnswers.tu\" /></dd>\r\n      </dl>\r\n      <dl>\r\n        <dt>El/Ella/Usted</dt>\r\n        <dd><input type=\"text\" id=\"el\" (focus)=\"getSelectedTextbox('el')\" class=\"col-lg-12\" name=\"el\" [(ngModel)]=\"inputAnswers.el\" /></dd>\r\n      </dl>\r\n      <dl>\r\n        <dt>Nosotros/Nosotras</dt>\r\n        <dd><input type=\"text\" id=\"nosotros\" (focus)=\"getSelectedTextbox('nosotros')\" class=\"col-lg-12\" name=\"nosotros\" [(ngModel)]=\"inputAnswers.nosotros\" /></dd>\r\n      </dl>\r\n      <dl>\r\n        <dt>Ellos/Ellas/Ustedes</dt>\r\n        <dd><input type=\"text\" id=\"els\" (focus)=\"getSelectedTextbox('els')\" class=\"col-lg-12\" name=\"els\" [(ngModel)]=\"inputAnswers.els\" /></dd>\r\n      </dl>\r\n    </fieldset>\r\n    <app-spanish-accents (accentMessage)=\"placeAccent($event)\"></app-spanish-accents>\r\n    <div class=\"buttons\">\r\n      <input type=\"button\" class=\"button answer\" id=\"answerBtn\" name=\"answerBtn\" value=\"answer\" (click)=\"getAnswers()\" />\r\n      <input type=\"button\" class=\"button reset\" id=\"resetBtn\" name=\"resetBtn\" value=\"reset\" (click)=\"reset()\" />\r\n      <input type=\"button\" id=\"quitBtn\" value=\"quit\" (click)=\"quit()\" />\r\n    </div>\r\n  </form>\r\n</section>\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "UF8T":
/*!*******************************************!*\
  !*** ./src/animations/slide.animation.ts ***!
  \*******************************************/
/*! exports provided: SlideInOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideInOutAnimation", function() { return SlideInOutAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

var SlideInOutAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bottom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('top', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateY(-100%)',
            visibility: 'hidden'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500))
    ])
];


/***/ }),

/***/ "UZr7":
/*!******************************************!*\
  !*** ./src/app/services/verb.service.ts ***!
  \******************************************/
/*! exports provided: VerbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerbService", function() { return VerbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);




var VerbService = /** @class */ (function () {
    function VerbService(apollo) {
        this.apollo = apollo;
        this.Tenses = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    query tenses {\n      tenses {\n        id,\n        tense\n      }\n    }"], ["\n    query tenses {\n      tenses {\n        id,\n        tense\n      }\n    }"])));
        this.Verbs = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    query verbs {\n      verbs {\n        id,\n        infinitive,\n        translation,\n        pronunciation\n      }\n    }"], ["\n    query verbs {\n      verbs {\n        id,\n        infinitive,\n        translation,\n        pronunciation\n      }\n    }"])));
        this.Verb = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    query verb($verb: String!) {\n      verb(verb: $verb) {\n        id,\n        infinitive,\n        translation,\n        pronunciation\n      }\n    }"], ["\n    query verb($verb: String!) {\n      verb(verb: $verb) {\n        id,\n        infinitive,\n        translation,\n        pronunciation\n      }\n    }"])));
        this.VerbId = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    query verbId($verb: String!) {\n      verbId(verb: $verb) {\n        id\n      }\n    }"], ["\n    query verbId($verb: String!) {\n      verbId(verb: $verb) {\n        id\n      }\n    }"])));
        this.CreateVerb = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    mutation ($infinitive: String!, $translation: String!, $pronunciation: String!) {\n      createVerb(infinitive: $infinitive, translation: $translation, pronunciation: $pronunciation) {\n        infinitive,\n        translation,\n        pronunciation\n      }\n    }"], ["\n    mutation ($infinitive: String!, $translation: String!, $pronunciation: String!) {\n      createVerb(infinitive: $infinitive, translation: $translation, pronunciation: $pronunciation) {\n        infinitive,\n        translation,\n        pronunciation\n      }\n    }"])));
        this.Conjugation = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n  query conjugation($verb: Int!, $tense: Int!) {\n    conjugation(verb: $verb, tense: $tense) {\n      verb,\n      tense,\n      yo,\n      tu,\n      el,\n      nosotros,\n      els\n    }\n  }"], ["\n  query conjugation($verb: Int!, $tense: Int!) {\n    conjugation(verb: $verb, tense: $tense) {\n      verb,\n      tense,\n      yo,\n      tu,\n      el,\n      nosotros,\n      els\n    }\n  }"])));
        this.Conjugations = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    query conjugations($verb: Int!) {\n      conjugations(verb: $verb) {\n        verb,\n        tense,\n        yo,\n        tu,\n        el,\n        nosotros,\n        els\n      }\n    }"], ["\n    query conjugations($verb: Int!) {\n      conjugations(verb: $verb) {\n        verb,\n        tense,\n        yo,\n        tu,\n        el,\n        nosotros,\n        els\n      }\n    }"])));
        this.CreateConjugation = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    mutation ($verb: Int!, $tense: Int!, $yo: String!, $tu: String!, $el: String!, $nosotros: String!, $els: String!) {\n      createConjugation(verb: $verb, tense: $tense, yo: $yo, tu: $tu, el: $el, nosotros: $nosotros, els: $els) {\n        verb,\n        tense,\n        yo,\n        tu,\n        el,\n        nosotros,\n        els\n      }\n    }"], ["\n    mutation ($verb: Int!, $tense: Int!, $yo: String!, $tu: String!, $el: String!, $nosotros: String!, $els: String!) {\n      createConjugation(verb: $verb, tense: $tense, yo: $yo, tu: $tu, el: $el, nosotros: $nosotros, els: $els) {\n        verb,\n        tense,\n        yo,\n        tu,\n        el,\n        nosotros,\n        els\n      }\n    }"])));
    }
    VerbService.ctorParameters = function () { return [
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"] }
    ]; };
    VerbService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]])
    ], VerbService);
    return VerbService;
}());

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


/***/ }),

/***/ "V+O4":
/*!********************************************************************************!*\
  !*** ./src/app/components/verb-slider-report/verb-slider-report.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 97;\r\n    position: absolute;\r\n  }\r\n\r\nsection > div {\r\n    margin: 0 auto;\r\n    padding: 1.8rem;\r\n    z-index: 98;\r\n    position: absolute;\r\n    background: rgb(255, 255, 255);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    border-radius: 0.75rem;\r\n}\r\n\r\nh2, h3 {\r\n    text-align: center;\r\n}\r\n\r\ndiv div {\r\n    text-align: center;\r\n}\r\n\r\n.header {\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    margin-top: 1.8rem;\r\n    margin-bottom: 0.5rem;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\n.row {\r\n    margin-bottom: 1.2rem;\r\n    padding-top: 0.625rem;\r\n    padding-bottom: 0.625rem;\r\n    border-bottom: 1px solid rgb(0, 0, 0);\r\n}\r\n\r\n.buttons {\r\n    margin-top: 50px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\n.buttons input {\r\n    margin-right: 0.15rem;\r\n    margin-left:  0.15rem;\r\n    padding: 0.625rem;\r\n    border: none;\r\n    text-transform: uppercase;\r\n    color: rgb(255, 255, 255);\r\n    font-weight: bold;\r\n    font-size: 0.75em;\r\n    font-family: \"Roboto\", sans-serif;\r\n    border-radius: 5px;\r\n    font-size: 100%;\r\n}\r\n\r\n#replayBtn {\r\n    background: rgb(52, 58, 64);\r\n}\r\n\r\n#quitBtn {\r\n    background: rgb(220, 53, 69);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZXJiLXNsaWRlci1yZXBvcnQvdmVyYi1zbGlkZXItcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVyYi1zbGlkZXItcmVwb3J0L3ZlcmItc2xpZGVyLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuXHJcbnNlY3Rpb24gPiBkaXYge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxLjhyZW07XHJcbiAgICB6LWluZGV4OiA5ODtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG59XHJcblxyXG5oMiwgaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5kaXYgZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjhyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAwLjYyNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjYyNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuICBcclxuLmJ1dHRvbnMgaW5wdXQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjE1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6ICAwLjE1cmVtO1xyXG4gICAgcGFkZGluZzogMC42MjVyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxufVxyXG4gIFxyXG4jcmVwbGF5QnRuIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1MiwgNTgsIDY0KTtcclxufVxyXG4gIFxyXG4jcXVpdEJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjIwLCA1MywgNjkpO1xyXG59Il19 */");

/***/ }),

/***/ "Vxza":
/*!*********************************************************!*\
  !*** ./src/app/components/overlay/overlay.component.ts ***!
  \*********************************************************/
/*! exports provided: OverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayComponent", function() { return OverlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_overlay_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./overlay.component.html */ "jrYY");
/* harmony import */ var _overlay_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlay.component.css */ "eI/N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var OverlayComponent = /** @class */ (function () {
    function OverlayComponent() {
    }
    OverlayComponent.prototype.ngOnInit = function () {
    };
    OverlayComponent.prototype.onSubmit = function () {
    };
    OverlayComponent.ctorParameters = function () { return []; };
    OverlayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-overlay',
            template: _raw_loader_overlay_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_overlay_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], OverlayComponent);
    return OverlayComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "W26Q":
/*!*************************************************************!*\
  !*** ./src/app/services/random-number-generator.service.ts ***!
  \*************************************************************/
/*! exports provided: RandomNumberGeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomNumberGeneratorService", function() { return RandomNumberGeneratorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var RandomNumberGeneratorService = /** @class */ (function () {
    function RandomNumberGeneratorService() {
        this.index = 0;
    }
    RandomNumberGeneratorService.prototype.generateRandomNumber = function (maxNumber) {
        return Math.floor(Math.random() * maxNumber);
    };
    RandomNumberGeneratorService.prototype.generateRandomNumberArray = function (arrayLength, maxNumber, numberArray) {
        if (arrayLength === void 0) { arrayLength = 5; }
        if (this.index < arrayLength) {
            var randomNumber = this.generateRandomNumber(maxNumber);
            if (numberArray.indexOf(randomNumber) === -1) {
                numberArray.push(randomNumber);
                this.index++;
            }
            return this.generateRandomNumberArray(arrayLength, maxNumber, numberArray);
        }
        else {
            this.index = 0;
        }
    };
    RandomNumberGeneratorService.ctorParameters = function () { return []; };
    RandomNumberGeneratorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], RandomNumberGeneratorService);
    return RandomNumberGeneratorService;
}());



/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  footer works!\n</p>\n");

/***/ }),

/***/ "XnZX":
/*!**************************************************************************!*\
  !*** ./src/app/components/vocabulary-quiz/vocabulary-quiz.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  font-family: 'Roboto', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nsection h1 {\r\n  margin-top: 8.0rem;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  font-family: \"Open Sans\", serif;\r\n  text-transform: capitalize;\r\n  font-weight: normal;\r\n  font-size: 175%;\r\n}\r\n\r\nform {\r\n  margin-top: 2.0rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-items: center;\r\n}\r\n\r\nfieldset {\r\n  border: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: 125%;\r\n  border-top: 1px solid rgb(198, 10, 30);\r\n  border-bottom: 1px solid rgb(198, 10, 30);\r\n}\r\n\r\nfieldset h2 {\r\n  margin-top: 1.5rem;\r\n  margin-bottom: 1.8rem;\r\n  font-size: 1.5em;\r\n  text-align: center;\r\n  color: rgb(198, 10, 30);\r\n}\r\n\r\n#answers {\r\n  margin-bottom: 20px;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-flow: row wrap;\r\n  align-content: center;\r\n  font-size: 1.0rem;\r\n}\r\n\r\n.row {\r\n  margin-left: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n}\r\n\r\n#buttons {\r\n  margin-top: 25px;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n}\r\n\r\n#buttons input {\r\n  margin-right: 0.5rem;\r\n  margin-left:  0.15rem;\r\n  padding: 0.75rem;\r\n  border: none;\r\n  text-transform: uppercase;\r\n  color: rgb(255, 255, 255);\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  font-family: \"Roboto\", sans-serif;\r\n  border-radius: 5px;\r\n  font-size: 100%;\r\n}\r\n\r\nlabel {\r\n  margin-top: 0.3rem;\r\n  margin-left: 0.5rem;\r\n  font-size: 125%;\r\n}\r\n\r\n#answerBtn {\r\n  margin-left: 30px;\r\n  background: rgb(40, 167, 69);\r\n}\r\n\r\n#resetBtn {\r\n  background: rgb(52, 58, 64);\r\n}\r\n\r\n#quitBtn {\r\n  background:rgb(198, 10, 30);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92b2NhYnVsYXJ5LXF1aXovdm9jYWJ1bGFyeS1xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2Ysc0NBQXNDO0VBQ3RDLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdm9jYWJ1bGFyeS1xdWl6L3ZvY2FidWxhcnktcXVpei5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5zZWN0aW9uIGgxIHtcclxuICBtYXJnaW4tdG9wOiA4LjByZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNlcmlmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNzUlO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBtYXJnaW4tdG9wOiAyLjByZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMjUlO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMTk4LCAxMCwgMzApO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTk4LCAxMCwgMzApO1xyXG59XHJcblxyXG5maWVsZHNldCBoMiB7XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuOHJlbTtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogcmdiKDE5OCwgMTAsIDMwKTtcclxufVxyXG5cclxuI2Fuc3dlcnMge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4jYnV0dG9ucyB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuICBcclxuI2J1dHRvbnMgaW5wdXQge1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAgMC4xNXJlbTtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAxMjUlO1xyXG59XHJcblxyXG4jYW5zd2VyQnRuIHtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNDAsIDE2NywgNjkpO1xyXG59XHJcblxyXG4jcmVzZXRCdG4ge1xyXG4gIGJhY2tncm91bmQ6IHJnYig1MiwgNTgsIDY0KTtcclxufVxyXG5cclxuI3F1aXRCdG4ge1xyXG4gIGJhY2tncm91bmQ6cmdiKDE5OCwgMTAsIDMwKTtcclxufSJdfQ== */");

/***/ }),

/***/ "YErj":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/verb-slider-report/verb-slider-report.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"col-lg-12\">\n    <div class=\"col-lg-6 col-md-8 col-xs-12\">\n      <h2>{{ reportInfo.title }}</h2>\n      <h3>{{ reportInfo.scoreMessage }}</h3>\n      <div class=\"row header\">\n        <div class=\"col-lg-2 col-md-2 col-xs-2\" *ngFor='let heading of reportInfo.headings'>{{ heading }}</div>\n      </div>\n      <div class=\"row\" *ngFor='let response of reportInfo.responses'>\n        <div class=\"col-lg-2 col-md-2 col-xs-2\">{{ response.slideSet }}</div>\n        <div class=\"col-lg-2 col-md-2 col-xs-2\">\n          <div>{{ response.answers[0] }}</div>\n          <div>{{ response.responses[0] }}</div>\n        </div>\n        <div class=\"col-lg-2 col-md-2 col-xs-2\">\n            <div>{{ response.answers[1] }}</div>\n            <div>{{ response.responses[1] }}</div>\n          </div>\n        <div class=\"col-lg-2 col-md-2 col-xs-2\">\n            <div>{{ response.answers[2] }}</div>\n            <div>{{ response.responses[2] }}</div>\n          </div>\n        <div class=\"col-lg-2 col-md-2 col-xs-2\">\n            <div>{{ response.answers[3] }}</div>\n            <div>{{ response.responses[3] }}</div>\n          </div>\n        <div class=\"col-lg-2 col-md-2 col-xs-2\">\n            <div>{{ response.answers[4] }}</div>\n            <div>{{ response.responses[4] }}</div>\n          </div>\n      </div>\n      <form>\n        <div id=\"buttons\" class=\"col-lg-12 col-xs-12 buttons\">\n          <input type=\"button\" id=\"replayBtn\" value=\"replay\" (click)=\"replay()\" />\n          <input type=\"button\" id=\"quitBtn\" value=\"quit\" (click)=\"quit()\" />\n        </div>\n      </form>\n    </div>\n  </section>");

/***/ }),

/***/ "YL/X":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/report/report.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <div class=\"col-lg-10 col-md-10 col-xs-12\">\n    <h2>{{ reportInfo.title }}</h2>\n    <h3>{{ reportInfo.scoreMessage }}</h3>\n    <div class=\"row header\">\n      <div class=\"col-lg-4 col-md-4 col-xs-4\" *ngFor='let heading of reportInfo.headings'>{{ heading }}</div>\n    </div>\n    <div class=\"row\" *ngFor='let response of reportInfo.responses'>\n      <div class=\"col-lg-4 col-md-4 col-xs-4\">{{ response.question }}</div>\n      <div class=\"col-lg-4 col-md-4 col-xs-4\">{{ response.answer }}</div>\n      <div class=\"col-lg-4 col-md-4 col-xs-4\">{{ response.response }}</div>\n    </div>\n    <form>\n      <div id=\"buttons\" class=\"col-lg-12 col-xs-12 buttons\">\n        <input type=\"button\" id=\"replayBtn\" value=\"replay\" (click)=\"replay()\" />\n        <input type=\"button\" id=\"quitBtn\" value=\"quit\" (click)=\"quit()\" />\n      </div>\n    </form>\n  </div>\n</section>");

/***/ }),

/***/ "YWr6":
/*!*******************************************************!*\
  !*** ./src/app/components/report/report.component.ts ***!
  \*******************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_report_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./report.component.html */ "YL/X");
/* harmony import */ var _report_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report.component.css */ "JsSZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






var ReportComponent = /** @class */ (function () {
    function ReportComponent(document, router) {
        this.document = document;
        this.router = router;
    }
    ReportComponent.prototype.replay = function () {
        this.document.location.reload();
    };
    ReportComponent.prototype.quit = function () {
        this.router.navigateByUrl('');
    };
    ReportComponent.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    ReportComponent.propDecorators = {
        reportInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    ReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-report',
            template: _raw_loader_report_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_report_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-angular-link-http */ "Ijki");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-cache-inmemory */ "K/JX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/menu/menu.component */ "0oYm");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_marquee_marquee_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/marquee/marquee.component */ "kN3+");
/* harmony import */ var _components_letter_pronunciation_letter_pronunciation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/letter-pronunciation/letter-pronunciation.component */ "o2r/");
/* harmony import */ var _components_vocabulary_slider_vocabulary_slider_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/vocabulary-slider/vocabulary-slider.component */ "IcPY");
/* harmony import */ var _components_vocabulary_quiz_vocabulary_quiz_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/vocabulary-quiz/vocabulary-quiz.component */ "hFuq");
/* harmony import */ var _components_vocabulary_completion_vocabulary_completion_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/vocabulary-completion/vocabulary-completion.component */ "Pb33");
/* harmony import */ var _components_vocabulary_scramble_vocabulary_scramble_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/vocabulary-scramble/vocabulary-scramble.component */ "u3J0");
/* harmony import */ var _components_verb_conjugator_verb_conjugator_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/verb-conjugator/verb-conjugator.component */ "ZNIl");
/* harmony import */ var _components_vocabulary_flashcard_vocabulary_flashcard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/vocabulary-flashcard/vocabulary-flashcard.component */ "pXny");
/* harmony import */ var _components_verb_flashcard_verb_flashcard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/verb-flashcard/verb-flashcard.component */ "tMwl");
/* harmony import */ var _components_vocabulary_input_vocabulary_input_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/vocabulary-input/vocabulary-input.component */ "7fg8");
/* harmony import */ var _components_verb_input_verb_input_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/verb-input/verb-input.component */ "IzZq");
/* harmony import */ var _services_vocabulary_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/vocabulary.service */ "N+FS");
/* harmony import */ var _services_verb_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/verb.service */ "UZr7");
/* harmony import */ var _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/random-number-generator.service */ "W26Q");
/* harmony import */ var _services_vocabulary_categories_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/vocabulary-categories.service */ "JLPh");
/* harmony import */ var _components_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/overlay/overlay.component */ "Vxza");
/* harmony import */ var _components_conjugator_overlay_form_conjugator_overlay_form_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/conjugator-overlay-form/conjugator-overlay-form.component */ "nmTv");
/* harmony import */ var _components_vocabulary_overlay_form_vocabulary_overlay_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/vocabulary-overlay-form/vocabulary-overlay-form.component */ "jcRC");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/card/card.component */ "lXt9");
/* harmony import */ var _components_report_report_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/report/report.component */ "YWr6");
/* harmony import */ var _components_conjugator_report_conjugator_report_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/conjugator-report/conjugator-report.component */ "dwKN");
/* harmony import */ var _components_slider_report_slider_report_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/slider-report/slider-report.component */ "46HW");
/* harmony import */ var _components_spanish_accents_spanish_accents_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/spanish-accents/spanish-accents.component */ "eL57");
/* harmony import */ var _components_verb_slider_verb_slider_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/verb-slider/verb-slider.component */ "DlzV");
/* harmony import */ var _components_vocabulary_fill_in_vocabulary_fill_in_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/vocabulary-fill-in/vocabulary-fill-in.component */ "xlaO");
/* harmony import */ var _components_verb_overlay_form_verb_overlay_form_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/verb-overlay-form/verb-overlay-form.component */ "0AKt");
/* harmony import */ var _components_verb_slider_report_verb_slider_report_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/verb-slider-report/verb-slider-report.component */ "xlKW");











































var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_33__["HomeComponent"] },
    { path: 'letter-pronunciation', component: _components_letter_pronunciation_letter_pronunciation_component__WEBPACK_IMPORTED_MODULE_16__["LetterPronunciationComponent"] },
    { path: 'vocabulary-completion', component: _components_vocabulary_completion_vocabulary_completion_component__WEBPACK_IMPORTED_MODULE_19__["VocabularyCompletionComponent"] },
    { path: 'vocabulary-flashcard', component: _components_vocabulary_flashcard_vocabulary_flashcard_component__WEBPACK_IMPORTED_MODULE_22__["VocabularyFlashcardComponent"] },
    { path: 'vocabulary-input', component: _components_vocabulary_input_vocabulary_input_component__WEBPACK_IMPORTED_MODULE_24__["VocabularyInputComponent"] },
    { path: 'vocabulary-quiz', component: _components_vocabulary_quiz_vocabulary_quiz_component__WEBPACK_IMPORTED_MODULE_18__["VocabularyQuizComponent"] },
    { path: 'vocabulary-scramble', component: _components_vocabulary_scramble_vocabulary_scramble_component__WEBPACK_IMPORTED_MODULE_20__["VocabularyScrambleComponent"] },
    { path: 'vocabulary-slider', component: _components_vocabulary_slider_vocabulary_slider_component__WEBPACK_IMPORTED_MODULE_17__["VocabularySliderComponent"] },
    { path: 'verb-flashcard', component: _components_verb_flashcard_verb_flashcard_component__WEBPACK_IMPORTED_MODULE_23__["VerbFlashcardComponent"] },
    { path: 'verb-conjugator', component: _components_verb_conjugator_verb_conjugator_component__WEBPACK_IMPORTED_MODULE_21__["VerbConjugatorComponent"] },
    { path: 'verb-input', component: _components_verb_input_verb_input_component__WEBPACK_IMPORTED_MODULE_25__["VerbInputComponent"] },
    { path: 'verb-slider', component: _components_verb_slider_verb_slider_component__WEBPACK_IMPORTED_MODULE_39__["VerbSliderComponent"] },
    { path: 'vocabulary-fill-in', component: _components_vocabulary_fill_in_vocabulary_fill_in_component__WEBPACK_IMPORTED_MODULE_40__["VocabularyFillInComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _components_marquee_marquee_component__WEBPACK_IMPORTED_MODULE_15__["MarqueeComponent"],
                _components_vocabulary_slider_vocabulary_slider_component__WEBPACK_IMPORTED_MODULE_17__["VocabularySliderComponent"],
                _components_vocabulary_quiz_vocabulary_quiz_component__WEBPACK_IMPORTED_MODULE_18__["VocabularyQuizComponent"],
                _components_vocabulary_completion_vocabulary_completion_component__WEBPACK_IMPORTED_MODULE_19__["VocabularyCompletionComponent"],
                _components_vocabulary_scramble_vocabulary_scramble_component__WEBPACK_IMPORTED_MODULE_20__["VocabularyScrambleComponent"],
                _components_verb_conjugator_verb_conjugator_component__WEBPACK_IMPORTED_MODULE_21__["VerbConjugatorComponent"],
                _components_vocabulary_flashcard_vocabulary_flashcard_component__WEBPACK_IMPORTED_MODULE_22__["VocabularyFlashcardComponent"],
                _components_verb_flashcard_verb_flashcard_component__WEBPACK_IMPORTED_MODULE_23__["VerbFlashcardComponent"],
                _components_vocabulary_input_vocabulary_input_component__WEBPACK_IMPORTED_MODULE_24__["VocabularyInputComponent"],
                _components_verb_input_verb_input_component__WEBPACK_IMPORTED_MODULE_25__["VerbInputComponent"],
                _components_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_30__["OverlayComponent"],
                _components_conjugator_overlay_form_conjugator_overlay_form_component__WEBPACK_IMPORTED_MODULE_31__["ConjugatorOverlayFormComponent"],
                _components_vocabulary_overlay_form_vocabulary_overlay_form_component__WEBPACK_IMPORTED_MODULE_32__["VocabularyOverlayFormComponent"],
                _components_letter_pronunciation_letter_pronunciation_component__WEBPACK_IMPORTED_MODULE_16__["LetterPronunciationComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_33__["HomeComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_34__["CardComponent"],
                _components_report_report_component__WEBPACK_IMPORTED_MODULE_35__["ReportComponent"],
                _components_conjugator_report_conjugator_report_component__WEBPACK_IMPORTED_MODULE_36__["ConjugatorReportComponent"],
                _components_slider_report_slider_report_component__WEBPACK_IMPORTED_MODULE_37__["SliderReportComponent"],
                _components_spanish_accents_spanish_accents_component__WEBPACK_IMPORTED_MODULE_38__["SpanishAccentsComponent"],
                _components_verb_slider_verb_slider_component__WEBPACK_IMPORTED_MODULE_39__["VerbSliderComponent"],
                _components_vocabulary_fill_in_vocabulary_fill_in_component__WEBPACK_IMPORTED_MODULE_40__["VocabularyFillInComponent"],
                _components_verb_overlay_form_verb_overlay_form_component__WEBPACK_IMPORTED_MODULE_41__["VerbOverlayFormComponent"],
                _components_verb_slider_report_verb_slider_report_component__WEBPACK_IMPORTED_MODULE_42__["VerbSliderReportComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                apollo_angular__WEBPACK_IMPORTED_MODULE_5__["ApolloModule"],
                apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_6__["HttpLinkModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes, { enableTracing: true })
            ],
            providers: [{
                    provide: apollo_angular__WEBPACK_IMPORTED_MODULE_5__["APOLLO_OPTIONS"],
                    useFactory: function (httpLink) {
                        return {
                            cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_7__["InMemoryCache"](),
                            link: httpLink.create({
                                uri: "http://localhost:5000/graphql"
                            })
                        };
                    },
                    deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_6__["HttpLink"]]
                }, _services_vocabulary_service__WEBPACK_IMPORTED_MODULE_26__["VocabularyService"], _services_verb_service__WEBPACK_IMPORTED_MODULE_27__["VerbService"], _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_28__["RandomNumberGeneratorService"], _services_vocabulary_categories_service__WEBPACK_IMPORTED_MODULE_29__["VocabularyCategoriesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ZNIl":
/*!*************************************************************************!*\
  !*** ./src/app/components/verb-conjugator/verb-conjugator.component.ts ***!
  \*************************************************************************/
/*! exports provided: VerbConjugatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerbConjugatorComponent", function() { return VerbConjugatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verb_conjugator_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verb-conjugator.component.html */ "Qb+V");
/* harmony import */ var _verb_conjugator_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verb-conjugator.component.css */ "sjGs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_verb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/verb.service */ "UZr7");
/* harmony import */ var _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/random-number-generator.service */ "W26Q");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-angular */ "/IUn");








var VerbConjugatorComponent = /** @class */ (function () {
    function VerbConjugatorComponent(vs, randomNumberService, router, apollo) {
        var _this = this;
        this.vs = vs;
        this.randomNumberService = randomNumberService;
        this.router = router;
        this.apollo = apollo;
        this.showOverlay = true;
        this.showConjugatorOverlay = true;
        this.showForm = false;
        this.showReport = false;
        this.numberQuestions = 1;
        this.numberAnswered = 0;
        this.questionSet = [];
        this.currentVerb = 0;
        this.currentAnswers = {};
        this.correctAnswers = [];
        this.userAnswers = [];
        this.reportData = [];
        this.reportDatum = {};
        this.inputAnswers = {
            yo: '',
            tu: '',
            el: '',
            nosotros: '',
            els: ''
        };
        this.infinitive = '';
        this.numberCorrect = 0;
        this.tenses = ['present', 'preterite', 'imperfect', 'future', 'conditional'];
        this.report = {};
        this.responses = [];
        this.getOverlayData = function (data) {
            if (!data.isVisible) {
                _this.selectedTense = data.tense;
                _this.selectedVerb = data.verb;
                _this.showOverlay = data.isVisible;
                _this.showConjugatorOverlay = data.isVisible;
                _this.showForm = true;
                _this.tense = _this.tenses[_this.selectedTense - 1];
                _this.getVerbs(data.numberVerbs);
            }
        };
        this.getVerbs = function (numberVerbs) {
            _this.queryVerbs = _this.apollo.watchQuery({
                query: _this.vs.Verbs
            })
                .valueChanges
                .subscribe(function (result) {
                var verbData = JSON.parse(JSON.stringify(result.data));
                _this.infinitives = verbData.verbs.sort(function (a, b) {
                    var verbA = a.infinitive;
                    var verbB = b.infinitive;
                    var comparison = 0;
                    if (verbA > verbB) {
                        comparison = 1;
                    }
                    else if (verbA < verbB) {
                        comparison = -1;
                    }
                    return comparison;
                });
                if (_this.selectedVerb) {
                    _this.getSelectedVerb();
                }
                else {
                    _this.getRandomVerbs(numberVerbs);
                }
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        };
        this.getCurrentVerb = function (verb, tense) {
            _this.getVerbInfo(verb, tense);
            _this.queryVerb = _this.apollo.watchQuery({
                query: _this.vs.Conjugation,
                variables: {
                    verb: parseInt(_this.infinitives[verb].id),
                    tense: parseInt(tense.toString())
                }
            })
                .valueChanges
                .subscribe(function (result) {
                var conjugationData = JSON.parse(JSON.stringify(result.data));
                _this.reportDatum.answers = conjugationData.conjugation[0];
                _this.fade = _this.fade === 'in' ? 'out' : 'in';
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        };
        this.getVerbInfo = function (verb, tense) {
            _this.infinitive = _this.infinitives[verb].infinitive;
            _this.translation = '[ ' + _this.infinitives[verb].translation + ' ]';
            _this.reportDatum = {};
            _this.reportDatum.verb = _this.infinitive;
        };
        this.getSelectedVerb = function () {
            var verbsLength = _this.infinitives.length;
            var verb;
            for (var i = 0; i < verbsLength; i++) {
                if (_this.infinitives[i].id === _this.selectedVerb) {
                    verb = i;
                }
            }
            _this.getCurrentVerb(verb, _this.selectedTense);
        };
        this.getRandomVerbs = function (numberVerbs) {
            _this.numberQuestions = numberVerbs;
            _this.randomNumberService.generateRandomNumberArray(_this.numberQuestions, _this.infinitives.length, _this.questionSet);
            var question = _this.questionSet[_this.currentVerb];
            _this.getCurrentVerb(question, _this.selectedTense);
        };
        this.getNextVerb = function () {
            if (_this.currentVerb < _this.numberQuestions) {
                _this.currentVerb++;
                _this.resetInputAnswers();
                _this.getCurrentVerb(_this.questionSet[_this.currentVerb], _this.selectedTense);
            }
        };
        this.getAnswers = function () {
            var userAnswers = {
                yo: _this.inputAnswers.yo,
                tu: _this.inputAnswers.tu,
                el: _this.inputAnswers.el,
                nosotros: _this.inputAnswers.nosotros,
                els: _this.inputAnswers.els
            };
            _this.reportDatum.userAnswers = userAnswers;
            _this.reportData.push(_this.reportDatum);
            if (_this.numberAnswered < _this.numberQuestions - 1) {
                _this.getNextVerb();
                _this.resetCurrentAnswers();
                _this.numberAnswered++;
            }
            else {
                _this.createReport();
            }
        };
        this.createReport = function () {
            _this.showForm = false;
            _this.showReport = true;
            _this.showOverlay = true;
            for (var i = 0; i < _this.numberQuestions; i++) {
                if (_this.reportData[i]['answers'].yo === _this.reportData[i]['userAnswers'].yo)
                    _this.numberCorrect++;
                if (_this.reportData[i]['answers'].tu === _this.reportData[i]['userAnswers'].tu)
                    _this.numberCorrect++;
                if (_this.reportData[i]['answers'].el === _this.reportData[i]['userAnswers'].el)
                    _this.numberCorrect++;
                if (_this.reportData[i]['answers'].nosotros === _this.reportData[i]['userAnswers'].nosotros)
                    _this.numberCorrect++;
                if (_this.reportData[i]['answers'].els === _this.reportData[i]['userAnswers'].els)
                    _this.numberCorrect++;
            }
            _this.report.score = Math.round((_this.numberCorrect / (_this.numberQuestions * 5)) * 100);
            _this.report.correctAnswers = _this.numberCorrect;
            _this.report.numberQuestions = _this.numberQuestions * 5;
            _this.report.title = 'Verb Conjugator Report';
            _this.report.headings = ['infinitive', 'yo', 'tu', 'el', 'nosotros', 'els'];
            _this.report.reportData = _this.reportData;
        };
        this.resetCurrentAnswers = function () {
            var answers = Object.keys(_this.currentAnswers);
            for (var _i = 0, answers_1 = answers; _i < answers_1.length; _i++) {
                var answer = answers_1[_i];
                _this.currentAnswers[answer] = '';
            }
        };
        this.resetInputAnswers = function () {
            _this.inputAnswers = {
                yo: '',
                tu: '',
                el: '',
                nosotros: '',
                els: ''
            };
        };
        this.getSelectedTextbox = function (textboxID) {
            _this.selectedTextbox = textboxID;
        };
        this.placeAccent = function (event) {
            var selectedTextbox = document.getElementById(_this.selectedTextbox);
            _this.accent = event;
            var currentPosition = selectedTextbox.selectionStart;
            var originalValue = selectedTextbox.value;
            var newValue = originalValue.substring(0, currentPosition) + _this.accent + originalValue.substring(currentPosition);
            selectedTextbox.value = newValue;
        };
        this.reset = function () {
            _this.resetCurrentAnswers();
            _this.currentVerb = 0;
            _this.numberCorrect = 0;
            _this.getNextVerb();
        };
        this.quit = function () {
            _this.router.navigateByUrl('');
        };
    }
    VerbConjugatorComponent.ctorParameters = function () { return [
        { type: _services_verb_service__WEBPACK_IMPORTED_MODULE_4__["VerbService"] },
        { type: _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__["RandomNumberGeneratorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"] }
    ]; };
    VerbConjugatorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-verb-conjugator',
            template: _raw_loader_verb_conjugator_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_verb_conjugator_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_verb_service__WEBPACK_IMPORTED_MODULE_4__["VerbService"], _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__["RandomNumberGeneratorService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"]])
    ], VerbConjugatorComponent);
    return VerbConjugatorComponent;
}());



/***/ }),

/***/ "ZOO+":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slider-report/slider-report.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"col-lg-12\">\n  <div class=\"col-lg-6 col-md-8 col-xs-12\">\n    <h2>{{ reportInfo.title }}</h2>\n    <h3>{{ reportInfo.scoreMessage }}</h3>\n    <div class=\"row header\">\n      <div class=\"col-lg-2 col-md-2 col-xs-2\" *ngFor='let heading of reportInfo.headings'>{{ heading }}</div>\n    </div>\n    <div class=\"row\" *ngFor='let response of reportInfo.responses'>\n      <div class=\"col-lg-2 col-md-2 col-xs-2\">{{ response.slideSet }}</div>\n      <div class=\"col-lg-2 col-md-2 col-xs-2\">\n        <div>{{ response.translations[0] }}</div>\n        <div>{{ response.answers[0] }}</div>\n      </div>\n      <div class=\"col-lg-2 col-md-2 col-xs-2\">\n        <div>{{ response.translations[1] }}</div>\n        <div>{{ response.answers[1] }}</div>\n      </div>\n      <div class=\"col-lg-2 col-md-2 col-xs-2\">\n        <div>{{ response.translations[2] }}</div>\n        <div>{{ response.answers[2] }}</div>\n      </div>\n      <div class=\"col-lg-2 col-md-2 col-xs-2\">\n        <div>{{ response.translations[3] }}</div>\n        <div>{{ response.answers[3] }}</div>\n      </div>\n      <div class=\"col-lg-2 col-md-2 col-xs-2\">\n        <div>{{ response.translations[4] }}</div>\n        <div>{{ response.answers[4] }}</div>\n      </div>\n    </div>\n    <form>\n      <div id=\"buttons\" class=\"col-lg-12 col-xs-12 buttons\">\n        <input type=\"button\" id=\"replayBtn\" value=\"replay\" (click)=\"replay()\" />\n        <input type=\"button\" id=\"quitBtn\" value=\"quit\" (click)=\"quit()\" />\n      </div>\n    </form>\n  </div>\n</section>");

/***/ }),

/***/ "ZytZ":
/*!************************************************************************************!*\
  !*** ./src/app/components/vocabulary-flashcard/vocabulary-flashcard.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-family: 'Roboto', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nsection h1 {\r\n  margin-top: 8.0rem;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  padding-bottom: 50px;\r\n  font-family: \"Open Sans\", serif;\r\n  text-transform: capitalize;\r\n  font-weight: normal;\r\n  font-size: 175%;\r\n}\r\n\r\nsection > div {\r\n  margin: 0 auto;\r\n  padding: 0;\r\n}\r\n\r\nsection div fieldset {\r\n  margin: 0 auto;\r\n  margin-bottom: 25px;\r\n  padding: 0;\r\n  text-align: center;\r\n  border: none;\r\n}\r\n\r\ndiv.buttons {\r\n  margin: 0;\r\n  padding-top: 25px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.button {\r\n  margin-right: 0.15rem;\r\n  margin-left:  0.15rem;\r\n  padding: 0.75rem;\r\n  border: none;\r\n  text-transform: uppercase;\r\n  color: rgb(255, 255, 255);\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  font-family: \"Roboto\", sans-serif;\r\n  border-radius: 5px;\r\n  font-size: 100%;\r\n}\r\n\r\n.flip {\r\n  background: rgb(0, 123, 255);\r\n}\r\n\r\n.reset {\r\n  background: rgb(52, 58, 64);\r\n}\r\n\r\n.next, .search {\r\n  background: rgb(30, 126, 52);\r\n}\r\n\r\n.search {\r\n  margin-left: 0.75rem;\r\n}\r\n\r\nselect {\r\n  padding: 10px;\r\n  border-radius: 0.8rem;\r\n  border: 2px solid #CCC;\r\n}\r\n\r\n.or {\r\n  margin: 10px 0;\r\n  font-size: 125%;\r\n  font-weight: bold;\r\n}\r\n\r\n[type='text'] {\r\n  padding: 10px;\r\n  border-radius: 0.8rem;\r\n  border: 2px solid #CCC;\r\n}\r\n\r\n.card {\r\n  margin: 0 auto;\r\n  margin-top: 40px;\r\n  padding: 0;\r\n  height: 25rem;\r\n  background: rgb(255, 255, 255);\r\n  position: relative;\r\n  transform-style: preserve-3d;\r\n  transform: transform 1s;\r\n  font-family: \"Roboto\", sans-serif;\r\n  border-radius: 2.0rem;\r\n  border: 1px solid rgb(112,128,144);\r\n}\r\n\r\n.face {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  position: absolute;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n  margin: 0 auto;\r\n}\r\n\r\n.front {\r\n  transform: rotateX(0deg);\r\n  background: rgb(0, 0, 0);\r\n  color: rgb(255, 255, 255);\r\n  border-radius: 2.0rem;\r\n}\r\n\r\n.back {\r\n  transform: rotateX(180deg);\r\n  color: rgb(198, 10, 30);\r\n}\r\n\r\nh2 {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  font-size: 3em;\r\n}\r\n\r\nh3 {\r\n  margin-top: 0;\r\n  font-size: 2em;\r\n  font-style: italic;\r\n  color:rgb(198, 10, 30);\r\n}\r\n\r\nimg {\r\n  margin-top: 2.0rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92b2NhYnVsYXJ5LWZsYXNoY2FyZC92b2NhYnVsYXJ5LWZsYXNoY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0IsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsaUNBQWlDO0VBQ2pDLHFCQUFxQjtFQUNyQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHlCQUFpQjtLQUFqQixzQkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92b2NhYnVsYXJ5LWZsYXNoY2FyZC92b2NhYnVsYXJ5LWZsYXNoY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuc2VjdGlvbiBoMSB7XHJcbiAgbWFyZ2luLXRvcDogOC4wcmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTc1JTtcclxufVxyXG5cclxuc2VjdGlvbiA+IGRpdiB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuc2VjdGlvbiBkaXYgZmllbGRzZXQge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5kaXYuYnV0dG9ucyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjE1cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAgMC4xNXJlbTtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG59XHJcblxyXG4uZmxpcCB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDAsIDEyMywgMjU1KTtcclxufVxyXG5cclxuLnJlc2V0IHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNTIsIDU4LCA2NCk7XHJcbn1cclxuXHJcbi5uZXh0LCAuc2VhcmNoIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMzAsIDEyNiwgNTIpO1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICBtYXJnaW4tbGVmdDogMC43NXJlbTtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjQ0NDO1xyXG59XHJcblxyXG4ub3Ige1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTI1JTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuW3R5cGU9J3RleHQnXSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgI0NDQztcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBoZWlnaHQ6IDI1cmVtO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB0cmFuc2Zvcm06IHRyYW5zZm9ybSAxcztcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXItcmFkaXVzOiAyLjByZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExMiwxMjgsMTQ0KTtcclxufVxyXG5cclxuLmZhY2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZnJvbnQge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3JkZXItcmFkaXVzOiAyLjByZW07XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICBjb2xvcjogcmdiKDE5OCwgMTAsIDMwKTtcclxufVxyXG5cclxuaDIge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LXNpemU6IDNlbTtcclxufVxyXG5cclxuaDMge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGNvbG9yOnJnYigxOTgsIDEwLCAzMCk7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWFyZ2luLXRvcDogMi4wcmVtO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "aGN6":
/*!************************************************************************************!*\
  !*** ./src/app/components/letter-pronunciation/letter-pronunciation.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-family: \"Roboto\", sans-serif;\r\n  }\r\n  \r\n  section > h1 {\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    padding-bottom: 50px;\r\n    font-family: \"Alfa Slab One\", serif;\r\n    text-transform: capitalize;\r\n    font-weight: normal;\r\n    font-size: 175%;\r\n  }\r\n  \r\n  #container {\r\n    width: 40rem;\r\n    border: 1px solid rgb(255, 0, 0);\r\n    margin: 0 auto;\r\n    padding: 1.0rem;\r\n    color: rgb(255, 255, 255);\r\n  }\r\n  \r\n  .row {\r\n      width: 100%;\r\n      margin: 0 auto;\r\n      margin-bottom: 0.1em;\r\n  }\r\n  \r\n  dl {\r\n      width: 100%;\r\n      display: flex;\r\n      flex-direction: row;\r\n      margin: 0;\r\n      margin-left: 2px;\r\n      padding-top: 0.3em;\r\n      padding-bottom: 0.3em;\r\n      background: rgb(255, 0, 0);\r\n    }\r\n  \r\n  dt {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    width: 40%;\r\n    margin-right: 0.3em;\r\n  }\r\n  \r\n  dd {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    width: 60%;\r\n    margin-left: 0.1em;\r\n    font-weight: bold;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZXR0ZXItcHJvbnVuY2lhdGlvbi9sZXR0ZXItcHJvbnVuY2lhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQywwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUJBQXlCO0VBQzNCOztFQUVBO01BQ0ksV0FBVztNQUNYLGNBQWM7TUFDZCxvQkFBb0I7RUFDeEI7O0VBRUE7TUFDSSxXQUFXO01BQ1gsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixTQUFTO01BQ1QsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsMEJBQTBCO0lBQzVCOztFQUVGO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sZXR0ZXItcHJvbnVuY2lhdGlvbi9sZXR0ZXItcHJvbnVuY2lhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiA+IGgxIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkFsZmEgU2xhYiBPbmVcIiwgc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE3NSU7XHJcbiAgfVxyXG5cclxuICAjY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA0MHJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDAsIDApO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxLjByZW07XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIH1cclxuXHJcbiAgLnJvdyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XHJcbiAgfVxyXG5cclxuICBkbCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwLjNlbTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDAuM2VtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgZHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuM2VtO1xyXG4gIH1cclxuXHJcbiAgZGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "c8L+":
/*!******************************************************************************************!*\
  !*** ./src/app/components/vocabulary-overlay-form/vocabulary-overlay-form.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n  margin: 0 auto;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 97;\r\n  position: absolute;\r\n}\r\n\r\nfieldset {\r\n  margin: 0 auto;\r\n  padding: 30px;\r\n  border: none;\r\n  border-radius: 1.25rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: \"Roboto\", sans-serif;\r\n  background: rgb(255 255 255);\r\n  border: 1px solid black;\r\n  font-size: 115%;\r\n}\r\n\r\ndl {\r\n  padding: 0;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 1.25rem;\r\n  margin-left: 0;\r\n}\r\n\r\ndt {\r\n  margin: 0;\r\n  padding: 0;\r\n  clear: both;\r\n  font-weight: bold;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n.container{\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 25%;\r\n  padding-left: 35px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\ndd input {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  height: 0;\r\n  width: 0;\r\n}\r\n\r\n.radioCategory {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #eee;\r\n  border-radius: 50%;\r\n}\r\n\r\ndd input:checked ~ .radioCategory {\r\n  background-color: #2196F3;\r\n}\r\n\r\ndd .radioCategory:after {\r\n  content: '';\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\ndd input:checked ~ .radioCategory:after {\r\n  display: block;\r\n}\r\n\r\ndd .radioCategory:after {\r\n  top: 9px;\r\n  left: 9px;\r\n  width: 8px;\r\n  height: 8px;\r\n  border-radius: 50%;\r\n  background: white;\r\n}\r\n\r\n#buttons {\r\n  margin-bottom: 0;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\ninput[type='button'] {\r\n  padding: 0.625rem;\r\n  width: 100px;\r\n  background: rgb(30, 126, 52);\r\n  border: none;\r\n  border-radius: 10px;\r\n  text-transform: uppercase;\r\n  color: rgb(255, 255, 255);\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  font-size: 1.0rem;\r\n}\r\n\r\nselect {\r\n  margin-top: 0.6rem;\r\n  border-radius: 10px;\r\n  border: 2px solid #CCC;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92b2NhYnVsYXJ5LW92ZXJsYXktZm9ybS92b2NhYnVsYXJ5LW92ZXJsYXktZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQ0FBaUM7RUFDakMsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFFdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZvY2FidWxhcnktb3ZlcmxheS1mb3JtL3ZvY2FidWxhcnktb3ZlcmxheS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiA5NztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUgMjU1IDI1NSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxMTUlO1xyXG59XHJcblxyXG5kbCB7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG5kdCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5kZCBpbnB1dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5yYWRpb0NhdGVnb3J5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5kZCBpbnB1dDpjaGVja2VkIH4gLnJhZGlvQ2F0ZWdvcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbn1cclxuXHJcbmRkIC5yYWRpb0NhdGVnb3J5OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuZGQgaW5wdXQ6Y2hlY2tlZCB+IC5yYWRpb0NhdGVnb3J5OmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuZGQgLnJhZGlvQ2F0ZWdvcnk6YWZ0ZXIge1xyXG4gIHRvcDogOXB4O1xyXG4gIGxlZnQ6IDlweDtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuI2J1dHRvbnMge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT0nYnV0dG9uJ10ge1xyXG4gIHBhZGRpbmc6IDAuNjI1cmVtO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMzAsIDEyNiwgNTIpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIG1hcmdpbi10b3A6IDAuNnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNDQ0M7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "daRE":
/*!****************************************************************************!*\
  !*** ./src/app/components/vocabulary-input/vocabulary-input.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Roboto', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nsection h1 {\r\n  margin-top: 8.0rem;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  padding-bottom: 50px;\r\n  font-family: \"Open Sans\", serif;\r\n  text-transform: capitalize;\r\n  font-weight: normal;\r\n  font-size: 175%;\r\n}\r\n\r\nsection form {\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nfieldset {\r\n  border: 10px solid rgb(198, 10, 30);\r\n  border-radius: 2.0rem;\r\n  padding: 0;\r\n  margin: 0 auto;\r\n  padding: 1.0rem;\r\n  background:  rgb(255, 196, 0);\r\n}\r\n\r\nsection div {\r\n  margin: 30px 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n}\r\n\r\ndl {\r\n  padding: 0;\r\n  padding-top: 0.85rem;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  border-top: 1px solid rgb(198, 10, 30);\r\n}\r\n\r\ndl:nth-of-type(1) {\r\n  margin-top: -1px;\r\n}\r\n\r\ndt {\r\n  margin: 0;\r\n  margin-top: 5px;\r\n  margin-right: 10px;\r\n  padding: 0;\r\n  width: 30%;\r\n  font-weight: bold;\r\n  text-transform: capitalize;\r\n  text-align: right;\r\n  font-size: 125%;\r\n}\r\n\r\ndd {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 70%;\r\n}\r\n\r\noption[value=\"\"][disabled] {\r\n  display: none;\r\n}\r\n\r\ndd input {\r\n  margin: 0;\r\n  padding: 10px;\r\n  width: 100%;\r\n  border-radius: 0.8rem;\r\n  border: 2px solid #CCC;\r\n}\r\n\r\ndl:nth-of-type(1) dt {\r\n  margin-top: -1px;\r\n}\r\n\r\ndl:first-child {\r\n  border-top: none;\r\n}\r\n\r\n.select {\r\n  padding-top: 3px;\r\n}\r\n\r\ndl.gender dd div {\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n}\r\n\r\ndl.gender dd label {\r\n  padding-right: 20px;\r\n  align-self: flex-start;\r\n  text-transform: capitalize;\r\n}\r\n\r\n#image {\r\n  border: none;\r\n}\r\n\r\ninput[type=\"button\"], input[type=\"submit\"] {\r\n  border: none;\r\n  padding: 0.625rem;\r\n  font-size: 0.75em;\r\n  font-weight: bold;\r\n  width: 100px;\r\n  text-transform: uppercase;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n#submitBtn {\r\n  background: rgb(30, 126, 52);\r\n  color: rgb(255, 255, 255);\r\n}\r\n\r\n#accentBtn {\r\n  background: rgb(23, 162, 184);\r\n  color: rgb(255, 255, 255);\r\n  width: 125px;\r\n  margin-top: -1.5em;\r\n\r\n}\r\n\r\nselect {\r\n  padding: 8px;\r\n  border-radius: 0.8rem;\r\n  border: 2px solid #CCC;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92b2NhYnVsYXJ5LWlucHV0L3ZvY2FidWxhcnktaW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsK0JBQStCO0VBQy9CLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGNBQWM7RUFDZCxlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92b2NhYnVsYXJ5LWlucHV0L3ZvY2FidWxhcnktaW5wdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnNlY3Rpb24gaDEge1xyXG4gIG1hcmdpbi10b3A6IDguMHJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE3NSU7XHJcbn1cclxuXHJcbnNlY3Rpb24gZm9ybSB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYigxOTgsIDEwLCAzMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMi4wcmVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMS4wcmVtO1xyXG4gIGJhY2tncm91bmQ6ICByZ2IoMjU1LCAxOTYsIDApO1xyXG59XHJcblxyXG5zZWN0aW9uIGRpdiB7XHJcbiAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmRsIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAwLjg1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxOTgsIDEwLCAzMCk7XHJcbn1cclxuXHJcbmRsOm50aC1vZi10eXBlKDEpIHtcclxuICBtYXJnaW4tdG9wOiAtMXB4O1xyXG59XHJcblxyXG5kdCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMzAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMTI1JTtcclxufVxyXG5cclxuZGQge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbm9wdGlvblt2YWx1ZT1cIlwiXVtkaXNhYmxlZF0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmRkIGlucHV0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgI0NDQztcclxufVxyXG5cclxuZGw6bnRoLW9mLXR5cGUoMSkgZHQge1xyXG4gIG1hcmdpbi10b3A6IC0xcHg7XHJcbn1cclxuXHJcbmRsOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG59XHJcblxyXG4uc2VsZWN0IHtcclxuICBwYWRkaW5nLXRvcDogM3B4O1xyXG59XHJcblxyXG5kbC5nZW5kZXIgZGQgZGl2IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG5kbC5nZW5kZXIgZGQgbGFiZWwge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuI2ltYWdlIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwLjYyNXJlbTtcclxuICBmb250LXNpemU6IDAuNzVlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNzdWJtaXRCdG4ge1xyXG4gIGJhY2tncm91bmQ6IHJnYigzMCwgMTI2LCA1Mik7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuI2FjY2VudEJ0biB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIzLCAxNjIsIDE4NCk7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB3aWR0aDogMTI1cHg7XHJcbiAgbWFyZ2luLXRvcDogLTEuNWVtO1xyXG5cclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNDQ0M7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "ddB9":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"card\">\r\n  <h3>{{cardHeader}}</h3>\r\n  <p class=\"summary\">{{cardSummary}}</p>\r\n</section>\r\n");

/***/ }),

/***/ "dwKN":
/*!*****************************************************************************!*\
  !*** ./src/app/components/conjugator-report/conjugator-report.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConjugatorReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConjugatorReportComponent", function() { return ConjugatorReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_conjugator_report_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./conjugator-report.component.html */ "0bzL");
/* harmony import */ var _conjugator_report_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conjugator-report.component.css */ "7l9Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






var ConjugatorReportComponent = /** @class */ (function () {
    function ConjugatorReportComponent(document, router) {
        this.document = document;
        this.router = router;
    }
    ConjugatorReportComponent.prototype.replay = function () {
        this.document.location.reload();
    };
    ConjugatorReportComponent.prototype.quit = function () {
        this.router.navigateByUrl('');
    };
    ConjugatorReportComponent.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    ConjugatorReportComponent.propDecorators = {
        reportInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    ConjugatorReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-conjugator-report',
            template: _raw_loader_conjugator_report_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_conjugator_report_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ConjugatorReportComponent);
    return ConjugatorReportComponent;
}());



/***/ }),

/***/ "eI/N":
/*!**********************************************************!*\
  !*** ./src/app/components/overlay/overlay.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#overlay {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0 0 0 / 0.85);\n  z-index: 95;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vdmVybGF5L292ZXJsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3ZlcmxheS9vdmVybGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjb3ZlcmxheSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwIDAgMCAvIDAuODUpO1xuICB6LWluZGV4OiA5NTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuIl19 */");

/***/ }),

/***/ "eL57":
/*!*************************************************************************!*\
  !*** ./src/app/components/spanish-accents/spanish-accents.component.ts ***!
  \*************************************************************************/
/*! exports provided: SpanishAccentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpanishAccentsComponent", function() { return SpanishAccentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_spanish_accents_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./spanish-accents.component.html */ "sDtg");
/* harmony import */ var _spanish_accents_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spanish-accents.component.css */ "DTc3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var SpanishAccentsComponent = /** @class */ (function () {
    function SpanishAccentsComponent() {
        this.accentMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    SpanishAccentsComponent.prototype.accentClick = function (event) {
        var accent = event.target.value;
        this.accentMessage.emit(accent);
    };
    SpanishAccentsComponent.ctorParameters = function () { return []; };
    SpanishAccentsComponent.propDecorators = {
        accentMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    SpanishAccentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-spanish-accents',
            template: _raw_loader_spanish_accents_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_spanish_accents_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SpanishAccentsComponent);
    return SpanishAccentsComponent;
}());



/***/ }),

/***/ "hFuq":
/*!*************************************************************************!*\
  !*** ./src/app/components/vocabulary-quiz/vocabulary-quiz.component.ts ***!
  \*************************************************************************/
/*! exports provided: VocabularyQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VocabularyQuizComponent", function() { return VocabularyQuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vocabulary_quiz_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vocabulary-quiz.component.html */ "iIGr");
/* harmony import */ var _vocabulary_quiz_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vocabulary-quiz.component.css */ "XnZX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_vocabulary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/vocabulary.service */ "N+FS");
/* harmony import */ var _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/random-number-generator.service */ "W26Q");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-angular */ "/IUn");








var VocabularyQuizComponent = /** @class */ (function () {
    function VocabularyQuizComponent(vs, apollo, randomNumberService, router) {
        var _this = this;
        this.vs = vs;
        this.apollo = apollo;
        this.randomNumberService = randomNumberService;
        this.router = router;
        this.showOverlay = true;
        this.showVocabularyOverlay = true;
        this.showForm = false;
        this.showReport = false;
        this.numberQuestions = 0;
        this.word = '';
        this.answers = [];
        this.questionSet = [];
        this.answerSet = [];
        this.currentQuestion = 0;
        this.numberCorrect = 0;
        this.report = {};
        this.responses = [];
        this.createQuestionSet = function () {
            var categoryObject = {
                query: _this.vs.Category,
                variables: {
                    category: parseInt(_this.selectedCategory)
                }
            };
            var dictionaryObject = {
                query: _this.vs.Dictionary
            };
            var queryObject = (_this.selectedCategory) ? categoryObject : dictionaryObject;
            _this.queryDictionary = _this.apollo.watchQuery(queryObject)
                .valueChanges
                .subscribe(function (result) {
                var dictionaryData = JSON.parse(JSON.stringify(result.data));
                _this.dictionary = (_this.selectedCategory) ? dictionaryData.category : dictionaryData.dictionary;
                _this.randomNumberService.generateRandomNumberArray(_this.numberQuestions, _this.dictionary.length, _this.questionSet);
                _this.getCurrentQuestion(_this.currentQuestion);
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        };
    }
    VocabularyQuizComponent.prototype.getOverlayData = function (data) {
        if (!data.isVisible) {
            this.showOverlay = data.isVisible;
            this.showVocabularyOverlay = data.isVisible;
            this.showForm = true;
            this.selectedCategory = data.category;
            this.numberQuestions = data.numberQuestions;
            this.createQuestionSet();
        }
    };
    VocabularyQuizComponent.prototype.getCurrentQuestion = function (question) {
        var _this = this;
        var currentWord = this.questionSet[question];
        this.word = this.dictionary[currentWord].word;
        this.answer = this.dictionary[currentWord].translation;
        this.answerSet = [];
        this.answerSet.push(currentWord);
        this.randomNumberService.generateRandomNumberArray(undefined, this.dictionary.length, this.answerSet);
        this.answers = this.answerSet.map(function (answer) { return _this.dictionary[answer].translation; });
        this.answers.sort();
    };
    VocabularyQuizComponent.prototype.getNextQuestion = function () {
        var numberQuestions = this.questionSet.length;
        if (this.currentQuestion < numberQuestions) {
            this.currentQuestion++;
            this.getCurrentQuestion(this.currentQuestion);
        }
    };
    VocabularyQuizComponent.prototype.getAnswer = function () {
        var responseObj = {};
        var score = 0;
        var response = this.quizAnswer;
        if (response === this.answer)
            this.numberCorrect++;
        responseObj.question = this.word;
        responseObj.answer = this.answer;
        responseObj.response = response;
        this.responses.push(responseObj);
        if (this.currentQuestion === this.numberQuestions - 1) {
            this.showForm = false;
            this.showReport = true;
            this.showOverlay = true;
            score = Math.round((this.numberCorrect / this.numberQuestions) * 100);
            this.report.title = 'Vocabulary Quiz Report';
            this.report.scoreMessage = 'You scored ' + score + '%';
            this.report.headings = ['word', 'answer', 'response'];
            this.report.responses = this.responses;
        }
        else {
            this.quizAnswer = '';
            this.getNextQuestion();
        }
    };
    VocabularyQuizComponent.prototype.reset = function () {
        this.answer = '';
        this.currentQuestion = 0;
        this.numberCorrect = 0;
        this.getNextQuestion();
    };
    VocabularyQuizComponent.prototype.quit = function () {
        this.router.navigateByUrl('');
    };
    VocabularyQuizComponent.ctorParameters = function () { return [
        { type: _services_vocabulary_service__WEBPACK_IMPORTED_MODULE_4__["VocabularyService"] },
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"] },
        { type: _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__["RandomNumberGeneratorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    VocabularyQuizComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-vocabulary-quiz',
            template: _raw_loader_vocabulary_quiz_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_vocabulary_quiz_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vocabulary_service__WEBPACK_IMPORTED_MODULE_4__["VocabularyService"], apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"], _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__["RandomNumberGeneratorService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], VocabularyQuizComponent);
    return VocabularyQuizComponent;
}());



/***/ }),

/***/ "iIGr":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vocabulary-quiz/vocabulary-quiz.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-overlay *ngIf='showOverlay'></app-overlay>\n<app-vocabulary-overlay-form (formChange)='getOverlayData($event)' *ngIf='showVocabularyOverlay'></app-vocabulary-overlay-form>\n<app-report [reportInfo]=\"report\" *ngIf='showReport'></app-report>\n<section>\n  <h1>vocabulary quiz</h1>\n\n  <form *ngIf='showForm' class=\"col-lg-4 col-md-6 col-xs-12\">\n    <fieldset class=\"col-lg-12 col-xs-12\">\n      <h2>[ {{ word }} ]</h2>\n\n      <div id=\"answers\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <input type=\"radio\" id=\"quizAnswer_0\" name=\"quizAnswer\" [(ngModel)]=\"quizAnswer\" value={{this.answers[0]}} />\n            <label for='quizAnswer_0'>{{ this.answers[0] }}</label>\n          </div>\n          <div class=\"col-xs-12\">\n            <input type=\"radio\" id=\"quizAnswer_1\" name=\"quizAnswer\" [(ngModel)]=\"quizAnswer\" value={{this.answers[1]}} />\n            <label for='quizAnswer_1'>{{ this.answers[1] }}</label>\n          </div>\n          <div class=\"col-xs-12\">\n            <input type=\"radio\" id=\"quizAnswer_2\" name=\"quizAnswer\" [(ngModel)]=\"quizAnswer\" value={{this.answers[2]}} />\n            <label for='quizAnswer_2'>{{ this.answers[2] }}</label>\n          </div>\n          <div class=\"col-xs-12\">\n            <input type=\"radio\" id=\"quizAnswer_3\" name=\"quizAnswer\" [(ngModel)]=\"quizAnswer\" value={{this.answers[3]}} />\n            <label for='quizAnswer_3'>{{ this.answers[3] }}</label>\n          </div>\n          <div class=\"col-xs-12\">\n            <input type=\"radio\" id=\"quizAnswer_4\" name=\"quizAnswer\" [(ngModel)]=\"quizAnswer\" value={{this.answers[4]}} />\n            <label for='quizAnswer_4'>{{ this.answers[4] }}</label>\n          </div>\n          <div class=\"col-xs-12\">\n            <input type=\"radio\" id=\"quizAnswer_5\" name=\"quizAnswer\" [(ngModel)]=\"quizAnswer\" value={{this.answers[5]}} />\n            <label for='quizAnswer_5'>{{ this.answers[5] }}</label>\n          </div>\n        </div>\n      </div>\n    </fieldset>\n    <div id=\"buttons\">\n      <input type=\"button\" id=\"answerBtn\" value=\"answer\" (click)=\"getAnswer()\" />\n      <input type=\"button\" id=\"resetBtn\" value=\"reset\" (click)=\"reset()\" />\n      <input type=\"button\" id=\"quitBtn\" value=\"quit\" (click)=\"quit()\" />\n    </div>\n  </form>\n\n</section>");

/***/ }),

/***/ "j5kK":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vocabulary-overlay-form/vocabulary-overlay-form.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <form class=\"col-lg-4\">\n    <fieldset class=\"col-lg-12\">\n      <dl>\n        <dt class=\"col-lg-5\">What category do you want to test?</dt>\n        <dd class=\"col-lg-7\">\n          <select id=\"category\"name=\"category\" [(ngModel)]=\"category\"></select>\n        </dd>\n      </dl>\n      <dl>\n        <dt class=\"col-lg-5\">How many questions would you like?</dt>\n        <dd class=\"col-lg-7\">\n          <label for=\"words5\" class=\"container\">5\n            <input type=\"radio\" id=\"words5\" name=\"numberQuestions\" [(ngModel)]=\"numberQuestions\" value=\"5\" />\n            <span class=\"radioCategory\"></span>\n          </label>\n\n          <label for=\"words10\" class=\"container\">10\n            <input type=\"radio\" id=\"words10\" name=\"numberQuestions\" [(ngModel)]=\"numberQuestions\" value=\"10\" />\n            <span class=\"radioCategory\"></span>\n          </label>\n\n          <label for=\"words15\" class=\"container\">15\n            <input type=\"radio\" id=\"words15\" name=\"numberQuestions\" [(ngModel)]=\"numberQuestions\" value=\"15\" />\n            <span class=\"radioCategory\"></span>\n          </label>\n\n          <label for=\"words20\" class=\"container\">20\n            <input type=\"radio\" id=\"words20\" name=\"numberQuestions\" [(ngModel)]=\"numberQuestions\" value=\"20\" />\n            <span class=\"radioCategory\"></span>\n          </label>\n        </dd>\n      </dl>\n      <div id=\"buttons\">\n        <input type=\"button\" id=\"submitBtn\" name=\"submitBtn\" value=\"go\" (click)=\"onClick()\" />\n      </div>\n    </fieldset>\n  </form>\n</section>\n");

/***/ }),

/***/ "jcRC":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/vocabulary-overlay-form/vocabulary-overlay-form.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: VocabularyOverlayFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VocabularyOverlayFormComponent", function() { return VocabularyOverlayFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vocabulary_overlay_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vocabulary-overlay-form.component.html */ "j5kK");
/* harmony import */ var _vocabulary_overlay_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vocabulary-overlay-form.component.css */ "c8L+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_vocabulary_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/vocabulary-categories.service */ "JLPh");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-angular */ "/IUn");






var VocabularyOverlayFormComponent = /** @class */ (function () {
    function VocabularyOverlayFormComponent(vcs, apollo) {
        var _this = this;
        this.vcs = vcs;
        this.apollo = apollo;
        this.isVisible = true;
        this.formChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.setCategories = function () {
            var categorySelect = document.getElementById('category');
            var firstOption = document.createElement('option');
            firstOption.disabled = true;
            firstOption.selected = true;
            firstOption.label = 'SELECT A CATEGORY';
            categorySelect.appendChild(firstOption);
            var secondOption = document.createElement('option');
            secondOption.label = 'All';
            categorySelect.appendChild(secondOption);
            for (var i = 0; i < _this.categories.length; i++) {
                var category = _this.categories[i];
                var option = document.createElement('option');
                option.style.textTransform = "Capitalize";
                option.label = category['category'];
                option.value = category['id'];
                categorySelect.appendChild(option);
            }
        };
    }
    VocabularyOverlayFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryCategories = this.apollo.watchQuery({
            query: this.vcs.Categories
        }).valueChanges
            .subscribe(function (result) {
            var categoryData = JSON.parse(JSON.stringify(result.data));
            _this.categories = categoryData.categories;
            _this.setCategories();
        });
    };
    VocabularyOverlayFormComponent.prototype.onClick = function () {
        var overlayData = {
            isVisible: !this.isVisible,
            numberQuestions: this.numberQuestions,
            category: this.category
        };
        this.formChange.emit(overlayData);
    };
    VocabularyOverlayFormComponent.ctorParameters = function () { return [
        { type: _services_vocabulary_categories_service__WEBPACK_IMPORTED_MODULE_4__["VocabularyCategoriesService"] },
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"] }
    ]; };
    VocabularyOverlayFormComponent.propDecorators = {
        formChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    VocabularyOverlayFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-vocabulary-overlay-form',
            template: _raw_loader_vocabulary_overlay_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_vocabulary_overlay_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vocabulary_categories_service__WEBPACK_IMPORTED_MODULE_4__["VocabularyCategoriesService"], apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"]])
    ], VocabularyOverlayFormComponent);
    return VocabularyOverlayFormComponent;
}());



/***/ }),

/***/ "jrYY":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/overlay/overlay.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"overlay\">\n</div>\n");

/***/ }),

/***/ "kN3+":
/*!*********************************************************!*\
  !*** ./src/app/components/marquee/marquee.component.ts ***!
  \*********************************************************/
/*! exports provided: MarqueeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarqueeComponent", function() { return MarqueeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_marquee_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./marquee.component.html */ "LApo");
/* harmony import */ var _marquee_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marquee.component.css */ "rRGI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var MarqueeComponent = /** @class */ (function () {
    function MarqueeComponent() {
    }
    MarqueeComponent.prototype.ngOnInit = function () {
    };
    MarqueeComponent.ctorParameters = function () { return []; };
    MarqueeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-marquee',
            template: _raw_loader_marquee_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_marquee_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], MarqueeComponent);
    return MarqueeComponent;
}());



/***/ }),

/***/ "lXt9":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card.component.html */ "ddB9");
/* harmony import */ var _card_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component.css */ "7/oO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.ctorParameters = function () { return []; };
    CardComponent.propDecorators = {
        cardImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        cardHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        cardSummary: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    CardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-card',
            template: _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            inputs: ['cardImage', 'cardHeader', 'cardSummary'],
            styles: [_card_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "nmTv":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/conjugator-overlay-form/conjugator-overlay-form.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ConjugatorOverlayFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConjugatorOverlayFormComponent", function() { return ConjugatorOverlayFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_conjugator_overlay_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./conjugator-overlay-form.component.html */ "/5gL");
/* harmony import */ var _conjugator_overlay_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conjugator-overlay-form.component.css */ "sPnC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _services_verb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/verb.service */ "UZr7");






var ConjugatorOverlayFormComponent = /** @class */ (function () {
    function ConjugatorOverlayFormComponent(apollo, vs) {
        var _this = this;
        this.apollo = apollo;
        this.vs = vs;
        this.isVisible = true;
        this.showRandom = false;
        this.showSingle = false;
        this.disableVerbSelect = false;
        this.formChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.getVerbs = function () {
            _this.queryVerbs = _this.apollo.watchQuery({
                query: _this.vs.Verbs
            })
                .valueChanges
                .subscribe(function (result) {
                var verbData = JSON.parse(JSON.stringify(result.data));
                _this.infinitives = verbData.verbs.sort(function (a, b) {
                    var verbA = a.infinitive;
                    var verbB = b.infinitive;
                    var comparison = 0;
                    if (verbA > verbB) {
                        comparison = 1;
                    }
                    else if (verbA < verbB) {
                        comparison = -1;
                    }
                    return comparison;
                });
                var infinitiveSelect = document.getElementById('verbSelect');
                var firstOption = document.createElement('option');
                firstOption.value = '';
                firstOption.disabled = true;
                firstOption.selected = true;
                firstOption.innerHTML = 'SELECT A VERB ...';
                infinitiveSelect.appendChild(firstOption);
                var numVerbs = _this.infinitives.length;
                for (var i = 0; i < numVerbs; i++) {
                    var infinitive = _this.infinitives[i].infinitive;
                    var option = document.createElement('option');
                    option.value = _this.infinitives[i].id;
                    option.label = infinitive.charAt(0).toUpperCase() + infinitive.slice(1);
                    infinitiveSelect.appendChild(option);
                }
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        };
        this.getTenses = function () {
            _this.queryTenses = _this.apollo.watchQuery({
                query: _this.vs.Tenses
            })
                .valueChanges
                .subscribe(function (result) {
                var tensesData = JSON.parse(JSON.stringify(result.data));
                _this.tenses = tensesData.tenses;
                _this.setTenses();
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        };
        this.setTenses = function () {
            var tenseSelect = document.getElementById('tenseSelect');
            var firstOption = document.createElement('option');
            firstOption = document.createElement('option');
            firstOption.disabled = true;
            firstOption.selected = true;
            firstOption.innerHTML = 'SELECT A TENSE ...';
            tenseSelect.appendChild(firstOption);
            var numTenses = _this.tenses.length;
            for (var i = 0; i < numTenses; i++) {
                var tense = _this.tenses[i];
                var option = document.createElement('option');
                option.label = tense['tense'];
                option.value = tense['id'];
                tenseSelect.appendChild(option);
            }
        };
    }
    ConjugatorOverlayFormComponent.prototype.ngOnInit = function () {
        this.getTenses();
    };
    ConjugatorOverlayFormComponent.prototype.onChange = function () {
        if (this.conjugationType === 'random') {
            this.showRandom = true;
            this.showSingle = false;
        }
        else if (this.conjugationType === 'single') {
            this.showRandom = false;
            this.showSingle = true;
            this.getVerbs();
        }
    };
    ConjugatorOverlayFormComponent.prototype.onClick = function () {
        var overlayData = {
            isVisible: !this.isVisible,
            numberVerbs: this.numberVerbs,
            verb: this.verbSelect,
            tense: this.tenseSelect
        };
        var tenseSelected = this.tenseSelect;
        var verbOptionSelect = this.numberVerbs || this.verbSelect;
        if (tenseSelected && verbOptionSelect)
            this.formChange.emit(overlayData);
    };
    ConjugatorOverlayFormComponent.ctorParameters = function () { return [
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"] },
        { type: _services_verb_service__WEBPACK_IMPORTED_MODULE_5__["VerbService"] }
    ]; };
    ConjugatorOverlayFormComponent.propDecorators = {
        formChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    ConjugatorOverlayFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-conjugator-overlay-form',
            template: _raw_loader_conjugator_overlay_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_conjugator_overlay_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"], _services_verb_service__WEBPACK_IMPORTED_MODULE_5__["VerbService"]])
    ], ConjugatorOverlayFormComponent);
    return ConjugatorOverlayFormComponent;
}());



/***/ }),

/***/ "o0oR":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/letter-pronunciation/letter-pronunciation.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <h1>letter pronunciation</h1>\n\n  <div id=\"container\">\n    <div class=\"row\">\n      <dl>\n        <dt>a</dt>\n        <dd>ah</dd>\n      </dl>\n      <dl>\n        <dt>n</dt>\n        <dd>en-eh</dd>\n      </dl>\n    </div>\n    <div class=\"row\">\n        <dl>\n          <dt>b</dt>\n          <dd>beh</dd>\n        </dl>\n        <dl>\n          <dt>ñ</dt>\n          <dd>en-yeh</dd>\n        </dl>\n      </div>\n      <div class=\"row\">\n        <dl>\n          <dt>c</dt>\n          <dd>seh</dd>\n        </dl>\n        <dl>\n          <dt>o</dt>\n          <dd>oh</dd>\n        </dl>\n      </div>\n      <div class=\"row\">\n        <dl>\n          <dt>ch</dt>\n          <dd>cheh</dd>\n        </dl>\n        <dl>\n          <dt>p</dt>\n          <dd>peh</dd>\n        </dl>\n      </div>\n      <div class=\"row\">\n        <dl>\n          <dt>d</dt>\n          <dd>deh</dd>\n        </dl>\n        <dl>\n          <dt>q</dt>\n          <dd>coo</dd>\n        </dl>\n      </div>\n      <div class=\"row\">\n        <dl>\n          <dt>e</dt>\n          <dd>eh</dd>\n        </dl>\n        <dl>\n          <dt>r</dt>\n          <dd>er-eh</dd>\n        </dl>\n      </div>\n      <div class=\"row\">\n        <dl>\n          <dt>f</dt>\n          <dd>ef-eh</dd>\n        </dl>\n        <dl>\n          <dt>rr</dt>\n          <dd>air-eh</dd>\n        </dl>\n      </div>\n      <div class=\"row\">\n        <dl>\n          <dt>g</dt>\n          <dd>heh</dd>\n        </dl>\n        <dl>\n          <dt>s</dt>\n          <dd>es-eh</dd>\n        </dl>\n      </div>\n      <div class=\"row\">\n        <dl>\n          <dt>h</dt>\n          <dd>ah-cheh</dd>\n        </dl>\n        <dl>\n          <dt>t</dt>\n          <dd>teh</dd>\n        </dl>\n      </div>\n      <div class=\"row\">\n        <dl>\n          <dt>i</dt>\n          <dd>ee</dd>\n        </dl>\n        <dl>\n          <dt>u</dt>\n          <dd>oo</dd>\n        </dl>\n      </div>\n      <div class=\"row\">\n        <dl>\n          <dt>j</dt>\n          <dd>ho-tah</dd>\n        </dl>\n        <dl>\n          <dt>v</dt>\n          <dd>veh</dd>\n        </dl>\n      </div>\n      <div class=\"row\">\n        <dl>\n          <dt>k</dt>\n          <dd>kah</dd>\n        </dl>\n        <dl>\n          <dt>w</dt>\n          <dd>doh-vleh-veh</dd>\n        </dl>\n      </div>\n      <div class=\"row\">\n        <dl>\n          <dt>l</dt>\n          <dd>el-eh</dd>\n        </dl>\n        <dl>\n          <dt>x</dt>\n          <dd>eh-keys</dd>\n        </dl>\n      </div>\n      <div class=\"row\">\n        <dl>\n          <dt>ll</dt>\n          <dd>eh-yeh</dd>\n        </dl>\n        <dl>\n          <dt>y</dt>\n          <dd>jeh</dd>\n        </dl>\n      </div>\n      <div class=\"row\">\n        <dl>\n          <dt>m</dt>\n          <dd>em-eh</dd>\n        </dl>\n        <dl>\n          <dt>z</dt>\n          <dd>seh-tah</dd>\n        </dl>\n      </div>\n    </div>\n  </section>\n\n");

/***/ }),

/***/ "o2r/":
/*!***********************************************************************************!*\
  !*** ./src/app/components/letter-pronunciation/letter-pronunciation.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LetterPronunciationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterPronunciationComponent", function() { return LetterPronunciationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_letter_pronunciation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./letter-pronunciation.component.html */ "o0oR");
/* harmony import */ var _letter_pronunciation_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./letter-pronunciation.component.css */ "aGN6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var LetterPronunciationComponent = /** @class */ (function () {
    function LetterPronunciationComponent() {
    }
    LetterPronunciationComponent.prototype.ngOnInit = function () {
    };
    LetterPronunciationComponent.ctorParameters = function () { return []; };
    LetterPronunciationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-letter-pronunciation',
            template: _raw_loader_letter_pronunciation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_letter_pronunciation_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LetterPronunciationComponent);
    return LetterPronunciationComponent;
}());



/***/ }),

/***/ "oEzV":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/verb-overlay-form/verb-overlay-form.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <form class=\"col-lg-4\">\n      <fieldset class=\"col-lg-12\">\n        <dl>\n          <dt class=\"col-lg-5\">What tense do you want to test?</dt>\n          <dd class=\"col-lg-7\">\n            <select id=\"tenseSelect\" name=\"tenseSelect\" [(ngModel)]=\"tenseSelect\"></select>\n          </dd>\n        </dl>\n        <dl>\n          <dt class=\"col-lg-5\">How many questions would you like?</dt>\n          <dd class=\"col-lg-7\">\n            <label for=\"verbs5\" class=\"container\">5\n              <input type=\"radio\" id=\"verbs5\" name=\"numberQuestions\" [(ngModel)]=\"numberQuestions\" value=\"5\" />\n              <span class=\"radioCategory\"></span>\n            </label>\n  \n            <label for=\"verbs10\" class=\"container\">10\n              <input type=\"radio\" id=\"verbs10\" name=\"numberQuestions\" [(ngModel)]=\"numberQuestions\" value=\"10\" />\n              <span class=\"radioCategory\"></span>\n            </label>\n  \n            <label for=\"verbs15\" class=\"container\">15\n              <input type=\"radio\" id=\"verbs15\" name=\"numberQuestions\" [(ngModel)]=\"numberQuestions\" value=\"15\" />\n              <span class=\"radioCategory\"></span>\n            </label>\n  \n            <label for=\"verbs20\" class=\"container\">20\n              <input type=\"radio\" id=\"verbs20\" name=\"numberQuestions\" [(ngModel)]=\"numberQuestions\" value=\"20\" />\n              <span class=\"radioCategory\"></span>\n            </label>\n          </dd>\n        </dl>\n        <div id=\"buttons\">\n          <input type=\"button\" id=\"submitBtn\" name=\"submitBtn\" value=\"go\" (click)=\"onClick()\" />\n        </div>\n      </fieldset>\n    </form>\n  </section>\n  ");

/***/ }),

/***/ "olUV":
/*!******************************************************************************!*\
  !*** ./src/app/components/vocabulary-slider/vocabulary-slider.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    font-family: 'Roboto', sans-serif;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n  \r\nsection h1 {\r\n    margin-top: 8.0rem;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    padding-bottom: 50px;\r\n    font-family: \"Open Sans\", serif;\r\n    text-transform: capitalize;\r\n    font-weight: normal;\r\n    font-size: 175%;\r\n}\r\n  \r\nform {\r\n    padding: 1.5rem 0;\r\n    border: none;\r\n    font-family: \"Roboto\", sans-serif;\r\n}\r\n  \r\nfieldset {\r\n    margin: 0 auto;\r\n    border: none;\r\n    width: 100%;\r\n    border-top: 1px solid rgb(198, 10, 30);\r\n    border-bottom: 1px solid rgb(198, 10, 30);\r\n    padding-top: 2.5rem;\r\n    padding-bottom: 2.5rem;\r\n}\r\n  \r\n.static-container, .slide-list {\r\n    display: inline-block;\r\n    width: 50%;\r\n    max-width: 50%;\r\n    min-height: 60px;\r\n    overflow: hidden;\r\n}\r\n  \r\n.static-tile, .slide-box {\r\n    padding: 0.5rem;\r\n    background: rgba(6, 75, 202, 0.75);\r\n    color: rgb(255, 255, 255);\r\n    border-bottom: 1px solid #CCC;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    box-sizing: border-box;\r\n    font-size: 125%;\r\n}\r\n  \r\n.slide-box {\r\n    cursor: move;\r\n}\r\n  \r\n.static-tile {\r\n    background: rgb(0, 0, 0);\r\n    color: rgb(255, 255, 255);\r\n}\r\n  \r\n.slide-box:last-child {\r\n    border-bottom: none;\r\n}\r\n  \r\n.cdk-drag-preview {\r\n    box-sizing: border-box;\r\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n  }\r\n  \r\n.cdk-drag-placeholder {\r\n    opacity: 0;\r\n  }\r\n  \r\n.cdk-drag-animating {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n  \r\n.slide-list.cdk-drop-list-dragging .slide-box:not(.cdk-drag-placeholder) {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n  \r\n#buttons {\r\n    margin: 1.75rem 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n  \r\n#buttons input {\r\n    margin-right: 0.15rem;\r\n    margin-left:  0.15rem;\r\n    padding: 0.75rem;\r\n    width: 100px;\r\n    border: none;\r\n    text-transform: uppercase;\r\n    color: rgb(255, 255, 255);\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    font-family: \"Roboto\", sans-serif;\r\n    border-radius: 5px;\r\n    font-size: 100%;\r\n}\r\n  \r\n#answerBtn {\r\n    margin-left: 30px;\r\n    background: rgb(40, 167, 69);\r\n}\r\n  \r\n#resetBtn {\r\n    background: rgb(52, 58, 64);\r\n}\r\n  \r\n#quitBtn {\r\n    background: rgb(198, 10, 30);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92b2NhYnVsYXJ5LXNsaWRlci92b2NhYnVsYXJ5LXNsaWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0NBQXNDO0lBQ3RDLHlDQUF5QztJQUN6QyxtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCOztrREFFOEM7RUFDaEQ7O0FBRUE7SUFDRSxVQUFVO0VBQ1o7O0FBRUE7SUFDRSxzREFBc0Q7RUFDeEQ7O0FBRUE7SUFDRSxzREFBc0Q7RUFDeEQ7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZvY2FidWxhcnktc2xpZGVyL3ZvY2FidWxhcnktc2xpZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiAgXHJcbnNlY3Rpb24gaDEge1xyXG4gICAgbWFyZ2luLXRvcDogOC4wcmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNzUlO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuICBcclxuZmllbGRzZXQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMTk4LCAxMCwgMzApO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxOTgsIDEwLCAzMCk7XHJcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcclxufVxyXG5cclxuLnN0YXRpYy1jb250YWluZXIsIC5zbGlkZS1saXN0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc3RhdGljLXRpbGUsIC5zbGlkZS1ib3gge1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg2LCA3NSwgMjAyLCAwLjc1KTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiAxMjUlO1xyXG59XHJcblxyXG4uc2xpZGUtYm94IHtcclxuICAgIGN1cnNvcjogbW92ZTtcclxufVxyXG5cclxuLnN0YXRpYy10aWxlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi5zbGlkZS1ib3g6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxuICAuY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuc2xpZGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9XHJcblxyXG4jYnV0dG9ucyB7XHJcbiAgICBtYXJnaW46IDEuNzVyZW0gMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuICBcclxuI2J1dHRvbnMgaW5wdXQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjE1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6ICAwLjE1cmVtO1xyXG4gICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbn1cclxuICBcclxuI2Fuc3dlckJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYig0MCwgMTY3LCA2OSk7XHJcbn1cclxuICBcclxuI3Jlc2V0QnRuIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1MiwgNTgsIDY0KTtcclxufVxyXG4gIFxyXG4jcXVpdEJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk4LCAxMCwgMzApO1xyXG59Il19 */");

/***/ }),

/***/ "pXny":
/*!***********************************************************************************!*\
  !*** ./src/app/components/vocabulary-flashcard/vocabulary-flashcard.component.ts ***!
  \***********************************************************************************/
/*! exports provided: VocabularyFlashcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VocabularyFlashcardComponent", function() { return VocabularyFlashcardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vocabulary_flashcard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vocabulary-flashcard.component.html */ "5+Ap");
/* harmony import */ var _vocabulary_flashcard_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vocabulary-flashcard.component.css */ "ZytZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _animations_flip_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../animations/flip.animation */ "pp9H");
/* harmony import */ var _services_vocabulary_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/vocabulary.service */ "N+FS");
/* harmony import */ var _services_vocabulary_categories_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/vocabulary-categories.service */ "JLPh");








var VocabularyFlashcardComponent = /** @class */ (function () {
    function VocabularyFlashcardComponent(apollo, vcs, vs) {
        var _this = this;
        this.apollo = apollo;
        this.vcs = vcs;
        this.vs = vs;
        this.flip = 'inactive';
        this.searchWord = '';
        this.word = 'word';
        this.pronunciation = 'pronunciation';
        this.translation = '[ translation ]';
        this.showImage = true;
        this.setCategories = function () {
            var categorySelect = document.getElementById('category');
            var firstOption = document.createElement('option');
            firstOption.disabled = true;
            firstOption.selected = true;
            firstOption.label = 'SELECT A CATEGORY';
            categorySelect.appendChild(firstOption);
            var secondOption = document.createElement('option');
            secondOption.label = 'All';
            categorySelect.appendChild(secondOption);
            for (var i = 0; i < _this.categories.length; i++) {
                var category = _this.categories[i];
                var option = document.createElement('option');
                option.style.textTransform = "Capitalize";
                option.label = category['category'];
                option.value = category['id'];
                categorySelect.appendChild(option);
            }
        };
        this.getCategories = function () {
            _this.queryCategories = _this.apollo.watchQuery({
                query: _this.vcs.Categories
            }).valueChanges
                .subscribe(function (result) {
                var categoryData = JSON.parse(JSON.stringify(result.data));
                _this.categories = categoryData.categories.sort(function (a, b) {
                    var wordA = a.category;
                    var wordB = b.category;
                    var comparison = 0;
                    if (wordA > wordB) {
                        comparison = 1;
                    }
                    else if (wordA < wordB) {
                        comparison = -1;
                    }
                    return comparison;
                });
                _this.setCategories();
            });
        };
        this.getWord = function () {
            var word = '%' + _this.searchWord + '%';
            _this.queryWord = _this.apollo.watchQuery({
                query: _this.vs.Word,
                variables: {
                    word: word
                }
            })
                .valueChanges
                .subscribe(function (result) {
                var dictionaryData = JSON.parse(JSON.stringify(result.data));
                _this.dictionary = dictionaryData.word;
                _this.index = 0;
                _this.word = _this.dictionary[_this.index].word;
                _this.pronunciation = _this.dictionary[_this.index].pronunciation;
                _this.translation = '[ ' + _this.dictionary[_this.index].translation + ' ]';
                _this.image = _this.dictionary[_this.index].image;
                _this.showImage = (_this.image === 'assets/images/blank.png') ? false : true;
                _this.searchWord = '';
            });
        };
        this.changeCategory = function () {
            var categoryObject = {
                query: _this.vs.Category,
                variables: {
                    category: parseInt(_this.category)
                }
            };
            var dictionaryObject = {
                query: _this.vs.Dictionary
            };
            var queryObject = (_this.category) ? categoryObject : dictionaryObject;
            _this.queryDictionary = _this.apollo.watchQuery(queryObject)
                .valueChanges
                .subscribe(function (result) {
                var dictionaryData = JSON.parse(JSON.stringify(result.data));
                _this.dictionary = (_this.category) ? dictionaryData.category : dictionaryData.dictionary;
                _this.index = 0;
                _this.word = _this.dictionary[_this.index].word;
                _this.pronunciation = _this.dictionary[_this.index].pronunciation;
                _this.translation = '[ ' + _this.dictionary[_this.index].translation + ' ]';
                _this.image = _this.dictionary[_this.index].image;
                _this.showImage = (_this.image === 'assets/images/blank.png') ? false : true;
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        };
        this.next = function () {
            _this.index++;
            _this.word = _this.dictionary[_this.index].word;
            _this.pronunciation = _this.dictionary[_this.index].pronunciation;
            _this.translation = '[ ' + _this.dictionary[_this.index].translation + ' ]';
            _this.image = _this.dictionary[_this.index].image;
            _this.showImage = (_this.image === 'assets/images/blank.png') ? false : true;
            var card = document.querySelector('div.card');
            var cardFlipState = card.style.transform;
            if (cardFlipState === 'rotateX(180deg)')
                _this.flip = 'inactive';
        };
        this.flipCard = function () {
            _this.flip = _this.flip === 'inactive' ? 'active' : 'inactive';
        };
    }
    VocabularyFlashcardComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    VocabularyFlashcardComponent.ctorParameters = function () { return [
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"] },
        { type: _services_vocabulary_categories_service__WEBPACK_IMPORTED_MODULE_7__["VocabularyCategoriesService"] },
        { type: _services_vocabulary_service__WEBPACK_IMPORTED_MODULE_6__["VocabularyService"] }
    ]; };
    VocabularyFlashcardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-vocabulary-flashcard',
            template: _raw_loader_vocabulary_flashcard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: _animations_flip_animation__WEBPACK_IMPORTED_MODULE_5__["FlipAnimation"].animations,
            styles: [_vocabulary_flashcard_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"], _services_vocabulary_categories_service__WEBPACK_IMPORTED_MODULE_7__["VocabularyCategoriesService"], _services_vocabulary_service__WEBPACK_IMPORTED_MODULE_6__["VocabularyService"]])
    ], VocabularyFlashcardComponent);
    return VocabularyFlashcardComponent;
}());



/***/ }),

/***/ "pp9H":
/*!******************************************!*\
  !*** ./src/animations/flip.animation.ts ***!
  \******************************************/
/*! exports provided: FlipAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipAnimation", function() { return FlipAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

var FlipAnimation = /** @class */ (function () {
    function FlipAnimation() {
    }
    FlipAnimation.getAnimations = function () {
        return [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flipState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'rotateX(180deg)',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'rotateX(0)',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in')),
            ]),
        ];
    };
    FlipAnimation.animations = FlipAnimation.getAnimations();
    return FlipAnimation;
}());



/***/ }),

/***/ "qZVD":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vocabulary-completion/vocabulary-completion.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-overlay *ngIf='showOverlay'></app-overlay>\r\n<app-vocabulary-overlay-form (formChange)='getOverlayData($event)' *ngIf='showVocabularyOverlay'></app-vocabulary-overlay-form>\r\n<app-report [reportInfo]=\"report\" *ngIf='showReport'></app-report>\r\n<section class=\"col-lg-12\">\r\n    <h1>vocabulary completion</h1>\r\n\r\n    <form [ngFormOptions]=\"{ updateOn: 'change' }\" *ngIf='showForm' class=\"col-lg-4 col-md-6 col-xs-12\">\r\n        <fieldset class=\"col-lg-12 col-xs-12\">\r\n            <h2>[ {{translation}} ]</h2>\r\n            <ul>\r\n                <li *ngFor=\"let letter of incompleteWord; index as i, trackBy: trackByFn\">\r\n                    <input type='text' id=\"userAnswer{{i}}\" name=\"userAnswer{{i}}\" (focus)=\"getSelectedTextbox(i)\" [(ngModel)]=\"this.incompleteWord[i]\" maxlength=\"1\" [disabled]=\"letter !== ''\" />\r\n                </li>\r\n            </ul>\r\n        </fieldset>\r\n        <app-spanish-accents (accentMessage)=\"placeAccent($event)\"></app-spanish-accents>\r\n        <div class=\"buttons\">\r\n            <input type=\"button\" id=\"answerBtn\" value=\"answer\" (click)=\"getAnswer()\" />\r\n            <input type=\"button\" id=\"resetBtn\" value=\"reset\" (click)=\"reset()\" />\r\n            <input type=\"button\" id=\"quitBtn\" value=\"quit\" (click)=\"quit()\" />\r\n        </div>\r\n    </form>\r\n</section>\r\n");

/***/ }),

/***/ "rRGI":
/*!**********************************************************!*\
  !*** ./src/app/components/marquee/marquee.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n    height: 20rem;\n    background: rgb(240, 240, 240);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXJxdWVlL21hcnF1ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hcnF1ZWUvbWFycXVlZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgICBoZWlnaHQ6IDIwcmVtO1xuICAgIGJhY2tncm91bmQ6IHJnYigyNDAsIDI0MCwgMjQwKTtcbn0iXX0= */");

/***/ }),

/***/ "sDtg":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spanish-accents/spanish-accents.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class='row'>\n    <fieldset class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>\n        <div class='col-lg-1 col-md-1 col-sm-1 col-xs-1'>\n            <button id=\"accent1\" value='á' (click)=\"accentClick($event)\">á</button>\n        </div>\n        <div class='col-lg-1 col-md-1 col-sm-1 col-xs-1'>\n            <button id=\"accent2\" value='é' (click)=\"accentClick($event)\">é</button>\n        </div>\n        <div class='col-lg-1 col-md-1 col-sm-1 col-xs-1'>\n            <button id=\"accent3\" value='í' (click)=\"accentClick($event)\">í</button>\n        </div>\n        <div class='col-lg-1 col-md-1 col-sm-1 col-xs-1'>\n            <button id=\"accent4\" value='ñ' (click)=\"accentClick($event)\">ñ</button>\n        </div>\n        <div class='col-lg-1 col-md-1 col-sm-1 col-xs-1'>\n            <button id=\"accent5\" value='ó' (click)=\"accentClick($event)\">ó</button>\n        </div>\n        <div class='col-lg-1 col-md-1 col-sm-1 col-xs-1'>\n            <button id=\"accent6\" value='ú' (click)=\"accentClick($event)\">ú</button>\n        </div>\n        <div class='col-lg-1 col-md-1 col-sm-1 col-xs-1'>\n            <button id=\"accent7\" value='ü' (click)=\"accentClick($event)\">ü</button>\n        </div>\n    </fieldset>\n</form>\n");

/***/ }),

/***/ "sPnC":
/*!******************************************************************************************!*\
  !*** ./src/app/components/conjugator-overlay-form/conjugator-overlay-form.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 97;\r\n  position: absolute;\r\n}\r\n\r\nfieldset {\r\n  margin: 0 auto;\r\n  padding: 30px;\r\n  border: none;\r\n  border-radius: 1.25rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: \"Roboto\", sans-serif;\r\n  background: rgb(255 255 255);\r\n  border: 1px solid black;\r\n  font-size: 115%;\r\n}\r\n\r\ndl {\r\n  padding: 0;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 1.25rem;\r\n  margin-left: 0;\r\n}\r\n\r\ndt {\r\n  margin: 0;\r\n  padding: 0;\r\n  clear: both;\r\n  font-weight: bold;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n.container-v {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.container {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 30%;\r\n  padding-left: 35px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\ndd input {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  height: 0;\r\n  width: 0;\r\n}\r\n\r\n.radioCategory {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #eee;\r\n  border-radius: 50%;\r\n}\r\n\r\ninput:checked ~ .radioCategory {\r\n  background-color: #2196F3;\r\n}\r\n\r\n.radioCategory:after {\r\n  content: '';\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\ninput:checked ~ .radioCategory:after {\r\n  display: block;\r\n}\r\n\r\n.radioCategory:after {\r\n  top: 9px;\r\n  left: 9px;\r\n  width: 8px;\r\n  height: 8px;\r\n  border-radius: 50%;\r\n  background: white;\r\n}\r\n\r\n#buttons {\r\n  margin-top: 30px;\r\n  margin-bottom: 0;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\ninput[type='button'] {\r\n  padding: 0.625rem;\r\n  width: 125px;\r\n  background: rgb(30, 126, 52);\r\n  border: none;\r\n  border-radius: 10px;\r\n  text-transform: uppercase;\r\n  color: rgb(255, 255, 255);\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  font-size: 1.0rem;\r\n}\r\n\r\nselect {\r\n  margin-top: 0.6rem;\r\n  border-radius: 10px;\r\n  border: 2px solid #CCC;\r\n  padding: 10px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25qdWdhdG9yLW92ZXJsYXktZm9ybS9jb25qdWdhdG9yLW92ZXJsYXktZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQ0FBaUM7RUFDakMsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUV0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUV0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Nvbmp1Z2F0b3Itb3ZlcmxheS1mb3JtL2Nvbmp1Z2F0b3Itb3ZlcmxheS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogOTc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1IDI1NSAyNTUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTE1JTtcclxufVxyXG5cclxuZGwge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuZHQge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXItdiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMzVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMzAlO1xyXG4gIHBhZGRpbmctbGVmdDogMzVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuZGQgaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG59XHJcblxyXG4ucmFkaW9DYXRlZ29yeSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCB+IC5yYWRpb0NhdGVnb3J5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG59XHJcblxyXG4ucmFkaW9DYXRlZ29yeTphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgfiAucmFkaW9DYXRlZ29yeTphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5yYWRpb0NhdGVnb3J5OmFmdGVyIHtcclxuICB0b3A6IDlweDtcclxuICBsZWZ0OiA5cHg7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbiNidXR0b25zIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT0nYnV0dG9uJ10ge1xyXG4gIHBhZGRpbmc6IDAuNjI1cmVtO1xyXG4gIHdpZHRoOiAxMjVweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMzAsIDEyNiwgNTIpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIG1hcmdpbi10b3A6IDAuNnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNDQ0M7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "sjGs":
/*!**************************************************************************!*\
  !*** ./src/app/components/verb-conjugator/verb-conjugator.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-family: 'Roboto', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nsection > h1 {\r\n  margin-top: 8.0rem;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  padding-bottom: 50px;\r\n  font-family: \"Open Sans\", serif;\r\n  text-transform: capitalize;\r\n  font-weight: normal;\r\n  font-size: 175%;\r\n}\r\n\r\nfieldset {\r\n  text-align: center;\r\n  margin: 0 auto;\r\n  padding-top: 1.5rem;\r\n  border: 10px solid rgb(198, 10, 30);\r\n  border-radius: 2.0rem;\r\n  font-family: \"Roboto\", sans-serif;\r\n  background:  rgb(255, 196, 0);\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  width: 100%;\r\n  margin-top: 2em;\r\n}\r\n\r\nselect {\r\n  padding: 5px;\r\n  margin-bottom: 1.0rem;\r\n}\r\n\r\ndl {\r\n  padding: 0 1.5rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  font-size: 1.0rem;\r\n}\r\n\r\ndt {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  width: 50%;\r\n  margin-top: 0.25em;\r\n  margin-right: 0.5em;\r\n  font-size: 1.25rem;\r\n}\r\n\r\ndd {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  width: 50%;\r\n  margin-left: 0.5em;\r\n  font-weight: bold;\r\n}\r\n\r\nh2 {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\nh3 {\r\n  margin-top: 0;\r\n}\r\n\r\nh4 {\r\n  background: rgb(198, 10, 30);\r\n  color: rgb(255, 196, 0);\r\n  padding-top: 0.625rem;\r\n  padding-bottom: 0.625rem;\r\n}\r\n\r\ninput[type='text'] {\r\n  padding: 8px;\r\n  border-radius: 0.8rem;\r\n  border: 2px solid #CCC;\r\n}\r\n\r\ninput[type='button'] {\r\n  margin-right: 0.15rem;\r\n  margin-left:  0.15rem;\r\n  padding: 0.625rem;\r\n  border: none;\r\n  text-transform: uppercase;\r\n  color: rgb(255, 255, 255);\r\n  font-weight: bold;\r\n  font-size: 0.75em;\r\n  font-family: \"Roboto\", sans-serif;\r\n  width: 100px;\r\n}\r\n\r\n.answer {\r\n  background: rgb(30, 126, 52);\r\n}\r\n\r\n.reset {\r\n  background: rgb(52, 58, 64);\r\n}\r\n\r\n#accentBtn {\r\n  background: rgb(23, 162, 184);\r\n  color: rgb(255, 255, 255);\r\n  width: 125px;\r\n  margin-top: -1.5em;\r\n}\r\n\r\n#quitBtn {\r\n  background: rgb(220, 53, 69);\r\n}\r\n\r\nfieldset h4 {\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n  font-size: 125%;\r\n  text-transform: uppercase;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZXJiLWNvbmp1Z2F0b3IvdmVyYi1jb25qdWdhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLCtCQUErQjtFQUMvQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMscUJBQXFCO0VBQ3JCLGlDQUFpQztFQUNqQyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZlcmItY29uanVnYXRvci92ZXJiLWNvbmp1Z2F0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnNlY3Rpb24gPiBoMSB7XHJcbiAgbWFyZ2luLXRvcDogOC4wcmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTc1JTtcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCByZ2IoMTk4LCAxMCwgMzApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIuMHJlbTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kOiAgcmdiKDI1NSwgMTk2LCAwKTtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAyZW07XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEuMHJlbTtcclxufVxyXG5cclxuZGwge1xyXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDEuMHJlbTtcclxufVxyXG5cclxuZHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogMC4yNWVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG59XHJcblxyXG5kZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaDIge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuaDMge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbmg0IHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTk4LCAxMCwgMzApO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAxOTYsIDApO1xyXG4gIHBhZGRpbmctdG9wOiAwLjYyNXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC42MjVyZW07XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9J3RleHQnXSB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjQ0NDO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdidXR0b24nXSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjE1cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAgMC4xNXJlbTtcclxuICBwYWRkaW5nOiAwLjYyNXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmFuc3dlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDMwLCAxMjYsIDUyKTtcclxufVxyXG5cclxuLnJlc2V0IHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNTIsIDU4LCA2NCk7XHJcbn1cclxuXHJcbiNhY2NlbnRCdG4ge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMywgMTYyLCAxODQpO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgd2lkdGg6IDEyNXB4O1xyXG4gIG1hcmdpbi10b3A6IC0xLjVlbTtcclxufVxyXG5cclxuI3F1aXRCdG4ge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMjAsIDUzLCA2OSk7XHJcbn1cclxuXHJcbmZpZWxkc2V0IGg0IHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxMjUlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "slQo":
/*!********************************************************************************!*\
  !*** ./src/app/components/vocabulary-fill-in/vocabulary-fill-in.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    font-family: 'Roboto', sans-serif;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n  \r\nsection h1 {\r\n    margin-top: 8.0rem;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    padding-bottom: 50px;\r\n    font-family: \"Open Sans\", serif;\r\n    text-transform: capitalize;\r\n    font-weight: normal;\r\n    font-size: 175%;\r\n}\r\n  \r\nform {\r\n    padding: 1.5rem 0;\r\n    border: none;\r\n    font-family: \"Roboto\", sans-serif;\r\n    margin: 0 auto;\r\n}\r\n  \r\nfieldset {\r\n    margin: 0 auto;\r\n    border: none;\r\n    width: 100%;\r\n    border-top: 1px solid rgb(198, 10, 30);\r\n    border-bottom: 1px solid rgb(198, 10, 30);\r\n    padding-top: 2.5rem;\r\n    padding-bottom: 2.5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n  \r\nfieldset h2 {\r\n    text-align: center;\r\n    color:  rgb(198, 10, 30);\r\n}\r\n  \r\nfieldset div {\r\n    margin: 0 auto;\r\n}\r\n  \r\nfieldset input {\r\n    margin-top: 1.5rem;\r\n    padding: 0.325rem;\r\n    border: none;\r\n    border-bottom: 1px solid rgb(0, 0, 0);\r\n}\r\n  \r\nfieldset .reminder {\r\n    color: rgb(198, 10, 30);\r\n    font-size: 0.75rem;\r\n    font-weight: bold;\r\n    margin-top: 0.3rem;\r\n}\r\n  \r\n#buttons {\r\n    margin: 1.75rem 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n  \r\n#buttons input {\r\n    margin-right: 0.15rem;\r\n    margin-left:  0.15rem;\r\n    padding: 0.75rem;\r\n    width: 100px;\r\n    border: none;\r\n    text-transform: uppercase;\r\n    color: rgb(255, 255, 255);\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    font-family: \"Roboto\", sans-serif;\r\n    border-radius: 5px;\r\n    font-size: 100%;\r\n}\r\n  \r\n#answerBtn {\r\n    margin-left: 30px;\r\n    background: rgb(40, 167, 69);\r\n}\r\n  \r\n#resetBtn {\r\n    background: rgb(52, 58, 64);\r\n}\r\n  \r\n#quitBtn {\r\n    background: rgb(198, 10, 30);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92b2NhYnVsYXJ5LWZpbGwtaW4vdm9jYWJ1bGFyeS1maWxsLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLHNDQUFzQztJQUN0Qyx5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92b2NhYnVsYXJ5LWZpbGwtaW4vdm9jYWJ1bGFyeS1maWxsLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiAgXHJcbnNlY3Rpb24gaDEge1xyXG4gICAgbWFyZ2luLXRvcDogOC4wcmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNzUlO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4gIFxyXG5maWVsZHNldCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxOTgsIDEwLCAzMCk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE5OCwgMTAsIDMwKTtcclxuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuZmllbGRzZXQgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICByZ2IoMTk4LCAxMCwgMzApO1xyXG59XHJcblxyXG5maWVsZHNldCBkaXYge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmZpZWxkc2V0IGlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuMzI1cmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcclxufVxyXG5cclxuZmllbGRzZXQgLnJlbWluZGVyIHtcclxuICAgIGNvbG9yOiByZ2IoMTk4LCAxMCwgMzApO1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW07XHJcbn1cclxuXHJcbiNidXR0b25zIHtcclxuICAgIG1hcmdpbjogMS43NXJlbSAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4gIFxyXG4jYnV0dG9ucyBpbnB1dCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMTVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogIDAuMTVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxufVxyXG4gIFxyXG4jYW5zd2VyQnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDQwLCAxNjcsIDY5KTtcclxufVxyXG4gIFxyXG4jcmVzZXRCdG4ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDUyLCA1OCwgNjQpO1xyXG59XHJcbiAgXHJcbiNxdWl0QnRuIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxOTgsIDEwLCAzMCk7XHJcbn0iXX0= */");

/***/ }),

/***/ "sx49":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header {\r\n  margin: 0 auto;\r\n  padding: 0;\r\n  padding-top: 1.5rem;\r\n  padding-bottom: 1.1rem;\r\n  display: flex;\r\n  flex-flow: row;\r\n  flex-wrap: nowrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background: rgb(198, 10, 30);\r\n  z-index: 100;\r\n  position: fixed;\r\n}\r\n\r\nheader h1 {\r\n  margin: 0;\r\n  padding: 0;\r\n  margin-top: 0.25em;\r\n  margin-left: 2.0em;\r\n  font-size: 2rem !important;\r\n  letter-spacing: 0.1rem;\r\n  font-size: inherit;\r\n}\r\n\r\n@media (max-width: 1199.98px) {\r\n  header h1 {\r\n    margin-left: 2.5rem;\r\n    font-size: 125% !important;\r\n  }\r\n}\r\n\r\n.titleMy {\r\n  font-family: 'Lobster', sans-serif;\r\n  z-index: 99;\r\n  position: absolute;\r\n  margin-top: -0.3em;\r\n  margin-left: -1.3em;\r\n  letter-spacing: 0;\r\n  color: rgb(0, 0, 0);\r\n}\r\n\r\n.titleST {\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\nheader h1 a {\r\n  text-decoration: none;\r\n  color:  rgb(255, 196, 0);\r\n}\r\n\r\nheader h1 a:visited {\r\n  color: rgb(255, 196, 0);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQiwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdztcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTk4LCAxMCwgMzApO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbmhlYWRlciBoMSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luLXRvcDogMC4yNWVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAyLjBlbTtcclxuICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xyXG4gIGhlYWRlciBoMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxMjUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGVNeSB7XHJcbiAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgc2Fucy1zZXJpZjtcclxuICB6LWluZGV4OiA5OTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogLTAuM2VtO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMS4zZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxufVxyXG5cclxuLnRpdGxlU1Qge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaGVhZGVyIGgxIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIHJnYigyNTUsIDE5NiwgMCk7XHJcbn1cclxuXHJcbmhlYWRlciBoMSBhOnZpc2l0ZWQge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAxOTYsIDApO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "tMwl":
/*!***********************************************************************!*\
  !*** ./src/app/components/verb-flashcard/verb-flashcard.component.ts ***!
  \***********************************************************************/
/*! exports provided: VerbFlashcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerbFlashcardComponent", function() { return VerbFlashcardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verb_flashcard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verb-flashcard.component.html */ "vRLz");
/* harmony import */ var _verb_flashcard_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verb-flashcard.component.css */ "Kw5F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _services_verb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/verb.service */ "UZr7");
/* harmony import */ var _animations_flip_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../animations/flip.animation */ "pp9H");
/* harmony import */ var _animations_fade_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../animations/fade.animation */ "6CR1");








var VerbFlashcardComponent = /** @class */ (function () {
    function VerbFlashcardComponent(apollo, vs) {
        var _this = this;
        this.apollo = apollo;
        this.vs = vs;
        this.flip = 'inactive';
        this.fade = 'out';
        this.infinitive = 'infinitive';
        this.translation = 'translation';
        this.pronunciation = 'pronunciation';
        this.createVerbSelect = function () {
            _this.queryVerbs = _this.apollo.watchQuery({
                query: _this.vs.Verbs
            })
                .valueChanges
                .subscribe(function (result) {
                var verbData = JSON.parse(JSON.stringify(result.data));
                _this.infinitives = verbData.verbs.sort(function (a, b) {
                    var verbA = a.infinitive;
                    var verbB = b.infinitive;
                    var comparison = 0;
                    if (verbA > verbB) {
                        comparison = 1;
                    }
                    else if (verbA < verbB) {
                        comparison = -1;
                    }
                    return comparison;
                });
                _this.setVerbSelect();
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        };
        this.setVerbSelect = function () {
            var infinitiveSelect = document.getElementById('verbSelect');
            var firstOption = document.createElement('option');
            firstOption.value = '';
            firstOption.disabled = true;
            firstOption.selected = true;
            firstOption.innerHTML = 'SELECT A VERB ...';
            infinitiveSelect.appendChild(firstOption);
            var numVerbs = _this.infinitives.length;
            for (var i = 0; i < numVerbs; i++) {
                var infinitive = _this.infinitives[i].infinitive;
                var option = document.createElement('option');
                option.value = _this.infinitives[i].id;
                option.label = infinitive.charAt(0).toUpperCase() + infinitive.slice(1);
                infinitiveSelect.appendChild(option);
            }
        };
        this.setTenseSelect = function () {
            var tenseSelect = document.getElementById('tenseSelect');
            var firstOption = document.createElement('option');
            firstOption = document.createElement('option');
            firstOption.value = '';
            firstOption.disabled = true;
            firstOption.selected = true;
            firstOption.innerHTML = 'SELECT A TENSE ...';
            tenseSelect.appendChild(firstOption);
            var numTenses = _this.tenses.length;
            for (var i = 0; i < numTenses; i++) {
                var tense = _this.tenses[i];
                var option = document.createElement('option');
                option.label = tense['tense'];
                option.value = tense['id'];
                tenseSelect.appendChild(option);
            }
        };
        this.createTenseSelect = function () {
            _this.queryTenses = _this.apollo.watchQuery({
                query: _this.vs.Tenses
            })
                .valueChanges
                .subscribe(function (result) {
                var tensesData = JSON.parse(JSON.stringify(result.data));
                _this.tenses = tensesData.tenses;
                _this.setTenseSelect();
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        };
        this.getTextVerb = function () {
            var verb = '%' + _this.searchVerb + '%';
            _this.queryVerb = _this.apollo.watchQuery({
                query: _this.vs.Verb,
                variables: {
                    verb: verb
                }
            })
                .valueChanges
                .subscribe(function (result) {
                var verbData = JSON.parse(JSON.stringify(result.data));
                var retrievedInfinitive = verbData.verb[0];
                console.log(retrievedInfinitive);
                _this.infinitive = retrievedInfinitive.infinitive;
                _this.translation = retrievedInfinitive.translation;
                _this.pronunciation = retrievedInfinitive.pronunciation;
                _this.getVerbConjugations(retrievedInfinitive.id);
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        };
        this.changeVerb = function () {
            _this.tenseSelect = '';
            var retrievedVerb = _this.getSelectVerb(_this.infinitives, _this.verbSelect);
            _this.infinitive = retrievedVerb.infinitive;
            _this.translation = retrievedVerb.translation;
            _this.pronunciation = retrievedVerb.pronunciation;
            _this.getVerbConjugations(_this.verbSelect);
            var card = document.querySelector("div.card");
            var cardFlipState = card.style.transform;
            if (cardFlipState === 'rotateX(180deg)') {
                _this.flip = 'inactive';
            }
        };
        this.changeTense = function () {
            var tensesArray = ['present', 'preterite', 'imperfect', 'future', 'conditional'];
            _this.selectedTense = tensesArray[_this.tenseSelect - 1];
            var index = _this.tenseSelect - 1;
            if (index === 3 && _this.conjugations[index].tense === 5) {
                index = 4;
            }
            else if (index === 4 && _this.conjugations[index].tense === 4) {
                index = 3;
            }
            _this.conjugation = _this.conjugations[index];
            _this.fade = _this.fade === 'in' ? 'out' : 'in';
        };
        this.getVerbConjugations = function (verb) {
            _this.queryVerb = _this.apollo.watchQuery({
                query: _this.vs.Conjugations,
                variables: {
                    verb: parseInt(verb)
                }
            })
                .valueChanges
                .subscribe(function (result) {
                var conjugationData = JSON.parse(JSON.stringify(result.data));
                _this.conjugations = conjugationData.conjugations;
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        };
        this.flipCard = function () {
            if (_this.infinitive && _this.tenseSelect) {
                _this.flip = _this.flip === 'inactive' ? 'active' : 'inactive';
            }
        };
    }
    VerbFlashcardComponent.prototype.ngOnInit = function () {
        this.createVerbSelect();
        this.createTenseSelect();
    };
    VerbFlashcardComponent.prototype.getSelectVerb = function (verbs, verb) {
        var numberVerbs = verbs.length;
        var verbObject = {
            infinitive: '',
            translation: '',
            pronunciation: ''
        };
        for (var i = 0; i < numberVerbs; i++) {
            if (verbs[i].id === verb) {
                verbObject.infinitive = verbs[i].infinitive;
                verbObject.translation = verbs[i].translation;
                verbObject.pronunciation = verbs[i].pronunciation;
                break;
            }
        }
        return verbObject;
    };
    VerbFlashcardComponent.ctorParameters = function () { return [
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"] },
        { type: _services_verb_service__WEBPACK_IMPORTED_MODULE_5__["VerbService"] }
    ]; };
    VerbFlashcardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-verb-flashcard',
            template: _raw_loader_verb_flashcard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [_animations_flip_animation__WEBPACK_IMPORTED_MODULE_6__["FlipAnimation"].animations, _animations_fade_animation__WEBPACK_IMPORTED_MODULE_7__["FadeAnimation"].animations],
            styles: [_verb_flashcard_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"], _services_verb_service__WEBPACK_IMPORTED_MODULE_5__["VerbService"]])
    ], VerbFlashcardComponent);
    return VerbFlashcardComponent;
}());



/***/ }),

/***/ "tXZI":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n</section>");

/***/ }),

/***/ "tb/q":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/verb-input/verb-input.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n  <h1>Verb Input</h1>\r\n  <form (ngSubmit)=\"onSubmit()\" class=\"col-lg-6 col-md-6 col-xs-12\">\r\n    <fieldset class=\"col-lg-8\">\r\n      <dl>\r\n        <dt>infinitive:</dt>\r\n        <dd>\r\n          <input type=\"text\" id=\"infinitive\" name=\"infinitive\" (focus)=\"getSelectedTextbox('infinitive')\" class=\"col-lg-12\"\r\n                [(ngModel)]=\"infinitive\"\r\n                required\r\n          />\r\n        </dd>\r\n      </dl>\r\n      <dl>\r\n        <dt>translation:</dt>\r\n        <dd>\r\n          <input type=\"text\" id=\"translation\" name=\"translation\" class=\"col-lg-12\"\r\n                [(ngModel)]=\"translation\"\r\n                required\r\n          />\r\n        </dd>\r\n      </dl>\r\n      <dl>\r\n        <dt>pronunciation:</dt>\r\n        <dd>\r\n          <input type=\"text\" id=\"pronunciation\" name=\"pronunciation\" class=\"col-lg-12\"\r\n                [(ngModel)]=\"pronunciation\"\r\n                required\r\n          />\r\n        </dd>\r\n      </dl>\r\n\r\n      <section *ngIf=\"currentTense === 'present'\">\r\n        <h4>present tense</h4>\r\n        <dl>\r\n          <dt>yo:</dt>\r\n          <dd>\r\n            <input type=\"text\" name=\"presentYo\" id=\"presentYo\" (focus)=\"getSelectedTextbox('presentYo')\" class=\"col-lg-12\"\r\n                  [(ngModel)]=\"presentYo\"\r\n                  required />\r\n          </dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>tu:</dt>\r\n          <dd>\r\n            <input type=\"text\" name=\"presentTu\" id=\"presentTu\" (focus)=\"getSelectedTextbox('presentTu')\" class=\"col-lg-12\"\r\n                  [(ngModel)]=\"presentTu\"\r\n                  required />\r\n          </dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>el/Ella/Usted:</dt>\r\n          <dd>\r\n            <input type=\"text\" name=\"presentEl\" id=\"presentEl\" (focus)=\"getSelectedTextbox('presentEl')\" class=\"col-lg-12\"\r\n                  [(ngModel)]=\"presentEl\"\r\n                  required />\r\n          </dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>nosotros:</dt>\r\n          <dd>\r\n            <input type=\"text\" name=\"presentNosotros\" id=\"presentNosotros\" (focus)=\"getSelectedTextbox('presentNosotros')\" class=\"col-lg-12\"\r\n                  [(ngModel)]=\"presentNosotros\"\r\n                  required />\r\n          </dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>ellos/Ellas/Ustedes:</dt>\r\n          <dd><input type=\"text\" name=\"presentEls\" id=\"presentEls\" (focus)=\"getSelectedTextbox('presentEls')\" class=\"col-lg-12\"\r\n                    [(ngModel)]=\"presentEls\"\r\n                    required />\r\n          </dd>\r\n        </dl>\r\n      </section>\r\n\r\n      <section *ngIf=\"currentTense === 'preterite'\">\r\n        <h4>preterite tense</h4>\r\n        <dl>\r\n          <dt>yo:</dt>\r\n          <dd>\r\n            <input type=\"text\" name=\"preteriteYo\" id=\"preteriteYo\" (focus)=\"getSelectedTextbox('preteriteYo')\" class=\"col-lg-12\"\r\n                  required\r\n                  [(ngModel)]=\"preteriteYo\"\r\n            >\r\n          </dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>tu:</dt>\r\n          <dd>\r\n            <input type=\"text\" name=\"preteriteTu\" id=\"preteriteTu\" (focus)=\"getSelectedTextbox('preteriteTu')\" class=\"col-lg-12\"\r\n                  required\r\n                  [(ngModel)]=\"preteriteTu\"\r\n            >\r\n          </dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>el/Ella/Usted:</dt>\r\n          <dd>\r\n            <input type=\"text\" name=\"preteriteEl\" id=\"preteriteEl\" (focus)=\"getSelectedTextbox('preteriteEl')\" class=\"col-lg-12\"\r\n                  required\r\n                  [(ngModel)]=\"preteriteEl\"\r\n            >\r\n          </dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>nosotros:</dt>\r\n          <dd>\r\n            <input type=\"text\" name=\"preteriteNosotros\" id=\"preteriteNosotros\" (focus)=\"getSelectedTextbox('preteriteNosotros')\" class=\"col-lg-12\"\r\n                  required\r\n                  [(ngModel)]=\"preteriteNosotros\"\r\n            >\r\n          </dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>ellos/Ellas/Ustedes:</dt>\r\n          <dd><input type=\"text\" name=\"preteriteEls\" id=\"preteriteEls\"  (focus)=\"getSelectedTextbox('preteriteEls')\" class=\"col-lg-12\"\r\n                    required\r\n                    [(ngModel)]=\"preteriteEls\"\r\n          >\r\n          </dd>\r\n        </dl>\r\n      </section>\r\n\r\n      <section *ngIf=\"currentTense === 'imperfect'\">\r\n        <h4>imperfect tense</h4>\r\n        <dl>\r\n          <dt>yo:</dt>\r\n          <dd>\r\n            <input type=\"text\" name=\"imperfectYo\" id=\"imperfectYo\" (focus)=\"getSelectedTextbox('imperfectYo')\" class=\"col-lg-12\"\r\n                  required\r\n                  [(ngModel)]=\"imperfectYo\"\r\n            >\r\n          </dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>tu:</dt>\r\n          <dd>\r\n            <input type=\"text\" name=\"imperfectTu\" id=\"imperfectTu\" (focus)=\"getSelectedTextbox('imperfectTu')\" class=\"col-lg-12\"\r\n                  required\r\n                  [(ngModel)]=\"imperfectTu\"\r\n            >\r\n          </dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>el/Ella/Usted:</dt>\r\n          <dd>\r\n            <input type=\"text\" name=\"imperfectEl\" id=\"imperfectEl\" (focus)=\"getSelectedTextbox('imperfectEl')\" class=\"col-lg-12\"\r\n                  required\r\n                  [(ngModel)]=\"imperfectEl\"\r\n            >\r\n          </dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>nosotros:</dt>\r\n          <dd>\r\n            <input type=\"text\" name=\"imperfectNosotros\" id=\"imperfectNosotros\" (focus)=\"getSelectedTextbox('imperfectNosotros')\" class=\"col-lg-12\"\r\n                  required\r\n                  [(ngModel)]=\"imperfectNosotros\"\r\n            >\r\n          </dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>ellos/Ellas/Ustedes:</dt>\r\n          <dd><input type=\"text\" name=\"imperfectEls\" id=\"imperfectEls\" (focus)=\"getSelectedTextbox('imperfectEls')\" class=\"col-lg-12\"\r\n                    required\r\n                    [(ngModel)]=\"imperfectEls\"\r\n          >\r\n          </dd>\r\n        </dl>\r\n      </section>\r\n\r\n      <section *ngIf=\"currentTense === 'future'\">\r\n        <h4>future tense</h4>\r\n        <dl>\r\n          <dt>yo:</dt>\r\n          <dd>\r\n            <input type=\"text\" name=\"futureYo\" id=\"futureYo\" (focus)=\"getSelectedTextbox('futureYo')\" class=\"col-lg-12\"\r\n                  required\r\n                  [(ngModel)]=\"futureYo\"\r\n            >\r\n          </dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>tu:</dt>\r\n          <dd>\r\n            <input type=\"text\" name=\"futureTu\" id=\"futureTu\" (focus)=\"getSelectedTextbox('futureTu')\" class=\"col-lg-12\"\r\n                  required\r\n                  [(ngModel)]=\"futureTu\"\r\n            >\r\n          </dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>el/Ella/Usted:</dt>\r\n          <dd>\r\n            <input type=\"text\" name=\"futureEl\" id=\"futureEl\" (focus)=\"getSelectedTextbox('futureEl')\" class=\"col-lg-12\"\r\n                  required\r\n                  [(ngModel)]=\"futureEl\"\r\n            >\r\n          </dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>nosotros:</dt>\r\n          <dd>\r\n            <input type=\"text\" name=\"futureNosotros\" id=\"futureNosotros\"  (focus)=\"getSelectedTextbox('futureNosotros')\" class=\"col-lg-12\"\r\n                  required\r\n                  [(ngModel)]=\"futureNosotros\"\r\n            >\r\n          </dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>ellos/Ellas/Ustedes:</dt>\r\n          <dd><input type=\"text\" name=\"futureEls\" id=\"futureEls\" (focus)=\"getSelectedTextbox('futureEls')\" class=\"col-lg-12\"\r\n                    required\r\n                    [(ngModel)]=\"futureEls\"\r\n          >\r\n          </dd>\r\n        </dl>\r\n      </section>\r\n\r\n      <section *ngIf=\"currentTense === 'conditional'\">\r\n        <h4>conditional tense</h4>\r\n        <dl>\r\n          <dt>yo:</dt>\r\n          <dd>\r\n            <input type=\"text\" name=\"conditionalYo\" id=\"conditionalYo\" (focus)=\"getSelectedTextbox('conditionalYo')\" class=\"col-lg-12\"\r\n                  required\r\n                  [(ngModel)]=\"conditionalYo\"\r\n            >\r\n          </dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>tu:</dt>\r\n          <dd>\r\n            <input type=\"text\" name=\"conditionalTu\" id=\"conditionalTu\" (focus)=\"getSelectedTextbox('conditionalTu')\" class=\"col-lg-12\"\r\n                  required\r\n                  [(ngModel)]=\"conditionalTu\"\r\n            >\r\n          </dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>el/Ella/Usted:</dt>\r\n          <dd>\r\n            <input type=\"text\" name=\"conditionalEl\" id=\"conditionalEl\" (focus)=\"getSelectedTextbox('conditionalEl')\" class=\"col-lg-12\"\r\n                  required\r\n                  [(ngModel)]=\"conditionalEl\"\r\n            >\r\n          </dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>nosotros:</dt>\r\n          <dd>\r\n            <input type=\"text\" name=\"conditionalNosotros\" id=\"conditionalNosotros\"  (focus)=\"getSelectedTextbox('conditionalNosotros')\" class=\"col-lg-12\"\r\n                  required\r\n                  [(ngModel)]=\"conditionalNosotros\"\r\n            >\r\n          </dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>ellos/Ellas/Ustedes:</dt>\r\n          <dd><input type=\"text\" name=\"conditionalEls\" id=\"conditionalEls\" (focus)=\"getSelectedTextbox('conditionalEls')\" class=\"col-lg-12\"\r\n                    required\r\n                    [(ngModel)]=\"conditionalEls\"\r\n          >\r\n          </dd>\r\n        </dl>\r\n      </section>\r\n    </fieldset>\r\n    <app-spanish-accents (accentMessage)=\"placeAccent($event)\"></app-spanish-accents>\r\n    <div class=\"col-lg-12\">\r\n      <span *ngIf=\"currentTense !== 'conditional'\">\r\n        <input type=\"button\" id=\"nextBtn\" class=\"col-lg-12\" (click)=\"next()\" value=\"next\" />\r\n      </span>\r\n      <span *ngIf=\"currentTense === 'conditional'\">\r\n        <input type=\"submit\" id=\"submitBtn\" class=\"col-lg-12\" value=\"ADD VERB\" />\r\n      </span>\r\n    </div>\r\n  </form>\r\n</section>\r\n");

/***/ }),

/***/ "u3J0":
/*!*********************************************************************************!*\
  !*** ./src/app/components/vocabulary-scramble/vocabulary-scramble.component.ts ***!
  \*********************************************************************************/
/*! exports provided: VocabularyScrambleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VocabularyScrambleComponent", function() { return VocabularyScrambleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vocabulary_scramble_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vocabulary-scramble.component.html */ "PZjB");
/* harmony import */ var _vocabulary_scramble_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vocabulary-scramble.component.css */ "BU0i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_vocabulary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/vocabulary.service */ "N+FS");
/* harmony import */ var _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/random-number-generator.service */ "W26Q");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-angular */ "/IUn");









var VocabularyScrambleComponent = /** @class */ (function () {
    function VocabularyScrambleComponent(vs, apollo, randomNumberService, router) {
        var _this = this;
        this.vs = vs;
        this.apollo = apollo;
        this.randomNumberService = randomNumberService;
        this.router = router;
        this.showOverlay = true;
        this.showVocabularyOverlay = true;
        this.showForm = false;
        this.showReport = false;
        this.numberQuestions = 0;
        this.word = '';
        this.translation = '';
        this.image = '';
        this.scrambledWord = [];
        this.answers = [];
        this.questionSet = [];
        this.answerSet = [];
        this.currentWord = 0;
        this.numberCorrect = 0;
        this.report = {};
        this.responses = [];
        this.createQuestionSet = function () {
            var categoryObject = {
                query: _this.vs.Category,
                variables: {
                    category: parseInt(_this.selectedCategory)
                }
            };
            var dictionaryObject = {
                query: _this.vs.Dictionary
            };
            var queryObject = (_this.selectedCategory) ? categoryObject : dictionaryObject;
            _this.queryDictionary = _this.apollo.watchQuery(queryObject)
                .valueChanges
                .subscribe(function (result) {
                var dictionaryData = JSON.parse(JSON.stringify(result.data));
                _this.dictionary = (_this.selectedCategory) ? dictionaryData.category : dictionaryData.dictionary;
                _this.randomNumberService.generateRandomNumberArray(_this.numberQuestions, _this.dictionary.length, _this.questionSet);
                _this.getCurrentWord(_this.currentWord);
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        };
    }
    VocabularyScrambleComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["moveItemInArray"])(this.scrambledWord, event.previousIndex, event.currentIndex);
    };
    VocabularyScrambleComponent.prototype.getOverlayData = function (data) {
        if (!data.isVisible) {
            this.showOverlay = data.isVisible;
            this.showVocabularyOverlay = data.isVisible;
            this.showForm = true;
            this.selectedCategory = data.category;
            this.numberQuestions = data.numberQuestions;
            this.createQuestionSet();
        }
    };
    VocabularyScrambleComponent.prototype.getCurrentWord = function (word) {
        var currentWord = this.questionSet[word];
        this.translation = this.dictionary[currentWord].translation;
        this.image = this.dictionary[currentWord].image;
        this.answer = this.dictionary[currentWord].word;
        this.createScramble(this.answer);
    };
    VocabularyScrambleComponent.prototype.createScramble = function (word) {
        var wordArray = [];
        var scrambledArray = [];
        wordArray = word.split('');
        this.randomNumberService.generateRandomNumberArray(wordArray.length, wordArray.length, scrambledArray);
        for (var i = 0; i < wordArray.length; i++) {
            this.scrambledWord.push(wordArray[scrambledArray[i]]);
        }
    };
    VocabularyScrambleComponent.prototype.getNextQuestion = function () {
        var numberQuestions = this.questionSet.length;
        if (this.currentWord < numberQuestions) {
            this.currentWord++;
            this.getCurrentWord(this.currentWord);
        }
    };
    VocabularyScrambleComponent.prototype.getAnswer = function () {
        var responseObj = {};
        var score = 0;
        var response = this.scrambledWord.join('');
        if (this.answer === response)
            this.numberCorrect++;
        responseObj.question = this.translation;
        responseObj.answer = this.answer;
        responseObj.response = response;
        this.responses.push(responseObj);
        if (this.currentWord === this.numberQuestions - 1) {
            this.showForm = false;
            this.showReport = true;
            this.showOverlay = true;
            score = Math.round((this.numberCorrect / this.numberQuestions) * 100);
            this.report.title = 'Vocabulary Scramble Report';
            this.report.scoreMessage = 'You scored ' + score + '%';
            this.report.headings = ['word', 'answer', 'response'];
            this.report.responses = this.responses;
        }
        else {
            this.scrambledWord = [];
            this.getNextQuestion();
        }
    };
    VocabularyScrambleComponent.prototype.reset = function () {
        this.answer = '';
        this.scrambledWord = [];
        this.numberCorrect = 0;
        this.getCurrentWord(this.currentWord);
    };
    VocabularyScrambleComponent.prototype.quit = function () {
        this.router.navigateByUrl('');
    };
    VocabularyScrambleComponent.ctorParameters = function () { return [
        { type: _services_vocabulary_service__WEBPACK_IMPORTED_MODULE_4__["VocabularyService"] },
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_8__["Apollo"] },
        { type: _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__["RandomNumberGeneratorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    VocabularyScrambleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-vocabulary-scramble',
            template: _raw_loader_vocabulary_scramble_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_vocabulary_scramble_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vocabulary_service__WEBPACK_IMPORTED_MODULE_4__["VocabularyService"], apollo_angular__WEBPACK_IMPORTED_MODULE_8__["Apollo"], _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__["RandomNumberGeneratorService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], VocabularyScrambleComponent);
    return VocabularyScrambleComponent;
}());



/***/ }),

/***/ "vRLz":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/verb-flashcard/verb-flashcard.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n  <h1>verb flashcard</h1>\r\n\r\n  <div class=\"col-lg-5 col-md-8 col-sm-10\">\r\n    <form class=\"col-lg-12 col-xs-12\">\r\n      <fieldset class=\"col-lg-10\">\r\n        <div class=\"col-lg-12\">\r\n          <input type=\"text\" name=\"searchVerb\" class=\"col-xs-3 col-sm-6 col-lg-6\" id=\"searchVerb\" [(ngModel)]=\"searchVerb\" placeholder=\"INPUT A ENGLISH/SPANISH VERB\" />\r\n          <input id=\"btnSearch\" type=\"button\" class=\"button search\" value=\"search\" (click)=\"getTextVerb()\">\r\n        </div>\r\n        <div class=\"col-lg-12 or\">OR</div>\r\n        <div class=\"col-lg-12\"><select id=\"verbSelect\" class=\"col-xs-3 col-sm-6 col-lg-6\" name=\"verbSelect\" [(ngModel)]=\"verbSelect\" (change)=\"changeVerb()\"></select></div>\r\n        <div class=\"col-lg-12 and\">AND</div>\r\n        <div class=\"col-lg-12\"><select id=\"tenseSelect\" class=\"col-xs-3 col-sm-6 col-lg-6\" name=\"tenseSelect\" [(ngModel)]=\"tenseSelect\" (change)=\"changeTense()\"></select></div>\r\n        <div class=\"card\" [@flipState]=\"flip\">\r\n          <section class=\"face front col-lg-12\">\r\n            <h2>{{infinitive}}</h2>\r\n            <h3>[ {{translation}} ]</h3>\r\n            <h4>{{pronunciation}}</h4>\r\n          </section>\r\n          <div class=\"face back col-lg-12\">\r\n            <h3>[ {{this.selectedTense}} ] tense</h3>\r\n            <dl>\r\n              <dt>yo</dt>\r\n              <dd>{{this.conjugation.yo}}</dd>\r\n            </dl>\r\n            <dl>\r\n              <dt>tu</dt>\r\n              <dd>{{this.conjugation.tu}}</dd>\r\n            </dl>\r\n            <dl>\r\n              <dt>el, ella, usted</dt>\r\n              <dd>{{this.conjugation.el}}</dd>\r\n            </dl>\r\n            <dl>\r\n              <dt>nosotros</dt>\r\n              <dd>{{this.conjugation.nosotros}}</dd>\r\n            </dl>\r\n            <dl>\r\n              <dt>ellos, ellas, ustedes</dt>\r\n              <dd>{{this.conjugation.els}}</dd>\r\n            </dl>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n\r\n      <div class=\"buttons\">\r\n        <input id=\"btnReset\" class=\"button reset\" type=\"reset\" value=\"reset\">\r\n        <input id=\"btnFlip\" class=\"button flip\" type=\"button\" value=\"flip card\" (click)=\"flipCard()\">\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>");

/***/ }),

/***/ "xlKW":
/*!*******************************************************************************!*\
  !*** ./src/app/components/verb-slider-report/verb-slider-report.component.ts ***!
  \*******************************************************************************/
/*! exports provided: VerbSliderReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerbSliderReportComponent", function() { return VerbSliderReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verb_slider_report_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verb-slider-report.component.html */ "YErj");
/* harmony import */ var _verb_slider_report_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verb-slider-report.component.css */ "V+O4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






var VerbSliderReportComponent = /** @class */ (function () {
    function VerbSliderReportComponent(document, router) {
        this.document = document;
        this.router = router;
    }
    VerbSliderReportComponent.prototype.replay = function () {
        this.document.location.reload();
    };
    VerbSliderReportComponent.prototype.quit = function () {
        this.router.navigateByUrl('');
    };
    VerbSliderReportComponent.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    VerbSliderReportComponent.propDecorators = {
        reportInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    VerbSliderReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-verb-slider-report',
            template: _raw_loader_verb_slider_report_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_verb_slider_report_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], VerbSliderReportComponent);
    return VerbSliderReportComponent;
}());



/***/ }),

/***/ "xlaO":
/*!*******************************************************************************!*\
  !*** ./src/app/components/vocabulary-fill-in/vocabulary-fill-in.component.ts ***!
  \*******************************************************************************/
/*! exports provided: VocabularyFillInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VocabularyFillInComponent", function() { return VocabularyFillInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vocabulary_fill_in_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vocabulary-fill-in.component.html */ "KtLp");
/* harmony import */ var _vocabulary_fill_in_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vocabulary-fill-in.component.css */ "slQo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_vocabulary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/vocabulary.service */ "N+FS");
/* harmony import */ var _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/random-number-generator.service */ "W26Q");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-angular */ "/IUn");








var VocabularyFillInComponent = /** @class */ (function () {
    function VocabularyFillInComponent(vs, apollo, randomNumberService, router) {
        var _this = this;
        this.vs = vs;
        this.apollo = apollo;
        this.randomNumberService = randomNumberService;
        this.router = router;
        this.showOverlay = true;
        this.showVocabularyOverlay = true;
        this.showForm = false;
        this.showReport = false;
        this.numberQuestions = 0;
        this.translation = '';
        this.answers = [];
        this.questionSet = [];
        this.answerSet = [];
        this.currentQuestion = 0;
        this.numberCorrect = 0;
        this.report = {};
        this.responses = [];
        this.createQuestionSet = function () {
            var categoryObject = {
                query: _this.vs.Category,
                variables: {
                    category: parseInt(_this.selectedCategory)
                }
            };
            var dictionaryObject = {
                query: _this.vs.Dictionary
            };
            var queryObject = (_this.selectedCategory) ? categoryObject : dictionaryObject;
            _this.queryDictionary = _this.apollo.watchQuery(queryObject)
                .valueChanges
                .subscribe(function (result) {
                var dictionaryData = JSON.parse(JSON.stringify(result.data));
                _this.dictionary = (_this.selectedCategory) ? dictionaryData.category : dictionaryData.dictionary;
                _this.randomNumberService.generateRandomNumberArray(_this.numberQuestions, _this.dictionary.length, _this.questionSet);
                _this.getCurrentQuestion(_this.currentQuestion);
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        };
    }
    VocabularyFillInComponent.prototype.getOverlayData = function (data) {
        if (!data.isVisible) {
            this.showOverlay = data.isVisible;
            this.showVocabularyOverlay = data.isVisible;
            this.showForm = true;
            this.selectedCategory = data.category;
            this.numberQuestions = data.numberQuestions;
            this.createQuestionSet();
        }
    };
    VocabularyFillInComponent.prototype.getCurrentQuestion = function (question) {
        var _this = this;
        var currentWord = this.questionSet[question];
        this.answer = this.dictionary[currentWord].word;
        this.translation = this.dictionary[currentWord].translation;
        this.answerSet = [];
        this.answerSet.push(currentWord);
        this.randomNumberService.generateRandomNumberArray(undefined, this.dictionary.length, this.answerSet);
        this.answers = this.answerSet.map(function (answer) { return _this.dictionary[answer].translation; });
        this.answers.sort();
    };
    VocabularyFillInComponent.prototype.getNextQuestion = function () {
        var numberQuestions = this.questionSet.length;
        if (this.currentQuestion < numberQuestions) {
            this.currentQuestion++;
            this.getCurrentQuestion(this.currentQuestion);
        }
    };
    VocabularyFillInComponent.prototype.getAnswer = function () {
        var responseObj = {};
        var score = 0;
        var response = this.inputAnswer;
        if (response === this.answer)
            this.numberCorrect++;
        responseObj.question = this.translation;
        responseObj.answer = this.answer;
        responseObj.response = response;
        this.responses.push(responseObj);
        if (this.currentQuestion === this.numberQuestions - 1) {
            this.showForm = false;
            this.showReport = true;
            this.showOverlay = true;
            score = Math.round((this.numberCorrect / this.numberQuestions) * 100);
            this.report.title = 'Vocabulary Fill-in Report';
            this.report.scoreMessage = 'You scored ' + score + '%';
            this.report.headings = ['word', 'answer', 'response'];
            this.report.responses = this.responses;
        }
        else {
            this.inputAnswer = '';
            this.getNextQuestion();
        }
    };
    VocabularyFillInComponent.prototype.placeAccent = function (event) {
        var inputBox = document.getElementById('inputAnswer');
        this.accent = event;
        var currentPosition = inputBox.selectionStart;
        var originalValue = this.inputAnswer;
        var newValue = originalValue.substring(0, currentPosition) + this.accent + originalValue.substring(currentPosition);
        this.inputAnswer = newValue;
    };
    VocabularyFillInComponent.prototype.reset = function () {
        this.answer = '';
        this.currentQuestion = 0;
        this.numberCorrect = 0;
        this.getNextQuestion();
    };
    VocabularyFillInComponent.prototype.quit = function () {
        this.router.navigateByUrl('');
    };
    VocabularyFillInComponent.ctorParameters = function () { return [
        { type: _services_vocabulary_service__WEBPACK_IMPORTED_MODULE_4__["VocabularyService"] },
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"] },
        { type: _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__["RandomNumberGeneratorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    VocabularyFillInComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-vocabulary-fill-in',
            template: _raw_loader_vocabulary_fill_in_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_vocabulary_fill_in_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vocabulary_service__WEBPACK_IMPORTED_MODULE_4__["VocabularyService"], apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"], _services_random_number_generator_service__WEBPACK_IMPORTED_MODULE_5__["RandomNumberGeneratorService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], VocabularyFillInComponent);
    return VocabularyFillInComponent;
}());



/***/ }),

/***/ "yxfS":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"col-lg-12 col-xs-12\">\n  <h1><a routerLink=\"\" routerLinkActive=\"active\"><span class=\"titleMy\">{{ titleMy }}</span> <span class=\"titleST\">{{ titleST }}</span></a></h1>\n  <app-menu></app-menu>\n</header>\n");

/***/ }),

/***/ "zH21":
/*!******************************************************************************!*\
  !*** ./src/app/components/verb-overlay-form/verb-overlay-form.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 97;\r\n    position: absolute;\r\n  }\r\n  \r\n  fieldset {\r\n    margin: 0 auto;\r\n    padding: 30px;\r\n    border: none;\r\n    border-radius: 1.25rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-family: \"Roboto\", sans-serif;\r\n    background: rgb(255 255 255);\r\n    border: 1px solid black;\r\n    font-size: 115%;\r\n  }\r\n  \r\n  dl {\r\n    padding: 0;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 1.25rem;\r\n    margin-left: 0;\r\n  }\r\n  \r\n  dt {\r\n    margin: 0;\r\n    padding: 0;\r\n    clear: both;\r\n    font-weight: bold;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n  }\r\n  \r\n  .container{\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 25%;\r\n    padding-left: 35px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 22px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    user-select: none;\r\n  }\r\n  \r\n  dd input {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n  }\r\n  \r\n  .radioCategory {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #eee;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  dd input:checked ~ .radioCategory {\r\n    background-color: #2196F3;\r\n  }\r\n  \r\n  dd .radioCategory:after {\r\n    content: '';\r\n    position: absolute;\r\n    display: none;\r\n  }\r\n  \r\n  dd input:checked ~ .radioCategory:after {\r\n    display: block;\r\n  }\r\n  \r\n  dd .radioCategory:after {\r\n    top: 9px;\r\n    left: 9px;\r\n    width: 8px;\r\n    height: 8px;\r\n    border-radius: 50%;\r\n    background: white;\r\n  }\r\n  \r\n  #buttons {\r\n    margin-bottom: 0;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n  \r\n  input[type='button'] {\r\n    padding: 0.625rem;\r\n    width: 100px;\r\n    background: rgb(30, 126, 52);\r\n    border: none;\r\n    border-radius: 10px;\r\n    text-transform: uppercase;\r\n    color: rgb(255, 255, 255);\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    font-size: 1.0rem;\r\n  }\r\n  \r\n  select {\r\n    margin-top: 0.6rem;\r\n    border-radius: 10px;\r\n    border: 2px solid #CCC;\r\n    padding: 10px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZXJiLW92ZXJsYXktZm9ybS92ZXJiLW92ZXJsYXktZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQ0FBaUM7SUFDakMsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFFdEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtFQUNWOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZlcmItb3ZlcmxheS1mb3JtL3ZlcmItb3ZlcmxheS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5NztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgXHJcbiAgZmllbGRzZXQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1IDI1NSAyNTUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDExNSU7XHJcbiAgfVxyXG4gIFxyXG4gIGRsIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICBkdCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGRkIGlucHV0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuICBcclxuICAucmFkaW9DYXRlZ29yeSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBcclxuICBkZCBpbnB1dDpjaGVja2VkIH4gLnJhZGlvQ2F0ZWdvcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICB9XHJcbiAgXHJcbiAgZGQgLnJhZGlvQ2F0ZWdvcnk6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICBkZCBpbnB1dDpjaGVja2VkIH4gLnJhZGlvQ2F0ZWdvcnk6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIGRkIC5yYWRpb0NhdGVnb3J5OmFmdGVyIHtcclxuICAgIHRvcDogOXB4O1xyXG4gICAgbGVmdDogOXB4O1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gICNidXR0b25zIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT0nYnV0dG9uJ10ge1xyXG4gICAgcGFkZGluZzogMC42MjVyZW07XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzAsIDEyNiwgNTIpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjByZW07XHJcbiAgfVxyXG4gIFxyXG4gIHNlbGVjdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjZyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0NDQztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "AytR");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map