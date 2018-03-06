import { Component, Input, forwardRef } from '@angular/core';
import filestack from 'filestack-js';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

var FILEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return FilePickerComponent; }),
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
    { type: Component, args: [{
                selector: 'obg-file-picker',
                template: "<button class=\"upload\" mat-raised-button (click)=\"upload()\">Upload Files</button>",
                styles: [".upload{\n  width:150px;\n  margin:20px 0;\n}"],
                providers: [FILEPICKER_CONTROL_VALUE_ACCESSOR]
            },] },
];
FilePickerComponent.ctorParameters = function () { return []; };
FilePickerComponent.propDecorators = {
    "options": [{ type: Input },],
    "apikey": [{ type: Input },],
};

export { FILEPICKER_CONTROL_VALUE_ACCESSOR, FilePickerComponent };
//# sourceMappingURL=upstate-filepicker.js.map
