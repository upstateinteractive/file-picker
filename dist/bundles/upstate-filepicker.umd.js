(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('filestack-js'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'filestack-js', '@angular/forms'], factory) :
	(factory((global.upstate = global.upstate || {}, global.upstate.filepicker = {}),global.ng.core,global.filestack,global.ng.forms));
}(this, (function (exports,core,filestack,forms) { 'use strict';

filestack = filestack && filestack.hasOwnProperty('default') ? filestack['default'] : filestack;

var FILEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: forms.NG_VALUE_ACCESSOR,
    useExisting: core.forwardRef(function () { return FilePickerComponent; }),
    multi: true
};
var FilePickerComponent = /** @class */ (function () {
    function FilePickerComponent() {
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    FilePickerComponent.prototype.upload = function () {
        var _this = this;
        this.client.pick(this.options)
            .then(function (data) {
            _this.onChange(data.filesUploaded);
        });
    };
    FilePickerComponent.prototype.writeValue = function (control) {
    };
    FilePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    FilePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    FilePickerComponent.prototype.ngOnInit = function () {
        this.client = filestack.init(this.apikey);
    };
    return FilePickerComponent;
}());
FilePickerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'obg-file-picker',
                template: "<button class=\"upload\" mat-raised-button (click)=\"upload()\">Upload Files</button>",
                styles: [".upload{\n  width:150px;\n  margin:20px 0;\n}"],
                providers: [FILEPICKER_CONTROL_VALUE_ACCESSOR]
            },] },
];
FilePickerComponent.ctorParameters = function () { return []; };
FilePickerComponent.propDecorators = {
    "options": [{ type: core.Input },],
    "apikey": [{ type: core.Input },],
};

exports.FILEPICKER_CONTROL_VALUE_ACCESSOR = FILEPICKER_CONTROL_VALUE_ACCESSOR;
exports.FilePickerComponent = FilePickerComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=upstate-filepicker.umd.js.map
